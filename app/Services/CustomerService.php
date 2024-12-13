<?php


namespace App\Services;

use App\Models\Customer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\CustomerFolder;
use App\Models\CustomerFile;
use Exception;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\CustomerListReport;

class CustomerService {
  public function customerDatatable() {
    $perPage = request('rows') ?? config('response.per_page');
    $user = Auth::user();
    $companyId = $user->admin_company_detail_id;

    $customers = Customer::where('company_id', '=', $companyId)
      ->when(request()->has('company_name'), function ($query) {
        return $query->where('company_name', 'like', '%' . request('company_name') . '%');
      })->when(request()->has('mcNumber'), function ($query) {
        return $query->where('mc_number', 'like', '%' . request('mcNumber') . '%');
      })->when(request()->has('primary_contact'), function ($query) {
        return $query->where('primary_contact', 'like', '%' . request('primary_contact') . '%');
      })->when(request()->has('phone_number'), function ($query) {
        return $query->where('phone_number', 'like', '%' . request('phone_number') . '%');
      })->when(request()->has('email'), function ($query) {
        return $query->where('email', 'like', '%' . request('email') . '%');
      })->when(request()->has('billing_contact'), function ($query) {
        return $query->where('billing_contact', 'like', '%' . request('billing_contact') . '%');
      })->when(request()->has('billing_email'), function ($query) {
        return $query->where('billing_email', 'like', '%' . request('billing_email') . '%');
      })->when(request()->has('payment_terms_day'), function ($query) {
        return $query->where('payment_terms_day', 'like', '%' . request('payment_terms_day') . '%');
      })->when(request()->has('sortField') && request()->has('sortOrder'), function ($query) {
        return $query->orderBy(request('sortField'), request('sortOrder'));
      })->when(request()->has('carrierOnly'), function ($query) {
        return $query->where('type', 'carrier');
      });

    if (request('toDownload') ?? null) {
      return $customers->get();
    }
    return $customers->paginate($perPage);
  }

  public function getAllCustomer() {
    $user = Auth::user();
    $companyId = $user->admin_company_detail_id;
    return Customer::where('company_id', '=', $companyId)
      ->where('status', config('constant.status.customer.active'))
      ->get();
  }

  /**
   * Get Customer Detail
   * @return mixed
   * @throws Exception
   */
  public function getCustomer() {
    $customer = Customer::where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      // The resource file does not have files, so it's commented out yet.
      //->with([
      //  'customerFiles',
      //])
      ->first();

    return $customer;
  }

  public function createCustomer() {
    return DB::transaction(function () {
      $validatedData = $this->getValidatedData();
      $validatedData['user_id'] = auth()->id();
      $validatedData['company_id'] = auth()->user()->admin_company_detail_id;
      $customer = Customer::create($validatedData);
      //add new files
      if (!empty(request('files'))) {
        $customer->customerFiles()->createMany($this->addNewFiles(request('files')));
      }
      return $customer;
    });
  }

  /**
   * Upload Customer files.
   * @param $files
   * @return mixed
   */
  public function addNewFiles($files) {
    $filesToCreate = [];
    foreach ($files as $file) {
      $filesToCreate[] = [
        'folder_id' => $file['folderId'],
        'original_filename' => !empty($file['originalFileName']) ? $file['originalFileName'] : null,
        'filename' => !empty($file['fileName']) ? $file['fileName'] : null
      ];
    }
    return $filesToCreate;
  }

  public function updateCustomer() {
    $customer = Customer::find(request('customer'));
    $validateddata = $this->getValidatedData();
    $customer->update($validateddata);
    return $customer->refresh();
  }

  /**
   * Validate Customer Data
   * @return array
   * @throws Exception
   */
  private function getValidatedData(): array {
    $billingCcEmails = request('billing_cc_emails') ?? null;
    $billingCcEmails = !empty($billingCcEmails) ? implode(',', $billingCcEmails) : null;
    if (strlen($billingCcEmails) > 1000) {
      throw new Exception(config('response.customer.billingCcEmailLimitError'));
    }

    $ccEmails = !empty(request('ccEmails')) ? implode(',', request('ccEmails')) : null;
    if (strlen($ccEmails) > 1000) {
      throw new Exception(config('response.customer.billingCcEmailLimitError'));
    }

    $data = [
      'type' => request('customer_type'),
      'company_name' => request('company_name'),
      'mc_number' => request('mcNumber') ?? null,
      'address' => request('address') ?? '',
      'state' => request('state') ?? '',
      'city' => request('city') ?? '',
      'zip_code' => request('zip_code') ?? '',
      'primary_contact' => request('primary_contact'),
      'phone_number' => request('phone_number'),
      'email' => request('email') ?? '',
      'cc_emails' => $ccEmails,
      'billing_address' => request('billing_address') ?? '',
      'billing_state' => request('billing_state') ?? '',
      'billing_city' => request('billing_city') ?? '',
      'billing_zip_code' => request('billing_zip_code') ?? '',
      'billing_contact' => request('billing_contact'),
      'billing_phone_number' => request('billing_phone_number'),
      'billing_email' => request('billing_email') ?? '',
      'billing_cc_emails' => $billingCcEmails,
      'payment_terms_day' => request('payment_terms_day'),
      'status' => !empty(request('status')) ? config('constant.status.customer')[request('status')]
        : config('constant.status.customer.active'),
      'internal' => !empty(request('inExternal')) ?
        array_search(request('inExternal'), config('constant.customer.inExternal')) : null,
      'sales_rep' => request('salesRep') ?? null,
      'shipping_carrier_acct' => request('shippingCarrierAcct') ?? null,
      'notes' => request('notes') ?? null,
      'no_factoring' => request('noFactoring') ? 1 : null,
      'automation_driver_buttons' => request('automationDriverButtons') ? 127 : null,
    ];
    if (request()->has('mergeInvoice')) {
      $data['merge_invoice'] = request('mergeInvoice') ? 1 : null;
    }
    if (request()->has('massInvoiceUseIndividualInvoices')) {
      $data['mass_invoice_use_individual_invoices'] = request('massInvoiceUseIndividualInvoices') ? 1 : null;
    }
    if (request()->has('billToCodes')) {
      $data = array_merge($data, ['bill_to_codes' => implode(',', request('billToCodes'))]);
    }
    return $data;
  }

  public function delete() {
    $id = request('customer');
    return tap(Customer::findOrFail($id))->delete();
  }

  /**
   * Insert Default 100 Customer (Broker)
   * for each Admin Company
   */
  public function insertDefaultCustomersForEachAdminCompany() {
    return collect(config('data.customer_broker'))
      ->map(function ($broker) {
        $user = Auth::user()->refresh();

        return collect($broker)
          ->except(['no', 'is_billing_same', 'country'])
          ->merge([
            'company_id' => $user->admin_company_detail_id,
            'user_id' => $user->id,
            'created_at' => now(),
            'updated_at' => now(),
          ])
          ->toArray();
      })
      ->chunk(25)
      ->each(function ($brokers) {
        DB::transaction(function () use ($brokers) {
          Customer::insert($brokers->toArray());
        });
      });
  }

  /**
   * Create folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createCustomerV2Folder($request) {
    return CustomerFolder::create(['company_id' => getAuthAdminCompanyId(), 'folder_name' => $request->folderName]);
  }

  /**
   * Get Folder List.
   * @return mixed
   * @throws Exception
   */
  public function getCustomerV2Folders() {
    return CustomerFolder::select('id', 'folder_name AS folderName')->where('company_id', getAuthAdminCompanyId())->get();
  }

  /**
   * Update Folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function updateCustomerV2Folder($request) {
    return DB::transaction(function () use ($request) {
      $folder = CustomerFolder::where('id', $request->folderId)->where('company_id', getAuthAdminCompanyId())->first();
      return $folder->fill(['folder_name' => $request->folderName])->save();
    });
  }

  /**
   * Get customer file List.
   * @return mixed
   * @throws Exception
   */
  public function getCustomerV2Files() {
    $customer = Customer::where('id', request('id'))
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'customerFiles:id,customer_id,folder_id,original_filename,filename',
        'customerFiles.customerFolder:id,folder_name'
      ])
      ->select('id', 'company_id')->first();
    if (empty($customer)) {
      throw new Exception(config('response.customer.not_found'));
    }
    $files = $customer->customerFiles ?? collect();
    if ($files->isEmpty()) {
      return [];
    }
    return $files->map(function ($file) {
      return [
        'id' => $file->id,
        'folderId' => $file->folder_id ?? '',
        'folderName' => $file->customerFolder->folder_name ?? '',
        'originalFileName' => $file->original_filename ?? '',
        'url' => getImage($file->filename, config('constant.s3.customerFiles')) ?? ''
      ];
    });
  }

  /**
   * Create customer file.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function createCustomerV2Files($request) {
    return DB::transaction(function () use ($request) {
      $folderId = $request->folderId;
      $customerId = $request->customerId;
      $customer = Customer::where('id', $customerId)->select('id')->first();
      if ($request->has('files')) {
        $filesToCreate = [];
        $files = request('files');
        foreach ($files as $file) {
          $filesToCreate[] = [
            'folder_id' => $folderId,
            'customer_id' => $customerId,
            'original_filename' => !empty($file['originalFileName']) ? $file['originalFileName'] : null,
            'filename' => !empty($file['fileName']) ? $file['fileName'] : null
          ];
        }
        $customer->customerFiles()->createMany($filesToCreate);
      }
      return $customer;
    });
  }

  /**
   * Delete customer file.
   * @return mixed
   * @throws Exception
   */
  public function deleteCustomerV2File() {
    $customer = Customer::whereHas('customerFiles', function ($query) {
      $query->where('id', request('id'));
    })->where('company_id', getAuthAdminCompanyId())->select('id', 'company_id')->first();
    if (empty($customer)) {
      throw new Exception(config('response.customer.file.not_found'));
    }
    return $customer->customerFiles()->find(request('id'))->delete();
  }

  /**
   * Get customer file urls.
   * @return mixed
   * @throws Exception
   */
  public function getCustomerV2FileUploadUrl() {
    $response = [];
    $companyId = getAuthAdminCompanyId();
    $files = request('files');
    foreach ($files as $index => $file) {
      $response[] = $this->generateFileNameAndPresignedUrl($companyId, $file['extension'], $index);
    }
    return $response;
  }

  /**
   * Get Customer File Upload URL.
   * @param $companyId
   * @param $extension
   * @param $index
   * @return array
   */
  private function generateFileNameAndPresignedUrl($companyId, $extension, $index): array {
    $fileName = 'cf-' . generateUniqueFileName($companyId, $extension, $index);
    return [
      'fileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.customerFiles'))
    ];
  }

  /**
   * Change customer files folder.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function changeCustomerV2FilesFolder($request) {
    if ($request->has('files')) {
      $files = request('files');
      $fileIds = array_column($files, 'fileId');
      if (!empty($fileIds)) {
        //check if any file ids are not belongs to current user company
        $checkCustomerFiles = CustomerFile::whereHas('customer', function ($query) {
          $query->where('company_id', '!=', getAuthAdminCompanyId());
        })->whereIn('id', $fileIds)->count();
        if ($checkCustomerFiles != 0) {
          throw new Exception(config('response.customer.file.not_found'));
        }
        return CustomerFile::whereIn('id', $fileIds)->update(['folder_id' => $request->folderId]);
      }
    }
    return true;
  }

  /**
   * Return the link of Customer list file
   * @param mixed $customers
   * @return array
   * @throws Exception
   */
  function customerListExport($customers): array {
    $url = getAuthAdminCompanyId() . '-Customer-List-Report.xlsx';
    $path = config('constant.export_path') . $url;
    $getReport = new CustomerListReport($customers);
    Excel::store($getReport, $path, 's3');
    return [
      'downloadUrl' => getExportFile($url)
    ];
  }
}

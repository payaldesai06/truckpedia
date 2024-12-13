<?php


namespace App\Services;

use App\Models\FullyCustomized\FcCustomData;
use App\Models\FullyCustomized\FcCustomDataRecordLink;
use App\Models\Invoice;
use App\Models\InvoiceAdditionalCustomPayment;
use App\Models\InvoiceItem;
use App\Models\Load;
use App\Services\FullyCustomized\SyncDataToSubmenuService;
use App\Services\AuthorizeNet\AuthorizeNetService;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use App\Mail\InvoiceV2\InvoiceV2Requested;
use Illuminate\Support\Facades\Mail;
use App\Models\InvoiceCustomPaymentField;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\InvoiceListReport;

class InvoiceV2Service {

  /**
   * Get the list of invoices (both load invoices & manually created invoices).
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function getInvoiceList($request) {
    $perPage = request('perPage') ?? config('response.per_page');
    $adminCompanyId = getAuthAdminCompanyId();
    $filterStatus = $request->has('filter.status')
      && !empty($request->filter['status']) ? $request->filter['status'] : null;
    $invoiceStatuses = [
      'delivered' => config('constant.status.load.delivered'),
      'invoice_created' => config('constant.status.load.invoice_created'),
      'payment_requested' => config('constant.status.load.invoice_sent'),
      'invoice_paid' => config('constant.status.load.invoice_paid')
    ];
    $filterStatuses = $request->has('filter.statuses') &&
      !empty($request->filter['statuses']) ? $request->filter['statuses'] : null;

    $issueDateRange = $request->filter['issueDateRange'] ?? null;
    $isCompanyShipperBroker = isCompanyShipperBroker();
    if (!empty($request->filter['type']) && $request->filter['type'] == array_search('singleLoad', config('constant.invoices.type'))) {
      $timeZone = getCompanyTimezone($adminCompanyId);
      $firstShipDateRange = $request->filter['firstShipDateRange'] ?? null;
      $lastDelDateRange = $request->filter['lastDelDateRange'] ?? null;
      $invoices = Load::select(
        'id',
        'load_unique_id',
        'refrence_id',
        'customer_id',
        'total_amount',
        'invoice_generated_at',
        'admin_company_detail_id',
        'invoice_file_name',
        'status',
        'third_party_carrier_as_customer_id',
        'third_party_carrier_total_amount',
        'paid_amount',
        'payment_option',
      )
        ->addSelect(DB::raw("'$isCompanyShipperBroker' as isCompanyShipperBroker"))
        ->with([
          'customer:id,company_name,payment_terms_day,billing_email,no_factoring',
          'loadShippers:id,load_id,shipping_date,order',
          'loadReceivers:id,load_id,delivery_date,order',
          'thirdPartyCarrier:id,company_name,payment_terms_day,billing_email',
        ])
        ->addSelect(DB::raw("'{$timeZone}' as timezone"))
        ->where(function ($query) {
          // null compares to anything is false in MySQL, so delivered loads will not be returned at all, unless you change an invoiced load back to delivered.
          $query->whereNull('invoice_file_name')
            ->orWhere('invoice_file_name', 'not like', "mass-invoice%");
        })
        // ->where('invoice_file_name', 'not like', "mass-invoice%")
        // ->whereNotNull('invoice_file_name')
        ->where('admin_company_detail_id', $adminCompanyId)
        /*
        ->when(!empty($filterStatus), function ($query) use ($filterStatus) {
          return $query->where('status', config('constant.load.invoice')[$filterStatus]);
        })
        */
        ->when(empty($filterStatuses), function ($query) use ($invoiceStatuses) {
          return $query->whereIn('status', array_keys($invoiceStatuses));
        })
        ->when(!empty($filterStatuses), function ($query) use (
          $filterStatuses,
          $invoiceStatuses
        ) {
          $filteredStatuses = array_map(function ($status) use ($invoiceStatuses) {
            return $invoiceStatuses[$status];
          }, $filterStatuses);
          return $query->whereIn('status', $filteredStatuses);
        })
        ->when($request->has('filter.invoiceNumber') && !empty($request->filter['invoiceNumber']), function ($query) use ($request) {
          return $query->where('load_unique_id', 'like', '%' . $request->filter['invoiceNumber'] . '%');
        })
        ->when(!empty($request->filter['loadReference']), function ($query) use ($request) {
          return $query->where('refrence_id', 'like', '%' . $request->filter['loadReference'] . '%');
        })
        ->when(
          $request->has('filter.amount') && !empty($request->filter['amount']),
          function ($query) use ($request, $isCompanyShipperBroker) {
            $amount = $request->filter['amount'];
            if ($isCompanyShipperBroker) {
              return $query->where('third_party_carrier_total_amount', 'like', '%' . $amount . '%');
            } else {
              return $query->where('total_amount', 'like', '%' . $amount . '%');
            }
          }
        )
        /*
        For singleLoad, this was originally implemented in the wrong way.
        You need to:
        Convert 2023-03-31 startOfDay from company time zone to UTC timestamp, so the result may be 2023-03-31 07:00:00.
        Convert 2023-03-31 endOfDay from company time zone to UTC timestamp, so the result may be 2023-04-01 06:59:59.
        This is wrong
        ->when($request->has('filter.issueDate') && !empty($request->filter['issueDate']), function ($query) use ($request, $timeZone) {
          $issueDate = convertUtcTimestampToLocalCarbonObject($request->filter['issueDate'], 'UTC')->toDateString();
          return $query->where('invoice_generated_at', 'like', '%' . $issueDate . '%');
        })*/
        ->when(!empty($firstShipDateRange), function ($query) use ($firstShipDateRange) {
          $query->whereHas('loadShippers', function ($q) use ($firstShipDateRange) {
            $q->whereBetween(
              'shipping_date',
              [$firstShipDateRange['startDate'], $firstShipDateRange['endDate']]
            );
          });
        })
        ->when(!empty($lastDelDateRange), function ($query) use ($lastDelDateRange) {
          $query->whereHas('loadReceivers', function ($q) use ($lastDelDateRange) {
            $q->whereBetween(
              'delivery_date',
              [$lastDelDateRange['startDate'], $lastDelDateRange['endDate']]
            );
          });
        })
        ->when(!empty($issueDateRange), function ($query) use ($issueDateRange, $timeZone) {
          $query->whereBetween('invoice_generated_at', [
            getLocalDateStartOfDayInUtc($issueDateRange['startDate'], $timeZone)
              ->toDateTimeString(),
            getLocalDateEndOfDayInUtc($issueDateRange['endDate'], $timeZone)
              ->toDateTimeString()
          ]);
        })
        ->when(
          $request->has('filter.customerName') && !empty($request->filter['customerName']),
          function ($query) use ($request, $isCompanyShipperBroker) {
            $name = $request->filter['customerName'];
            if ($isCompanyShipperBroker) {
              return $query->whereHas('thirdPartyCarrier', function (Builder $query1) use ($name) {
                return $query1->where('company_name', 'like', '%' . $name . '%');
              });
            } else {
              return $query->whereHas('customer', function (Builder $query1) use ($name) {
                return $query1->where('company_name', 'like', '%' . $name . '%');
              });
            }
          }
        )
        ->when(request()->has('sortBy.field') && request()->has('sortBy.order'), function ($query) use ($request) {
          if ($request->sortBy['field'] == array_search('customer_name', config('constant.load.sortBy.field'))) {
            return $query->orderBy(function ($query) {
              $query->selectRaw('company_name')
                ->from('customers')
                ->whereColumn('customers.id', 'loads.customer_id');
            }, request('sortBy.order'));
          } else {
            return $query->orderBy(config('constant.load.sortBy.field')[request('sortBy.field')], request('sortBy.order'));
          }
        }, function ($query) {
          return $query->orderBy('id', 'desc');
        });
    } else {
      $invoices = Invoice::select(
        'id',
        'invoice_number',
        'customer_id',
        'balance_due',
        'due_date',
        'issue_date',
        'company_id',
        'storage_file_name',
        'status',
        'shipping_address',
      )
        ->where('company_id', $adminCompanyId)
        ->when($request->has('filter.status') && !empty($request->filter['status']), function ($query) use ($request) {
          return $query->where('status', array_search($request->filter['status'], config('constant.status.invoice')));
        })
        ->when($request->has('filter.invoiceNumber') && !empty($request->filter['invoiceNumber']), function ($query) use ($request) {
          return $query->where('invoice_number', 'like', '%' . $request->filter['invoiceNumber'] . '%');
        })
        ->when($request->has('filter.amount') && !empty($request->filter['amount']), function ($query) use ($request) {
          return $query->where('balance_due', 'like', '%' . $request->filter['amount'] . '%');
        })
        ->when($request->has('filter.issueDate') && !empty($request->filter['issueDate']), function ($query) use ($request) {
          return $query->where('issue_date', 'like', '%' . $request->filter['issueDate'] . '%');
        })
        ->when(!empty($issueDateRange), function ($query) use ($issueDateRange) {
          $query->whereBetween('issue_date', [
            $issueDateRange['startDate'], $issueDateRange['endDate']
          ]);
        })
        ->when($request->has('filter.dueDate') && !empty($request->filter['dueDate']), function ($query) use ($request) {
          return $query->where('due_date', 'like', '%' . $request->filter['dueDate'] . '%');
        })
        ->when($request->has('filter.customerName') && !empty($request->filter['customerName']), function ($query) use ($request) {
          $name = request('filter.customerName');
          return $query->whereHas('customer', function (Builder $query) use ($name) {
            return $query->where('company_name', 'like', '%' . $name . '%');
          });
        })
        ->when($request->has('filter.salesRep') && !empty($request->filter['salesRep']), function ($query) {
          $salesRep = request('filter.salesRep');
          return $query->whereHas('customer', function (Builder $query) use ($salesRep) {
            return $query->where('sales_rep', 'like', '%' . $salesRep . '%');
          });
        })
        ->when(request()->has(['sortBy.field', 'sortBy.order']), function ($query) use ($request) {
          if ($request->sortBy['field'] == array_search('customer_name', config('constant.invoices.sortBy.field'))) {
            return $query->orderBy(function ($query) {
              $query->selectRaw('company_name')
                ->from('customers')
                ->whereColumn('customers.id', 'invoices.customer_id');
            }, request('sortBy.order'));
          } else {
            return $query->orderBy(config('constant.invoices.sortBy.field')[request('sortBy.field')], request('sortBy.order'));
          }
        }, function ($query) {
          return $query->orderBy('id', 'desc');
        });
      if ($request->has('filter.toDownload') && !empty($request->filter['toDownload'])) {
        $invoices->with([
          'customer:id,company_name,payment_terms_day,billing_email',
          'invoiceItems:id,invoice_id,name,amount,qty',
        ]);
      } else {
        $invoices->with([
          'customer:id,company_name,payment_terms_day,billing_email,sales_rep',
        ]);
      }
    }
    if (
      request('filter.toDownload') &&
      request('filter.type') == config('constant.invoices.type.manual')
    ) {
      return $invoices->get();
    } else {
      return $invoices->paginate($perPage);
    }
  }

  /**
   * Return the link of invoice list file
   * @param $invoices
   * @return array
   * @throws Exception
   */
  function invoiceListExport($invoices): array {
    $url = getAuthAdminCompanyId() . '-Invoices-Report.xlsx';
    $path = config('constant.export_path') . $url;
    $maxItems = count(collect($invoices)->flatten()->pluck('invoiceItems')->max()) ?? 0;
    Excel::store(new InvoiceListReport($invoices, $maxItems), $path, 's3');
    return [
      "downloadUrl" => getExportFile($url)
    ];
  }

  /**
   * Create invoice.
   * @return array
   * @throws Exception
   */
  public function createInvoice(): array {
    $invoice = $this->createOrUpdateInvoiceWithItemData();
    return ['id' => $invoice->id];
  }

  /**
   * Update invoice.
   * @return mixed
   * @throws Exception
   */
  public function updateInvoice() {
    return $this->createOrUpdateInvoiceWithItemData();
  }

  /**
   * Create Or Update InvoiceWithItemData Invoice and Invoice Item using validated request data.
   * @return mixed
   */
  private function createOrUpdateInvoiceWithItemData() {
    return DB::transaction(function () {
      $validatedData = $this->getValidatedData();
      $invoiceId = request('invoiceId');
      $isNeedsToSendEmail = true;
      $draftStatus = config('constant.status.invoice')[1];
      $requestedStatus = config('constant.status.invoice')[2];
      $paidStatus = config('constant.status.invoice')[3];

      if (!empty($invoiceId)) {
        $invoice = Invoice::where('id', $invoiceId)->select('id', 'status')->first();
        $invoiceStatus = config('constant.status.invoice')[$invoice->status];
        if (in_array($invoiceStatus, [$requestedStatus, $paidStatus])) {
          if (request('status') != $invoiceStatus) {
            throw new Exception("Invalid: status cannot be changed during edit.");
          }
          $isNeedsToSendEmail = false;
        }
        $invoice->fill($validatedData)->save();
      } else {
        $invoice = Invoice::create($validatedData);
      }

      /* Create/Update Invoice Items. */
      $this->createOrUpdateInvoiceItems($invoice);

      /* Create/Update Invoice Custom Payments.*/
      $this->createOrUpdateInvoiceCustomPayments($invoice);

      if (request('status') != $draftStatus) {
        $invoice = $invoice->where('id', $invoice->id)->with([
          'company:id,email,phone_number,business_name,company_image,address,city,state,zipcode,billing_cc_emails',
          'customer:id,billing_email,company_name,billing_contact,billing_address,billing_state,billing_city,billing_zip_code,billing_cc_emails,billing_phone_number,sales_rep,shipping_carrier_acct',
          'invoiceItems:id,invoice_id,name,rate,qty,amount',
          'invoiceAdditionalCustomPayments:id,invoice_id,field_id,payment,percentage_in_fractional',
          'invoiceAdditionalCustomPayments.invoiceCustomPaymentField:id,company_id,name',
          'invoicePayments:id,invoice_id,transaction_id,amount_paid,status,card_last_4,created_at'
        ])->first();
        $PDFFileName = $this->createPdfInvoice($invoice);
        $invoice->update(['storage_file_name' => $PDFFileName]);

        if ($isNeedsToSendEmail) {
          $this->sendEmailOnPaymentRequested($invoice->customer, $invoice);
        }
      }
      return $invoice;
    });
  }

  private function calculateBalanceDue($items, $additionalCustomPayments) {
    $subTotal = 0;
    if (!empty($items)) {
      foreach ($items as $item) {
        $subTotal = $subTotal + ($item['rate'] * $item['qty']);
      }
    }
    $subTotal = round($subTotal, 2);
    $customPaymentsTotal = 0;
    if (!empty($additionalCustomPayments)) {
      foreach ($additionalCustomPayments as $additionalCustomPayment) {
        if (array_key_exists('percentage', $additionalCustomPayment) && !is_null($additionalCustomPayment['percentage'])) {
          /* payment = subtotal * percentage. */
          $payment = $additionalCustomPayment['percentage'] * $subTotal / 100;
          $payment = round($payment, 2);
        } else {
          $payment = $additionalCustomPayment['payment'];
        }
        $customPaymentsTotal = $customPaymentsTotal + $payment;
      }
    }
    return round($customPaymentsTotal + $subTotal, 2);
  }

  /**
   * Create or Update Invoice Custom Payments.
   * @param $invoice
   * @return void
   */
  private function createOrUpdateInvoiceCustomPayments($invoice) {
    $requestAdditionalCustomPayments = request('additionalCustomPayments');
    $oldCustomPayments = $invoice->invoiceAdditionalCustomPayments();

    if (!empty($requestAdditionalCustomPayments)) {
      /* delete non-existing items  */
      $latestPaymentIds = array_column($requestAdditionalCustomPayments, 'id') ?? [];
      $oldPayments = $oldCustomPayments->pluck('id')->toArray() ?? [];
      $oldCustomPayments
        ->whereIn(
          'id',
          array_diff($oldPayments, $latestPaymentIds)
        )->delete();

      /* update items values */
      $itemData = [];
      foreach ($requestAdditionalCustomPayments as $requestAdditionalCustomPayment) {
        $data = [
          'field_id' => $requestAdditionalCustomPayment['fieldId'],
          'payment' => $requestAdditionalCustomPayment['payment'] ?? null,
          'percentage_in_fractional' => array_key_exists('percentage', $requestAdditionalCustomPayment) && !is_null($requestAdditionalCustomPayment['percentage']) ? round($requestAdditionalCustomPayment['percentage'] / 100, 4) : null
        ];
        if (!empty($requestAdditionalCustomPayment['id'])) {
          InvoiceAdditionalCustomPayment::where('id', $requestAdditionalCustomPayment['id'])->update($data);
        } else {
          $itemData[] = $data;
        }
      }

      /* Create new items */
      if (!empty($itemData)) {
        $invoice->invoiceAdditionalCustomPayments()->createMany($itemData);
      }
    } else {
      $oldCustomPayments->delete();
    }
  }

  /**
   * Create or Update Invoice Items.
   * @param $invoice
   * @return void
   */
  private function createOrUpdateInvoiceItems($invoice) {
    $newInvoiceItems = request('items');
    $oldInvoiceItems = $invoice->invoiceItems()->get();
    if (!empty($newInvoiceItems)) {
      /* delete non-existing items  */
      $newIds = array_column($newInvoiceItems, 'id') ?? [];
      $oldIds = $oldInvoiceItems->pluck('id')->toArray() ?? [];
      $toDeleteItems = $oldInvoiceItems
        ->whereIn(
          'id',
          array_diff($oldIds, $newIds)
        );
      $this->deleteDataFromSubmenu($toDeleteItems);
      $toDeleteItems->map->delete();

      foreach ($newInvoiceItems as $item) {
        $amount = (float)($item['rate'] * $item['qty']);
        $data = [
          'id' => $item['id'] ?? null,
          'name' => $item['name'],
          'rate' => $item['rate'],
          'qty' => $item['qty'],
          'amount' => round($amount, 2),
          'invoice_id' => $invoice->id,
        ];

        $invoiceItem = InvoiceItem::updateOrCreate(['id' => $data['id']], $data);

        // For now, we do not allow users to change one item's record id.
        if (!empty($item['syncToMenu'])) {
          $recordId = $this->syncDataToSubmenu(
            $invoice->invoice_number,
            $invoiceItem,
            $item['syncToMenu']
          );
          if (empty($data['id']) && $recordId) {
            $invoiceItem->update(['fc_custom_record_id' => $recordId]);
          }
        }
      }
    } else {
      $this->deleteDataFromSubmenu($oldInvoiceItems);
      $oldInvoiceItems->map->delete();
    }
  }

  private function syncDataToSubmenu($invoiceNumber, $invoiceItem, $syncToMenuRequest) {
    /*if ($isNew && empty($syncToMenu)) {
      return;
    }
    if (!$isNew && empty($invoiceItem->fc_custom_record_id)) {
      return;
    }*/
    $companyId = getAuthAdminCompanyId();
    if (!isset(config('user_customization')[$companyId]['syncInvoiceToMenu'])) {
      return null;
    }
    $submenuSyncService = new SyncDataToSubmenuService();

    // If new, we need to create one menu record.
    // If not new, we only need to update field values.
    $recordLinkValues = $syncToMenuRequest['recordLinkValues'] ?? [];

    $syncToMenu = config('user_customization')[$companyId]['syncInvoiceToMenu'];
    $data = [
      'submenuId' => $syncToMenu['submenuId'],
      'dataSource' => 'invoiceItem',
      'recordData' => [
        [
          'recordId' => $invoiceItem->fc_custom_record_id,
          'dataSourceId' => $invoiceItem['id'],
          'customFieldsData' => [
            [
              'fieldId' => $syncToMenu['textFieldId'],
              'textValue' => $invoiceNumber,
            ],
            [
              'fieldId' => $syncToMenu['numberFieldId'],
              'numberValue' => $invoiceItem['qty'],
            ],
            [
              'fieldId' => $syncToMenu['currencyFieldId'],
              'currencyValue' => $invoiceItem['rate'],
            ],
            [
              'fieldId' => $syncToMenu['singleSelectFieldId'],
              'singleSelectValue' => $syncToMenuRequest['singleSelectValue'] ?? null,
            ],
            [
              'fieldId' => $syncToMenu['recordLinksFieldId'],
              'recordLinkValues' => $recordLinkValues,
            ],
          ],
        ],
      ],
    ];
    return $submenuSyncService->syncDataToSubmenu($data)['records'][0]['recordId'];
  }

  private function deleteDataFromSubmenu($invoiceItems) {
    if (empty($invoiceItems) || $invoiceItems->isEmpty()) {
      return;
    }
    $companyId = getAuthAdminCompanyId();
    if (!isset(config('user_customization')[$companyId]['syncInvoiceToMenu'])) {
      return null;
    }

    $submenuSyncService = new SyncDataToSubmenuService();
    $data = [
      'submenuId' => config('user_customization')[$companyId]['syncInvoiceToMenu']['submenuId'],
      'records' => $invoiceItems->whereNotNull('fc_custom_record_id')
        ->map(function ($invoiceItem) {
          return [
            'recordId' => $invoiceItem->fc_custom_record_id,
          ];
        })->toArray() ?? [],
    ];
    if (!empty($data['records'])) {
      return $submenuSyncService->deleteRecordsFromSubmenu($data);
    }
  }

  /**
   * Validated request data to create invoice.
   * @return array
   * @throws Exception
   */
  private function getValidatedData(): array {
    $status = array_search(request('status'), config('constant.status.invoice'));
    if (!empty(request('invoiceNumber'))) {
      $isExist = Invoice::where('company_id', getAuthAdminCompanyId())
        ->where('id', '!=', request('invoiceId'))
        ->where('invoice_number', request('invoiceNumber'))->exists();
      if ($isExist) {
        throw new Exception('This Invoice number already exists.');
      }
    }
    $data = [
      'status' => $status,
      'company_id' => getAuthAdminCompanyId(),
      'customer_id' => request('customerId') ?? null,
      'invoice_number' => request('invoiceNumber') ?? null,
      'due_date' => request('dueDate') ?? null,
      'shipping_address' => request('shippingAddress') ?? null,
      'notes' => request('notes') ?? null,
      'balance_due' => $this->calculateBalanceDue(request('items'), request('additionalCustomPayments')) ?? null,
    ];
    if ($status == array_search('requested', config('constant.status.invoice'))) {
      $issueDate = Carbon::now()->setTimezone(getCompanyTimezone());
      $data = array_merge($data, ['issue_date' => $issueDate->toDateString()]);
    }

    return $data;
  }

  /**
   * Mark as paid invoice.
   * @return mixed
   * @throws Exception
   */
  public function markPaid() {
    return Invoice::where('id', request('invoiceId'))->update(['status' => array_search('paid', config('constant.status.invoice'))]);
  }

  /**
   * Create invoice custom payment field.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function createInvoiceV2CustomPaymentField($request): array {
    $fieldData = ['company_id' => getAuthAdminCompanyId(), 'name' => $request->name, 'description' => $request->description ?? null, 'percentage_of' => !empty($request->percentageOf) ? array_search($request->percentageOf, config('constant.invoices.percentageOf')) : null];
    $field = InvoiceCustomPaymentField::create($fieldData);
    return [
      'fieldId' => $field->id
    ];
  }

  /**
   * Get invoice custom payment fields.
   * @return mixed
   * @throws Exception
   */
  public function getInvoiceV2CustomPaymentFields() {
    $invoiceCustomPaymentFields = InvoiceCustomPaymentField::where('company_id', getAuthAdminCompanyId())
      ->select('id', 'name', 'description', 'percentage_of')->get();
    $fields = [];
    foreach ($invoiceCustomPaymentFields as $field) {
      $fields[] = [
        'fieldId' => $field->id ?? '',
        'name' => $field->name ?? '',
        'description' => $field->description ?? '',
        'percentageOf' => $field->percentage_of ? config('constant.invoices.percentageOf')[$field->percentage_of] ?? '' : '',
      ];
    }
    return ['fields' => $fields];
  }


  /**
   * Get invoice by invoiceId
   * @return array
   * @throws Exception
   */
  public function getInvoice(): array {
    $companyId = getAuthAdminCompanyId();
    $invoice = Invoice::where('id', request('invoiceId'))
      ->where('company_id', $companyId)
      /*->when(auth()->check(), function ($query) use ($companyId) {
        return $query->where('company_id', $companyId);
      })*/
      ->with([
        'invoiceItems:id,invoice_id,name,rate,qty,fc_custom_record_id',
        'invoiceAdditionalCustomPayments:id,invoice_id,field_id,payment,percentage_in_fractional',
        'invoicePayments:id,invoice_id,transaction_id,amount_paid,card_issuing_bank,status,card_last_4,created_at',
      ])
      ->first();
    if (empty($invoice)) {
      throw new Exception(config('response.error'));
    }
    $resp = [
      'invoiceId' => $invoice->id ?? "",
      'status' => $invoice->status ? config('constant.status.invoice')[$invoice->status] : '',
      'notes' => $invoice->notes ?? '',
    ];
    $resp['customerId'] = $invoice->customer_id ?? "";
    $resp['invoiceNumber'] = $invoice->invoice_number ?? "";
    $resp['issueDate'] = !empty($invoice->issue_date) ? $invoice->issue_date->toDateString() : null;
    $resp['dueDate'] = !empty($invoice->due_date) ? $invoice->due_date->toDateString() : null;
    $resp['shippingAddress'] = $invoice->shipping_address ?? "";

    $singleSelectValues = collect();
    $recordLinks = collect();
    $syncToMenu = config('user_customization')[$companyId]['syncInvoiceToMenu'] ?? null;
    if (!empty($syncToMenu)) {
      $recordIds = $invoice->invoiceItems->pluck('fc_custom_record_id')
        ->filter()->toArray();
      $recordLinks = FcCustomDataRecordLink::whereIn(
        'record_id',
        $recordIds
      )->where('field_id', $syncToMenu['recordLinksFieldId'])->get();
      $singleSelectValues = FcCustomData::whereIn('record_id', $recordIds)
        ->where('field_id', $syncToMenu['singleSelectFieldId'])->get();
    }

    if ($invoice->invoiceItems->isNotEmpty()) {
      $resp['items'] = $invoice->invoiceItems->map(function ($item) use (
        $singleSelectValues,
        $recordLinks
      ) {
        $ret = [
          "id" => $item->id ?? '',
          "name" => $item->name ?? '',
          "rate" => $item->rate ?? null,
          "qty" => $item->qty ?? null
        ];
        if ($item->fc_custom_record_id) {
          $ret['syncToMenu'] = [
            'singleSelectValue' => $singleSelectValues->where(
              'record_id',
              $item->fc_custom_record_id
            )->first()->single_select_value ?? null,
            'recordLinkValues' => $recordLinks->where(
              'record_id',
              $item->fc_custom_record_id
            )->pluck('linked_record_id')->filter()->map(function ($linkedRecordId) {
              return [
                'recordId' => $linkedRecordId,
              ];
            })->toArray() ?? []
          ];
        }
        return $ret;
      }) ?? [];
    }
    if ($invoice->invoiceAdditionalCustomPayments->isNotEmpty()) {
      $resp['additionalCustomPayments'] = $invoice->invoiceAdditionalCustomPayments->map(function ($pay) {
        return [
          "id" => $pay->id ?? '',
          "fieldId" => $pay->field_id ?? '',
          "payment" => $pay->payment ?? null,
          "percentage" => !is_null($pay->percentage_in_fractional) ? round($pay->percentage_in_fractional * 100, 2) : null,
        ];
      }) ?? [];
    }
    $resp['invoicePayments'] = $invoice->invoicePayments->map(function ($payment) {
      return [
        'invoicePaymentId' => $payment->id ?? null,
        'amountPaid' => $payment->amount_paid ?? null,
        'status' => $payment->status
          ? config('constant.invoices.status.invoicePayments')[$payment->status] : 'processing',
        "transactionId" => $payment->transaction_id ?? null,
        'cardIssuingBank' => $payment->card_issuing_bank ?? null,
        'cardLast4' => $payment->card_last_4 ?? null,
        'last4Digits' => $payment->card_last_4 ? substr($payment->card_last_4, -4) : null,
        'utcDatetime' => $payment->created_at ?
          $payment->created_at->format(config('constant.date_time_format')) : null,
      ];
    })->toArray();
    return $resp;
  }

  /**
   * Request for payment.
   * @param $request
   * @return void
   * @throws Exception
   */
  public function requestPayment($request) {
    $invoice = Invoice::where('id', $request->invoiceId)
      ->where('company_id', getAuthAdminCompanyId())
      ->with([
        'company:id,email,phone_number,business_name,company_image,address,city,state,zipcode,billing_cc_emails',
        'customer:id,billing_email,company_name,billing_address,billing_state,billing_city,billing_zip_code,billing_cc_emails,billing_phone_number,sales_rep,shipping_carrier_acct',
        'invoiceItems:id,invoice_id,name,rate,qty,amount',
        'invoiceAdditionalCustomPayments:id,invoice_id,field_id,payment,percentage_in_fractional',
        'invoiceAdditionalCustomPayments.invoiceCustomPaymentField:id,company_id,name'
      ])
      ->first();
    /* send empty mail for now to customer billing email. */
    $this->sendEmailOnPaymentRequested($invoice->customer, $invoice);
  }

  /**
   * @param $customer
   * @param $invoice
   * @return void
   */
  private function sendEmailOnPaymentRequested($customer, $invoice): void {
    Mail::queue(new InvoiceV2Requested($invoice, $customer));
  }

  /**
   * Make pdf file save in AWS s3 and return pdf file name
   * @param $invoice
   * @return string
   * @throws Exception
   */
  public function createPdfInvoice($invoice): string {
    $S3Folder = config('constant.s3.load_invoice');
    $PDFFileName = 'invoice-' . generateUniqueFileName(getAuthAdminCompanyId(), 'pdf', $invoice->id);
    $invoiceFilePath = "{$S3Folder}{$PDFFileName}";
    $paymentLink = null;
    $company = $invoice->company;
    if ($company && in_array(
      $company->id,
      config('user_customization.useAuthorizeNetForManualInvoice')
    )) {
      $authorizeNetService = new AuthorizeNetService();
      $authorizeNet = $authorizeNetService->checkIfCompanyHasAuthorizeNetAccount($company->id);
      if ($authorizeNet) {
        $paymentLink = $authorizeNetService->getPaymentLink($invoice->id);
      }
    }
    $pdf = PDF::loadView('Invoice.pdf-invoice', compact('invoice', 'paymentLink'))
      ->setPaper('letter', 'portrait');
    uploadFileToS3($invoiceFilePath, $pdf->output());
    return $PDFFileName;
  }

  /**
   * Get the next invoice number
   * @return mixed
   * @throws Exception
   */
  public function getNextInvoiceNumber() {
    $invoice = Invoice::where('company_id', getAuthAdminCompanyId())
      ->select('invoice_number')
      ->orderBy('id', 'desc')
      ->first();
    $numericString = null;
    if (!empty($invoice) && is_numeric($invoice->invoice_number)) {
      $numericString = strval($invoice->invoice_number + 1);
    }
    return ['invoiceNumber' => $numericString];
  }

  /**
   * Delete Invoice.
   * @param $request
   * @return mixed
   * @throws Exception
   */
  public function deleteInvoice($request) {
    $invoice = Invoice::select(['id', 'company_id'])
      ->with(['invoiceItems:id,invoice_id,fc_custom_record_id'])
      ->where('id', $request->invoiceId)
      ->where('company_id', getAuthAdminCompanyId())
      ->first();

    $this->deleteDataFromSubmenu($invoice->invoiceItems);
    return $invoice->delete();
  }

  public function getPaymentDetailsFromPublicUrl($url) {
    $invoiceId = (int) decrypt(Str::afterLast($url, '/'));

    $invoice = Invoice::select([
      'id', 'customer_id', 'company_id', 'due_date', 'issue_date',
      'balance_due', 'status', 'invoice_number', 'notes',
    ])
      ->with([
        'company:id,business_name,company_image,address,state,city,zipcode,phone_number,email',
        'customer:id,company_name,billing_address,billing_state,billing_city,billing_zip_code,billing_phone_number,billing_email',
        'invoiceItems:id,invoice_id,name,rate,qty',
        'invoiceAdditionalCustomPayments:id,invoice_id,field_id,payment,percentage_in_fractional',
        'invoicePayments:id,invoice_id,transaction_id,amount_paid,status,card_last_4,created_at',
      ])
      ->findOrFail($invoiceId);

    $company = $invoice->company;
    $customer = $invoice->customer;

    $resp = [
      'invoiceId' => $invoice->id ?? null,
      'status' => $invoice->status ? config('constant.status.invoice')[$invoice->status] : null,
      'invoiceNumber' => $invoice->invoice_number ?? null,
      'customerId' => $invoice->customer_id ?? null,
      'notes' => $invoice->notes ?? '',
      'dueDate' => !empty($invoice->due_date) ? $invoice->due_date->toDateString() : null,
      'issueDate' => $invoice->issue_date,
      'amountPaid' => $invoice->invoicePayments->sum('amount_paid'),
      'balanceDue' => $invoice->balance_due,
      'company' => [
        'id' => $company->id ?? '',
        'name' => $company->business_name ?? '',
        'logoUrl' => $company->company_image ?? '',
        'address' => $company->address ?? '',
        'state' => $company->state ?? '',
        'city' => $company->city ?? '',
        'zipCode' => $company->zipcode ?? '',
        'phoneNumber' => $company->phone_number ?? '',
        'email' => $company->email ?? '',
      ],
      'customer' => [
        'id' => $customer->id ?? '',
        'name' => $customer->company_name ?? '',
        'billingAddress' => $customer->billing_address ?? '',
        'billingState' => $customer->billing_state ?? '',
        'billingCity' => $customer->billing_city ?? '',
        'billingZipCode' => $customer->billing_zip_code ?? '',
        'billingPhoneNumber' => $customer->billing_phone_number ?? '',
        'billingEmail' => $customer->billing_email ?? '',
      ],
    ];

    if ($invoice->invoiceItems->isNotEmpty()) {
      $resp['items'] = $invoice->invoiceItems->map(function ($item) {
        $ret = [
          "id" => $item->id ?? null,
          "name" => $item->name ?? '',
          "rate" => $item->rate ?? null,
          "qty" => $item->qty ?? null
        ];
        return $ret;
      }) ?? [];
    }
    if ($invoice->invoiceAdditionalCustomPayments->isNotEmpty()) {
      $resp['additionalCustomPayments'] = $invoice->invoiceAdditionalCustomPayments->map(function ($pay) {
        return [
          "id" => $pay->id ?? null,
          "fieldId" => $pay->field_id ?? null,
          "payment" => $pay->payment ?? null,
          "percentage" => !is_null($pay->percentage_in_fractional) ? round($pay->percentage_in_fractional * 100, 2) : null,
        ];
      }) ?? [];
    }
    if ($invoice->invoicePayments->isNotEmpty()) {
      $resp['invoicePayments'] = $invoice->invoicePayments->map(function ($pay) {
        return [
          "invoicePaymentId" => $pay->id ?? null,
          "amountPaid" => $pay->amount_paid ?? null,
          "transactionId" => $pay->transaction_id ?? null,
          "status" => $pay->status ? config('constant.invoices.status.invoicePayments')[$pay->status] : 'processing',
          "last4Digits" => $pay->card_last_4 ? substr($pay->card_last_4, -4) : null,
          "utcDatetime" => $pay->created_at ?
            $pay->created_at->format(config('constant.date_time_format')) : null,
        ];
      }) ?? [];
    }

    return $resp;
  }
}

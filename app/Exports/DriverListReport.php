<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class DriverListReport implements FromCollection, WithHeadings, WithStyles, WithEvents {
  /**
   * @return Collection
   */
  private $driverReport;
  private $folders;

  public function __construct($driverReport, $folders) {
    $this->driverReport = $driverReport;
    $this->folders = $folders;
  }

  public function collection(): Collection {
    $data = [];
    foreach ($this->driverReport as $user) {
      $driver = $user->driverDetail;
      $trailer = $driver->assignmentTrailer;
      $truck = $driver->assignmentTruck;
      $tags = implode(', ', $user->tags->pluck('business_name')->toArray() ?? []);
      $row = [
        'name' => "{$user->first_name} {$user->last_name}",
        'truckNumber' => optional($truck)->number ?? '',
        'trailerNumber' => optional($trailer)->number ?? '',
        'phone' => $driver->phone_number ?? '',
        'email' => $user->email ?? '',
        'driverType' => $this->formatDriverType($driver->type ?? ''),
        'status' => $user->status ?? '',
        'approval_status' => !empty($driver->approval_status)
          ? config('constant.driver.approvalStatusFeString')[$driver->approval_status] : '',
        'tag' => $tags ?? '',
        'Team' => $driver->team_driver == 1 ? 'yes' : '',
        'Local' => $driver->local_driver == 1 ? 'yes' : '',
        'Regional' => $driver->regional_driver == 1 ? 'yes' : '',
        'company_employee_id' => $driver->company_employee_id ?? '',
        'ssn' => $driver->ssn ?? '',
        'birth_date' => optional($driver->birth_date)
          ->format(config('constant.date_format')) ?? '',
        'driving_license' => $driver->driving_license ?? '',
        'driver_license_class' => $driver->driver_license_class ?
          config('constant.driver.cdlClass')[$driver->driver_license_class] : '',
        'issue_state' => $driver->issue_state ?? '',
        'original_driver_license_date' => optional($driver->original_driver_license_date)
          ->format(config('constant.date_format')) ?? '',
        'driving_license_expire_date' => optional($driver->driving_license_expire_date)
          ->format(config('constant.date_format')) ?? '',
        'medical_expire_date' => optional($driver->medical_expire_date)
          ->format(config('constant.date_format')) ?? '',
        'excepted_inter_intrastate_type' => !empty($driver->excepted_inter_intrastate_type) ?
          config('constant.driver.exceptedInterIntrastateTypeFront')[$driver->excepted_inter_intrastate_type]
          : '',
        'endorsements' => $driver->endorsements ?? '',
        'drug_pool' => !empty($driver->drug_pool)
          ? config('constant.driver.drugPool')[$driver->drug_pool] : '',
        'road_test_completed_date' => optional($driver->road_test_completed_date)
          ->format(config('constant.date_format')) ?? '',
        'date_added' => optional($driver->date_added)
          ->format(config('constant.date_format')) ?? '',
        'date_removed' => optional($driver->date_removed)
          ->format(config('constant.date_format')) ?? '',
        'notes' => !empty($user->driverNotes) ?
          implode(', ', $user->driverNotes->pluck('note')->toArray())
          : '',
      ];
      if (!empty($this->folders)) {
        foreach ($this->folders as $folder) {
          $driverFiles = 0;
          if ($user->driverFilesV2->isNotEmpty()) {
            $driverFiles = $user->driverFilesV2->where('folder_id', $folder['id'])->count();
          }
          $row[$folder['folder_name']] = $driverFiles > 0 ? 'Yes' : 'No';
        }
      }
      $data[] = $row;
    }
    return collect($data);
  }

  private function formatDriverType($type) {
    if (empty($type)) {
      return $type;
    }
    $strArray = explode('_', $type);
    $strArray = array_map(function ($str) {
      return ucfirst($str);
    }, $strArray);
    return implode(' ', $strArray);
  }

  /**
   * Define the Heading of Column
   * @return string[]
   */
  public function headings(): array {
    $headings = [
      "Name",
      "Truck",
      "Trailer",
      "Phone",
      "Email",
      "Driver Type",
      "Status",
      "Approval Status",
      "Tag",
      "Team",
      "Local",
      "Regional",
      "Employee ID",
      "Social Security",
      "Date of Birth",
      "CDL Number",
      "CDL Class",
      "CDL State",
      "Original CDL Date",
      "CDL Expiration Date",
      "Medical Card Expiration Date",
      "Commercial Operation Type",
      "Endorsements",
      "Drug Pool",
      "Road Test Completed Date",
      "Date Added",
      "Date Removed",
      "Notes",
    ];
    if (!empty($this->folders)) {
      $folders = array_map(
        function ($value) {
          return 'Files: ' . $value['folder_name'];
        },
        $this->folders
      );
      $headings = array_merge($headings, $folders);
    }
    return $headings;
  }

  /**
   * Style of worksheet
   * @param Worksheet $sheet
   * @return array[]
   */
  public function styles(Worksheet $sheet) {
    return [
      1 => ['font' => ['bold' => true]]
    ];
  }

  /**
   * @return mixed
   */
  public function registerEvents(): array {
    return [
      AfterSheet::class => function (AfterSheet $event) {
        $event->sheet->autoSize();
        $event->sheet->getDelegate()->getStyle('A:Z')
          ->getAlignment()
          ->setHorizontal(Alignment::HORIZONTAL_LEFT);
      },
    ];
  }
}

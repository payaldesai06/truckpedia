<?php

namespace App\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithStyles;

class MaintenanceIssueListReport implements FromCollection, WithHeadings, WithEvents, WithStyles {

  /**
   * @return Collection
   */
  private $maintenanceIssues;

  public function __construct($maintenanceIssues) {
    $this->maintenanceIssues = $maintenanceIssues;
  }

  /**
   * Create a collection
   *
   * @return Collection
   */
  public function collection(): Collection {
    $data = [];
    foreach ($this->maintenanceIssues as $issue) {
      $unit = '';
      $year = '';
      $make = '';
      $vin = '';
      if (!empty($issue->truck)) {
        $unit = $issue->truck->number ?? '';
        $year = $issue->truck->year ?? '';
        $make = $issue->truck->make ?? '';
        $vin = $issue->truck->truck_vin ?? '';
      } elseif (!empty($issue->trailer)) {
        $unit = $issue->trailer->number ?? '';
        $year = $issue->trailer->year ?? '';
        $make = $issue->trailer->make ?? '';
        $vin = $issue->trailer->vin ?? '';
      }

      $serviceType = $issue->service_type ?? '';
      $lastModifiedByUserFullName =
        !empty($issue->lastModifiedUser) ? userFullName($issue->lastModifiedUser) : '';
      $reportedByUserFullName =
        !empty($issue->reportedByUser) ? userFullName($issue->reportedByUser) : '';
      $data[] = [
        'issueNumber' => $issue->issue_number ?? '',
        'status' => config('constant.maintenance.issue.statusFeString')[$issue->status] ?? '',
        'reportedByUserFullName' => $reportedByUserFullName ?? '',
        'unit' => $unit ?? '',
        'make' => $make ?? '',
        'year' => $year ?? '',
        'vin' => $vin ?? '',
        'serviceType' => !empty($issue->serviceType) ? $issue->serviceType->service_type : $serviceType,
        'priority' => config('constant.maintenance.issue.priority')[$issue->priority] ?? '',
        'notes' => $issue->notes ?? '',
        'dateReported' => $issue->dateReported ?? '',
        'lastModifiedByUserFullName' => $lastModifiedByUserFullName ?? '',
        'serviceLocation' => $issue->service_location ?? '',
        'scheduledStartTime' => $issue->scheduled_start_time ?? '',
        'estimatedCompletionTime' => $issue->estimated_completion_time ?? '',
        'estimatedCost' => $issue->estimated_cost ?? '',
        'arrivedForService' => $issue->arrived_for_service ?? '',
        'serviceStartTime' => $issue->service_start_time ?? '',
        'updatedEstimatedCompletionTime' => $issue->updated_estimated_completion_time ?? '',
        'serviceCompletedTime' => $issue->service_completed_time ?? '',
        'timeInService' => $issue->time_in_service ?? '',
        'finalCost' => $issue->final_cost ?? '',
      ];
    }
    return collect($data);
  }

  /**
   * Define the Heading of Column
   * @return string[]
   */
  public function headings(): array {
    return [
      'Issue Number',
      'Status',
      'Reported By',
      'Vehicle',
      'Make',
      'Year',
      'Vin',
      'Type of Service',
      'Priority',
      'Notes',
      'Date Reported',
      'Modified By',
      'Service Location',
      'Scheduled Start Time',
      'Estimated Completion Time',
      'Estimated Cost',
      'Arrived For Service',
      'Service Start Time',
      'Updated Estimated Completion Time',
      'Service Completed Time',
      'Time In Service',
      'Final Cost',
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
}

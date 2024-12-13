<?php

namespace App\Exports\Safety;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Carbon\Carbon;

class IncidentListReport implements FromCollection, WithHeadings, WithStyles, WithEvents {
  /**
   * @return Collection
   */
  private $incidentReport;

  public function __construct($incidentReport) {
    $this->incidentReport = $incidentReport;
  }

  public function collection(): Collection {
    $data = [];
    foreach ($this->incidentReport as $incident) {
      $row = [
        'tag' => $incident->tag->business_name ?? '',
        'incidentDate' => $incident->incident_date ?? '',
        'incidentTime' => $incident->incident_time ? Carbon::parse($incident->incident_time)
          ->format(config('constant.time_format')) : '',
        'status' => !empty($incident->status) ?
          config('constant.incident.status')[$incident->status] : '',
        'closedDate' => $incident->closed_date ?? '',
        'notes' => $incident->notes ?? '',
        'incidentClaimNumber' => $incident->incident_claim_number ?? '',
        'thirdPartyIncidentClaimNumber' => $incident->third_party_incident_claim_number ?? '',
        'ncicNumber' => $incident->ncic_number ?? '',
        'ncicReport' => $incident->incidentFiles->contains('file_label', 1) ? 'yes' : 'no',
        'savedAddressAffected' =>  $this->getYesOrNoValue($incident->saved_address_affected),
        'chargeBack' =>  $this->getYesOrNoValue($incident->charge_back),
        'chargeBackAmount' => $incident->charge_back_amount ?? '',
        'estimates' =>  $this->getYesOrNoValue($incident->estimates),
        'estimatesReceived' =>  $this->getYesOrNoValue($incident->estimates_received),
        'costIncurred' =>  $this->getYesOrNoValue($incident->cost_incurred),
        'costAmount' => $incident->cost_amount ?? '',
        'dealWithInsuranceCompanyName' => $incident->deal_with_insurance_company_name ?? '',
        'involvedType' => !empty($incident->involved_type) ?
          config('constant.incident.involvedType')[$incident->involved_type] : '',
        'involvedPersonName' => $incident->involved_person_name ?? '',
        'involvedThirdPartyName' => $incident->involved_third_party_name ?? '',
        'involvedPersonType' => !empty($incident->involved_person_type) ?
          config('constant.incident.involvedPersonType')[$incident->involved_person_type] : '',
        'correctiveActionApplied' => $this->getYesOrNoValue($incident->corrective_action_applied),
        'dotRecordable' => $this->getYesOrNoValue($incident->dot_recordable),
        'preventable' => $this->getYesOrNoValue($incident->preventable),
        'atFault' => $this->getYesOrNoValue($incident->at_fault) ?? '',
        'truckNumber' => $incident->truck_number ?? '',
        'trailerNumber' => $incident->trailer_number ?? '',
        'locationType' => !empty($incident->location_type) ?
          config('constant.incident.locationType')[$incident->location_type] : '',
        'address' => $incident->address ?? '',
        'reported' => $this->getYesOrNoValue($incident->reported),
        'incidentType' => !empty($incident->incident_type) ?
          config('constant.incident.incidentType')[$incident->incident_type] : '',
        'description' => $incident->description ?? '',
        'jotformReport' => $incident->incidentFiles->contains('file_label', 2) ? 'yes' : 'no',
      ];
      $data[] = $row;
    }
    return collect($data);
  }

  /**
   * Get Yes Or No Or Unknown Value
   * @params $value
   * @return string|''
   */
  public function getYesOrNoValue($value) {
    return !empty($value) ? config('constant.incident.yesNoUnknown')[$value] : '';
  }

  /**
   * Define the Heading of Column
   * @return string[]
   */
  public function headings(): array {
    $headings = [
      "Tag",
      "Incident Date",
      "Incident Time",
      "Status",
      "Closed Date",
      "Notes",
      "Incident Claim Number",
      "Third Party Claim Number",
      "NCIC Number",
      "NCIC Report",
      "Saved Address Affected",
      "Charge Back",
      "Charge Back Amount",
      "Estimates Needed",
      "Estimates Received",
      "Cost Incurred",
      "Cost Amount",
      "Insurance Company",
      "Involved Type",
      "Involved Person Name",
      "Involved Third Party",
      "Involved Person Type",
      "Corrective Action Applied",
      "DOT Recordable",
      "Preventable",
      "At Fault",
      "Truck",
      "Trailer",
      "Location Type",
      "Address",
      "Reported",
      "Incident Type",
      "Description",
      "Jotform Report",
    ];
    // For Blackrock company column name changes
    if (app()->environment('production') && getAuthAdminCompanyId() == 143) {
      $headings = array_map(function ($v) {
        if ($v == 'Tag') {
          return 'Site';
        } else if ($v == 'Address') {
          return 'Store';
        } else if ($v == "Saved Address Affected") {
          return 'Store Affected';
        }
        return $v;
      }, $headings);
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

<?php

namespace app\Services\IftaReport;


use App\Exports\IftaExcelReport;
use App\Models\PublicIftaFuelTaxRate;
use App\Services\FuelCard\WexService;
use App\Services\KeepTruckin\KeepTruckinService;
use App\Services\Samsara\SamsaraService;
use Exception;
use GuzzleHttp\Exception\GuzzleException;
use Maatwebsite\Excel\Facades\Excel;

class IftaReportService {

  /**
   * Get the quarterly report data.
   * @param $request
   * @return array
   * @throws Exception|GuzzleException
   */
  public function getReport($request): array {
    $year = $request->year;
    $quarter = $request->quarter;
    $companyId = getAuthAdminCompanyId();
    $milesData = [];
    $gallonsData = [];

    // Get quarterly dates
    $startAndEndDate = $this->getQuarterStartEndDates($year, $quarter);
    $startDate = $startAndEndDate['startDate'];
    $endDate = $startAndEndDate['endDate'];

    $samsaraService = new SamsaraService();
    $keepTruckinService = new KeepTruckinService();
    // Retrieve data from Samsara and Wex APIs
    if ($samsaraService->connectionStatus() == 'Connected') {
      $milesData = $samsaraService->getIftaData($year, $quarter);
    } else if (
      $keepTruckinService->connectionStatus() == 'Connected'
    ) {
      $milesData = $keepTruckinService->getIftaData($startDate, $endDate);
    }

    $wexService = new WexService();
    if ($wexService->getConnectionStatus() == 'Connected') {
      $gallonsData = $wexService->getIftaData($companyId, $startDate, $endDate);
    }

    // Merge the responses of Samsara, Wex and State Tax.
    list($mergedData, $totalTaxableMiles, $totalGallonsPaid) =
      $this->mergeIftaResponses($milesData, $gallonsData);

    // Calculate MPG
    $mpg = $totalGallonsPaid ? $totalTaxableMiles / $totalGallonsPaid : 0;

    // Calculate state tax due for each jurisdiction
    $jurisdictions = $this->calculateStateTaxDue($mergedData, $mpg) ?? [];

    return [
      'mpg' => round($mpg, 4),
      'jurisdictions' => $jurisdictions
    ];
  }

  function iftaReportExport($iftaReport): array {
    $adminCompanyId = getAuthAdminCompanyId();
    $url = $adminCompanyId . '-Ifta-Excel-Report.xlsx';
    $path = config('constant.export_path') . $url;
    $getReport = new IftaExcelReport($iftaReport);
    Excel::store($getReport, $path, 's3');
    return [
      "download_url" => getExportFile($url)
    ];
  }

  /**
   * Calculate state tax due for each jurisdiction.
   * @param array $mergedData
   * @param float $mpg
   * @return array
   */
  private function calculateStateTaxDue(array $mergedData, float $mpg): array {
    $jurisdictions = [];

    $taxRates = PublicIftaFuelTaxRate::select('state', 'tax_rate')
      ->where('quarter', request('quarter'))
      ->where('year', request('year'))
      ->get();

    foreach ($mergedData as $data) {
      $stateTaxRate = $taxRates->where('state', $data['state'])
        ->pluck('tax_rate')
        ->first() ?? 0;

      $stateTaxPaid = $data['stateTaxPaid'];
      $gallonsConsumed = $mpg ? $data['taxableMiles'] / $mpg : 0;
      $gallonsNetTaxable = $gallonsConsumed - $data['gallonsPaid'];
      $stateTaxConsumed = $gallonsConsumed * $stateTaxRate;
      $stateTaxDue = $stateTaxConsumed - $stateTaxPaid;

      $jurisdictions[] = [
        'state' => $data['state'],
        'taxableMiles' => round($data['taxableMiles'], 4),
        'gallonsPaid' => round($data['gallonsPaid'], 4),
        'gallonsConsumed' => round($gallonsConsumed, 4),
        'gallonsNetTaxable' => round($gallonsNetTaxable, 4),
        'stateTaxRate' => round($stateTaxRate, 4),
        'stateTaxPaid' => round($stateTaxPaid, 2),
        'stateTaxConsumed' => round($stateTaxConsumed, 2),
        'stateTaxDue' => round($stateTaxDue, 2),
      ];
    }

    return $jurisdictions;
  }

  /**
   * Merge Samsara, Wex and State Tax Api responses using states.
   * @param $milesData
   * @param $gallonsData
   * @return array
   */
  private function mergeIftaResponses($milesData, $gallonsData): array {
    $mergedData = [];
    $totalTaxableMiles = 0;
    $totalGallonsPaid = 0;

    // Add data from the first array to the mergedData
    foreach ($milesData as $item) {
      $state = $item['state'];
      $totalTaxableMiles += $item["taxableMiles"];
      $mergedData[$state] = [
        'state' => $state,
        'taxableMiles' => $item['taxableMiles'],
        'gallonsPaid' => 0,
        'stateTaxPaid' => 0,
      ];
    }

    // Merge data from the second array into mergedData using the "state" as the key
    foreach ($gallonsData as $item) {
      $state = $item['state'];
      $totalGallonsPaid += $item["gallonsPaid"];
      if (isset($mergedData[$state])) {
        $mergedData[$state]['gallonsPaid'] = $item['gallonsPaid'];
        $mergedData[$state]['stateTaxPaid'] = $item['stateTaxPaid'];
      } else {
        $mergedData[$state] = [
          'state' => $state,
          'taxableMiles' => 0,
          'gallonsPaid' => $item['gallonsPaid'],
          'stateTaxPaid' => $item['stateTaxPaid'],
        ];
      }
    }

    return [$mergedData, $totalTaxableMiles, $totalGallonsPaid];
  }


  /**
   * Get Start and End Date using the given quarter.
   * @param $year
   * @param $quarter
   * @return string[]
   */
  private function getQuarterStartEndDates($year, $quarter): array {
    $quarters = [
      1 => ['01-01', '03-31'],
      2 => ['04-01', '06-30'],
      3 => ['07-01', '09-30'],
      4 => ['10-01', '12-31'],
    ];

    if (!isset($quarters[$quarter])) {
      throw new \InvalidArgumentException("Invalid quarter value: $quarter");
    }

    $startDate = $year . '-' . $quarters[$quarter][0];
    $endDate = $year . '-' . $quarters[$quarter][1];

    return [
      'startDate' => $startDate,
      'endDate' => $endDate,
    ];
  }




  // For testing only.

  /**
   * WEX Mock IFTA Data.
   * @return array[]
   */
  private function getMockWexIftaData(): array {
    return [
      [
        "gallonsPaid" => 76.47,
        "stateTaxPaid" => 21.01,
        "state" => "MT"
      ],
      [
        "gallonsPaid" => 87.71,
        "stateTaxPaid" => 22.63,
        "state" => "NE"
      ],
      [
        "gallonsPaid" => 177.79,
        "stateTaxPaid" => 52.27,
        "state" => "UT"
      ],
      [
        "gallonsPaid" => 1.14,
        "stateTaxPaid" => 0.46,
        "state" => "CA"
      ],
      [
        "gallonsPaid" => 65.29,
        "stateTaxPaid" => 14.1,
        "state" => "KY"
      ],
      [
        "gallonsPaid" => 54.74,
        "stateTaxPaid" => 8.76,
        "state" => "IN"
      ],
      [
        "gallonsPaid" => 28.99,
        "stateTaxPaid" => 6.96,
        "state" => "WY"
      ],
      [
        "gallonsPaid" => 150.62,
        "stateTaxPaid" => 30.12,
        "state" => "TX"
      ],
      [
        "gallonsPaid" => 83.99,
        "stateTaxPaid" => 18.9,
        "state" => "AR"
      ]
    ];
  }
}

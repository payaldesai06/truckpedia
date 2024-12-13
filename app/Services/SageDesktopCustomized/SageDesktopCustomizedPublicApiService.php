<?php

namespace App\Services\SageDesktopCustomized;

use Exception;
use App\Models\CommonKeyValuePair;
use App\Models\TripV2SageDesktopSyncResult;
use Carbon\Carbon;

class SageDesktopCustomizedPublicApiService {

  /**
   * Get Invoices.
   * @throws Exception
   * @return array
   */
  public function getInvoices() {
    if (!$this->checkCompanyAuthentication()) {
      return;
    }
    if (request('company') == 'GE-PDCM-PROD') {
      return [];
    }
    $invoices = [
      [
        "id" => 1,
        "vendorNumber" => "GSAWAY",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31949",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "22369.18",
        "entries" => [
          [
            "glAccount" => "432000",
            "comment" => "294240",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294609",
            "amount" => "1173.17"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294682",
            "amount" => "1123.17"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294243",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294242",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294241",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294790",
            "amount" => "1123.17"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294802",
            "amount" => "1102.94"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294612",
            "amount" => "1252.93"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294872",
            "amount" => "1123.17"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294518",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294519",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294523",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294524",
            "amount" => "686.65"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294579",
            "amount" => "1252.93"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294611",
            "amount" => "1252.93"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294911",
            "amount" => "1123.17"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294919",
            "amount" => "1084.83"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294920",
            "amount" => "1081.31"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294957",
            "amount" => "1206.27"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294520",
            "amount" => "685.95"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294526",
            "amount" => "685.95"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294525",
            "amount" => "685.95"
          ],
          [
            "glAccount" => "432000",
            "comment" => "294565",
            "amount" => "918.14"
          ]
        ]
      ],
      [
        "id" => 2,
        "vendorNumber" => "EVANS",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31950",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "3304.84",
        "entries" => [
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>31250346 CLEVELAND,TN",
            "amount" => "-936.77"
          ],
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>02619387 CLEVELAND,TN",
            "amount" => "-940.55"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "343.84"
          ]
        ]
      ],
      [
        "id" => 3,
        "vendorNumber" => "EVANS",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31951",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "4778.5",
        "entries" => [
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>30108078 CLEVELAND,TN",
            "amount" => "-904"
          ],
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>01540038 CLEVELAND,TN",
            "amount" => "-904"
          ],
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>02742844 EAST BERNSTA,KY",
            "amount" => "-282.74"
          ],
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>03694693 ATHENS,TN",
            "amount" => "-904"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Cleveland,TN to Painesville,OH",
            "amount" => "343.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "951.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Painesville,OH to Cleveland,TN",
            "amount" => "343.84"
          ]
        ]
      ],
      [
        "id" => 4,
        "vendorNumber" => "MDCART",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31952",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "3000",
        "entries" => [
          [
            "glAccount" => "605012",
            "comment" => "we 11/05/22",
            "amount" => "3000"
          ]
        ]
      ],
      [
        "id" => 5,
        "vendorNumber" => "SMART",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31955",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "4463.05",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-2365.55"
          ],
          [
            "glAccount" => "120200",
            "comment" => "O/O Base Plate Charges",
            "amount" => "-50"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Clevela,TN",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "182.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "505.3"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Clevela,TN to APPLIANCE PA,KY",
            "amount" => "182.56"
          ]
        ]
      ],
      [
        "id" => 6,
        "vendorNumber" => "MORY",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31956",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "3294.41",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-1583.91"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ]
        ]
      ],
      [
        "id" => 7,
        "vendorNumber" => "ANKOUD",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31957",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "3993.65",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-2125.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ]
        ]
      ],
      [
        "id" => 8,
        "vendorNumber" => "NAIT",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31958",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "4275.77",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-1772.13"
          ],
          [
            "glAccount" => "120200",
            "comment" => "O/O Base Plate Charges",
            "amount" => "-50"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ]
        ]
      ],
      [
        "id" => 9,
        "vendorNumber" => "RADIB",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31960",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "184",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-767.74"
          ],
          [
            "glAccount" => "120200",
            "comment" => "O/O Base Plate Charges",
            "amount" => "-50"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "99.12"
          ]
        ]
      ],
      [
        "id" => 10,
        "vendorNumber" => "SHARK",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31961",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "3739.51",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-2358.39"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ]
        ]
      ],
      [
        "id" => 11,
        "vendorNumber" => "ATRUCK",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31962",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "3098.69",
        "entries" => [
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>02770060 LEBANON,TN",
            "amount" => "-317.08"
          ],
          [
            "glAccount" => "140000",
            "comment" => "COMDATA # =>03765130 LEBANON,TN",
            "amount" => "-353.35"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Tullaho,TN",
            "amount" => "379.75"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tullaho,TN to APPLIANCE PA,KY",
            "amount" => "379.75"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Tullaho,TN",
            "amount" => "137.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tullaho,TN to APPLIANCE PA,KY",
            "amount" => "137.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PAR,KY to Gallati,TN",
            "amount" => "249.15"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Gallati,TN to APPLIANCE PAR,KY",
            "amount" => "249.15"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PAR,KY to Gallati,TN",
            "amount" => "84.56"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Gallati,TN to APPLIANCE PAR,KY",
            "amount" => "84.56"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Tullaho,TN",
            "amount" => "379.75"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tullaho,TN to APPLIANCE PA,KY",
            "amount" => "379.75"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Tullaho,TN",
            "amount" => "137.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tullaho,TN to APPLIANCE PA,KY",
            "amount" => "137.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PA,KY to Tullaho,TN",
            "amount" => "379.75"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tullaho,TN to APPLIANCE PA,KY",
            "amount" => "379.75"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PA,KY to Tullaho,TN",
            "amount" => "137.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tullaho,TN to APPLIANCE PA,KY",
            "amount" => "137.2"
          ]
        ]
      ],
      [
        "id" => 12,
        "vendorNumber" => "EKIJAS",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31964",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "2823.94",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to APPLIANCE ,KY",
            "amount" => "105"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Jeffersonv,IN",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jeffersonv,IN to APPLIANCE ,KY",
            "amount" => "11.2"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-1773.65"
          ],
          [
            "glAccount" => "120200",
            "comment" => "O/O Base Plate Charges",
            "amount" => "-28.91"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "274.35"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE P,KY to Williamsb,KY",
            "amount" => "99.12"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Williamsb,KY to APPLIANCE P,KY",
            "amount" => "99.12"
          ]
        ]
      ],
      [
        "id" => 13,
        "vendorNumber" => "ELAQI",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31965",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "4205.82",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PAR,KY to Jackson,TN",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-1374.32"
          ],
          [
            "glAccount" => "120200",
            "comment" => "O/O Base Plate Charges",
            "amount" => "-50"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "164.64"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Jackso,TN to APPLIANCE PARK,KY",
            "amount" => "455.7"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PAR,KY to Gallati,TN",
            "amount" => "249.15"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Gallati,TN to APPLIANCE PAR,KY",
            "amount" => "249.15"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PAR,KY to Gallati,TN",
            "amount" => "84.56"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Gallati,TN to APPLIANCE PAR,KY",
            "amount" => "84.56"
          ]
        ]
      ],
      [
        "id" => 14,
        "vendorNumber" => "SANDI",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31966",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "3443.75",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-2604.15"
          ],
          [
            "glAccount" => "120200",
            "comment" => "O/O Base Plate Charges",
            "amount" => "-50"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "447.95"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE ,KY to Bowling G,OH",
            "amount" => "161.84"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Bowling G,OH to APPLIANCE ,KY",
            "amount" => "161.84"
          ]
        ]
      ],
      [
        "id" => 15,
        "vendorNumber" => "RISEL",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "31967",
        "invoiceDate" => "2023-02-06",
        "totalAmount" => "4355.57",
        "entries" => [
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "140000",
            "comment" => "Penske Fuel we 11/05/22",
            "amount" => "-1713.43"
          ],
          [
            "glAccount" => "120200",
            "comment" => "O/O Base Plate Charges",
            "amount" => "-50"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431012",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431012",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "449.5"
          ],
          [
            "glAccount" => "431112",
            "comment" => "APPLIANCE PARK,KY to Tiffin,OH",
            "amount" => "162.4"
          ],
          [
            "glAccount" => "431112",
            "comment" => "Tiffin,OH to APPLIANCE PARK,KY",
            "amount" => "162.4"
          ]
        ]
      ],
      [
        "id" => 16,
        "vendorNumber" => "MEHME",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "41001",
        "invoiceDate" => "2023-04-06",
        "totalAmount" => "4",
        "entries" => [
          [
            "glAccount" => "142000",
            "comment" => "Tractor Rental",
            "amount" => "1"
          ],
          [
            "glAccount" => "240100",
            "comment" => "Escrow Charge",
            "amount" => "1"
          ],
          [
            "glAccount" => "404012",
            "comment" => "Pre Pass",
            "amount" => "1"
          ],
          [
            "glAccount" => "422012",
            "comment" => "Operating Exp",
            "amount" => "1"
          ]
        ]
      ],
      [
        "id" => 17,
        "vendorNumber" => "CCWDEC",
        "apDivisionNumber" => "02",
        "invoiceNumber" => "41002",
        "invoiceDate" => "2023-04-06",
        "totalAmount" => "3",
        "entries" => [
          [
            "glAccount" => "602012",
            "comment" => "Comcheck Fee",
            "amount" => "1"
          ],
          [
            "glAccount" => "605002",
            "comment" => "Weekly Mgmt",
            "amount" => "1"
          ],
          [
            "glAccount" => "812012",
            "comment" => "Interest Payment",
            "amount" => "1"
          ]
        ]
      ]
    ];
    return ['invoices' => $invoices];
  }

  /**
   * Confirm Received Invoices.
   * @throws Exception
   * @return mixed
   */
  public function confirmReceivedInvoices() {
    if (!$this->checkCompanyAuthentication()) {
      return;
    }
    if (request('company') != 'GE-PDCM-PROD') {
      return;
    }

    // TODO: this is temp, not final code.
    $invoices = request('invoices');
    $dataToInsert = [];
    $currentDateTimeString = Carbon::now()->toDateTimeString();
    foreach ($invoices as $invoice) {
      $dataToInsert[] = [
        'trip_id' => $invoice['id'],
        'sage_invoice_number' => $invoice['sageInvoiceNo'],
        'created_at' => $currentDateTimeString
      ];
    }
    return TripV2SageDesktopSyncResult::insert($dataToInsert);
  }

  /**
   * Check Company Authentication With Key.
   * @return mixed
   * @throws Exception
   */
  public function checkCompanyAuthentication() {
    $key = request('key');
    $company = request('company');
    if ($company == 'GE-PDCM') {
      if ($key != '26e1db3e9') {
        throw new Exception("Wrong key");
      }
      return true;
    } else if ($company == 'GE-PDCM-PROD') {
      $sageDesktopKeyValue = CommonKeyValuePair::where('key', 'sage_desktop_pdcm_key')
        ->value('value') ?? null;
      if (!$sageDesktopKeyValue || $sageDesktopKeyValue != $key) {
        throw new Exception("Wrong key");
      }
      return true;
    } else {
      throw new Exception("Wrong key");
    }
  }
}

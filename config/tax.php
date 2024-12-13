<?php

return [
  // Reference links:
  // Tax brackets: https://www.forbes.com/advisor/taxes/taxes-federal-income-tax-bracket/
  // Standard Deduction: https://www.forbes.com/advisor/taxes/standard-deduction/
  // Year rule: https://ttlc.intuit.com/community/taxes/discussion/i-started-a-new-job-in-december-but-did-not-get-paid-till-january-does-that-need-to-go-on-my-tax/00/112103
  // Year rule: https://www.thebalancemoney.com/end-of-year-employee-paychecks-which-year-s-taxes-3974570
  'w2' => [
    'federal' => [
      '2024' => [
        'single' => [
          'standardDeduction' => 14600,
          'brackets' => [
            0 => ["threshold" => 11600, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 47150, "rate" => 0.12, "fixedTax" => 1160],
            2 => ["threshold" => 100525, "rate" => 0.22, "fixedTax" => 5426],
            3 => ["threshold" => 191950, "rate" => 0.24, "fixedTax" => 17168.5],
            4 => ["threshold" => 243725, "rate" => 0.32, "fixedTax" => 39110.5],
            5 => ["threshold" => 609350, "rate" => 0.35, "fixedTax" => 55678.5],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 183647.25],
          ],
        ],

        'marriedFilingJointly' => [
          'standardDeduction' => 29200,
          'brackets' => [
            0 => ["threshold" => 23200, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 94300, "rate" => 0.12, "fixedTax" => 2320],
            2 => ["threshold" => 201050, "rate" => 0.22, "fixedTax" => 10852],
            3 => ["threshold" => 383900, "rate" => 0.24, "fixedTax" => 34337],
            4 => ["threshold" => 487450, "rate" => 0.32, "fixedTax" => 78221],
            5 => ["threshold" => 731200, "rate" => 0.35, "fixedTax" => 111357],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 196669.5],
          ],
        ],

        'marriedFilingSeparately' => [
          'standardDeduction' => 14600,
          'brackets' => [
            0 => ["threshold" => 11600, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 47150, "rate" => 0.12, "fixedTax" => 1160],
            2 => ["threshold" => 100525, "rate" => 0.22, "fixedTax" => 5426],
            3 => ["threshold" => 191950, "rate" => 0.24, "fixedTax" => 17168.5],
            4 => ["threshold" => 243725, "rate" => 0.32, "fixedTax" => 39110.5],
            5 => ["threshold" => 365600, "rate" => 0.35, "fixedTax" => 55678.5],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 98334.75],
          ],
        ],

        'headOfHousehold' => [
          'standardDeduction' => 21900,
          'brackets' => [
            0 => ["threshold" => 16550, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 63100, "rate" => 0.12, "fixedTax" => 1655],
            2 => ["threshold" => 100500, "rate" => 0.22, "fixedTax" => 7241],
            3 => ["threshold" => 191950, "rate" => 0.24, "fixedTax" => 15469],
            4 => ["threshold" => 243700, "rate" => 0.32, "fixedTax" => 37417],
            5 => ["threshold" => 609350, "rate" => 0.35, "fixedTax" => 53997],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 181954.5],
          ],
        ],

        'qualifyingWidow' => [
          'standardDeduction' => 29200,
          'brackets' => [
            0 => ["threshold" => 23200, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 94300, "rate" => 0.12, "fixedTax" => 2320],
            2 => ["threshold" => 201050, "rate" => 0.22, "fixedTax" => 10852],
            3 => ["threshold" => 383900, "rate" => 0.24, "fixedTax" => 34337],
            4 => ["threshold" => 487450, "rate" => 0.32, "fixedTax" => 78221],
            5 => ["threshold" => 731200, "rate" => 0.35, "fixedTax" => 111357],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 196669.5],
          ],
        ],
      ],

      '2023' => [
        'single' => [
          'standardDeduction' => 13850,
          'brackets' => [
            0 => ["threshold" => 11000, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 44725, "rate" => 0.12, "fixedTax" => 1100],
            2 => ["threshold" => 95375, "rate" => 0.22, "fixedTax" => 5147],
            3 => ["threshold" => 182100, "rate" => 0.24, "fixedTax" => 16290],
            4 => ["threshold" => 231250, "rate" => 0.32, "fixedTax" => 37104],
            5 => ["threshold" => 578125, "rate" => 0.35, "fixedTax" => 52832],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 174238.25],
          ],
        ],

        'marriedFilingJointly' => [
          'standardDeduction' => 27700,
          'brackets' => [
            0 => ["threshold" => 22000, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 89450, "rate" => 0.12, "fixedTax" => 2200],
            2 => ["threshold" => 190750, "rate" => 0.22, "fixedTax" => 10294],
            3 => ["threshold" => 364200, "rate" => 0.24, "fixedTax" => 32580],
            4 => ["threshold" => 462500, "rate" => 0.32, "fixedTax" => 74208],
            5 => ["threshold" => 693750, "rate" => 0.35, "fixedTax" => 105664],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 186601.5],
          ],
        ],

        'marriedFilingSeparately' => [
          'standardDeduction' => 13850,
          'brackets' => [
            0 => ["threshold" => 11000, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 44725, "rate" => 0.12, "fixedTax" => 1100],
            2 => ["threshold" => 95375, "rate" => 0.22, "fixedTax" => 5147],
            3 => ["threshold" => 182100, "rate" => 0.24, "fixedTax" => 16290],
            4 => ["threshold" => 231250, "rate" => 0.32, "fixedTax" => 37104],
            5 => ["threshold" => 346875, "rate" => 0.35, "fixedTax" => 52832],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 93300.75],
          ],
        ],

        'headOfHousehold' => [
          'standardDeduction' => 20800,
          'brackets' => [
            0 => ["threshold" => 15700, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 59850, "rate" => 0.12, "fixedTax" => 1570],
            2 => ["threshold" => 95350, "rate" => 0.22, "fixedTax" => 6868],
            3 => ["threshold" => 182100, "rate" => 0.24, "fixedTax" => 14678],
            4 => ["threshold" => 231250, "rate" => 0.32, "fixedTax" => 35498],
            5 => ["threshold" => 578100, "rate" => 0.35, "fixedTax" => 51226],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 172623.5],
          ],
        ],

        'qualifyingWidow' => [
          'standardDeduction' => 27700,
          'brackets' => [
            0 => ["threshold" => 22000, "rate" => 0.1, "fixedTax" => 0],
            1 => ["threshold" => 89450, "rate" => 0.12, "fixedTax" => 2200],
            2 => ["threshold" => 190750, "rate" => 0.22, "fixedTax" => 10294],
            3 => ["threshold" => 364200, "rate" => 0.24, "fixedTax" => 32580],
            4 => ["threshold" => 462500, "rate" => 0.32, "fixedTax" => 74208],
            5 => ["threshold" => 693750, "rate" => 0.35, "fixedTax" => 105664],
            6 => ["threshold" => 99999999999, "rate" => 0.37, "fixedTax" => 186601.5],
          ],
        ],
      ]
    ]
  ]
];

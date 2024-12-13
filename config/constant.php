<?php

return [
  'all' => 'all',
  'parent' => 'parent',

  'passport' => [
    'personal_access_token_expired_hour' => 4320, // value in hour
  ],

  'ezpapelWebsiteVersion' => '20240724A',

  'emails' => [
    'support' => 'support@ezpapel.com',
    'fromName' => 'Truckpedia',
    'fromEmail' => 'noreply@support.ezpapel.com',
  ],

  'weight_unit' => [
    1 => 'lbs',
    2 => 'tons',
    3 => 'kg',
  ],

  'quantity_unit' => [
    1 => 'pallets',
    2 => 'crates',
    3 => 'hours',
    4 => 'days',
    5 => 'miles',
    6 => 'yards',
    7 => 'feet',
    8 => 'cases',
    9 => 'gallons',
    10 => 'pieces'
  ],

  'companyType' => [
    1 => 'carrier', // or null
    2 => 'shipper',
    3 => 'broker'
  ],

  'roles' => [
    'super_admin' => 'super_admin',
    'admin' => 'admin',
    'driver' => 'driver',
    'dispatcher' => 'dispatcher',
    'guest' => 'guest',
    'warehouse_operator' => 'warehouse_operator',
    'tag_operator' => 'tag_operator',
    'maintenance' => 'maintenance'
  ],

  'commission_on' => [
    'hauling_fee' => 'hauling_fee',
    'hauling_fee_with_accessorial_fee' => 'hauling_fee_with_accessorial_fee',
    'total_income' => 'total_income',
    'custom_formula' => 'custom_formula'
  ],

  'commissionCustomFormulaOperand' => [
    1 => 'haulingFee',
    2 => 'haulingFeeAndAccessorialFee',
    3 => 'totalIncome',
    4 => 'thirdPartyHaulingFee',
    5 => 'thirdPartyHaulingFeeAndAccessorialFee',
    6 => 'thirdPartyTotalCost'
  ],

  'commissionCustomFormulaOperator' => [
    1 => 'add',
    2 => 'subtract',
  ],

  'deliveryType' => [
    1 => 'flexible',
    2 => 'guarantee'
  ],

  'userCustomizationModule' => [
    1 => 'dispatchPipeline',
    2 => 'safetyIncidents',
    3 => 'dispatchCalendar',
    4 => 'dispatchList',
  ],

  'pipelineCustomization' => [
    'hideColumn' => [
      'open', 'dispatched', 'inTransit', 'delivered', 'paymentStatus'
    ],
    'showLabels' => [
      'customerName', 'loadNumber', 'loadReference', 'billToCode', 'miles', 'totalAmount',
      'shipperName', 'shipperCityState', 'shipperDateTime',
      'receiverName', 'receiverCityState', 'receiverDateTime',
      'truck', 'trailer', 'driver', 'equipmentType',
      'shipperFreightEquipmentNumber', 'shipperFreightDescription',
    ],
  ],

  'listCustomization' => [
    'hideColumn' => [
      'customerName', 'loadNumber', 'loadReference', 'shipperCityState', 'shipperDateTime',
      'receiverCityState', 'receiverDateTime', 'pickUpNumber', 'deliveryNumber',
      'truck', 'trailer', 'drivers', 'action', 'status', 'notes'
    ],
  ],

  'planningCustomization' => [
    'show' => [
      'timelineFor' => [
        'truck', 'trailer', 'driver'
      ],
    ],
  ],

  'status' => [
    'truck' => [
      'active' => 'active',
      'inactive' => 'inactive',
    ],
    'trailer' => [
      'active' => 'active',
      'inactive' => 'inactive',
    ],
    'customer' => [
      'active' => 'active',
      'inactive' => 'inactive',
      'banned' => 'banned',
    ],
    'shipper' => [
      'active' => 'active',
      'inactive' => 'inactive',
    ],
    'receiver' => [
      'active' => 'active',
      'inactive' => 'inactive',
    ],
    'user' => [
      'active' => 'active',
      'inactive' => 'inactive',
    ],
    'driver' => [
      'active' => 'active',
      'inactive' => 'inactive',
    ],
    'driverPayTemplate' => [
      'active' => 'active',
      'inactive' => 'inactive',
    ],
    'load_driver' => [
      'assign' => 'assign',
      'accepted' => 'accepted',
      'load_started' => 'load_started',
      'from_arrived' => 'from_arrived',
      'from_loaded' => 'from_loaded',
      'to_arrived' => 'to_arrived',
      'to_unloaded' => 'to_unloaded',
      'handed_over' => 'handed_over',
      'ready_to_handover' => 'ready_to_handover',
      'end_load' => 'end_load',
      // upload is for sending emails, not a real status.
      'upload' => 'upload',
      // The following two may be deleted.
      'picked_up_load' => 'picked_up_load',
      'delivered' => 'delivered',
    ],
    'load' => [
      'open' => 'open',
      'assign' => 'assign',
      'in_transit' => 'in_transit',
      'delivered' => 'delivered',
      'invoice_created' => 'invoice_created',
      'invoice_sent' => 'payment_requested', // 'invoice_sent' seems to be only used in code, 'payment_requested' is what saves in DB.
      'invoice_paid' => 'invoice_paid',
      'canceled' => 'canceled',
    ],
    'loadStatusFrontEnd' => [
      'open' => 'Open',
      'assign' => 'Assigned',
      'in_transit' => 'In Transit',
      'delivered' => 'Delivered',
      'invoice_created' => 'Invoice Generated',
      'payment_requested' => 'Payment Requested',
      'invoice_paid' => 'Paid',
      'canceled' => 'Canceled',
    ],
    'driver_load' => [
      'open' => 'open',
      'completed' => 'completed',
    ],
    'driver_open_load' => [
      'assign' => 'assign',
      'accepted' => 'accepted',
      'load_started' => 'load_started',
      'from_arrived' => 'from_arrived',
      'from_loaded' => 'from_loaded',
      'to_arrived' => 'to_arrived',
      'to_unloaded' => 'to_unloaded',
      'picked_up_load' => 'picked_up_load',
      'ready_to_handover' => 'ready_to_handover',
      'delivered' => 'delivered',
    ],
    'driver_completed_load' => [
      'end_load' => 'end_load',
      'handed_over' => 'handed_over',
    ],
    'trip' => [
      'in_progress' => 'in_progress',
      'payment_request' => 'payment_request',
      'paid' => 'paid',
    ],
    'trip_sheets' => [
      1 => 'started',
      2 => 'ended'
    ],
    'trip_in_progress' => [
      'in_progress' => 'in_progress',
      'payment_request' => 'payment_request',
    ],
    'trip_paid' => [
      'paid' => 'paid',
    ],
    'load_direction' => [
      'inbound' => 'inbound',
      'outbound' => 'outbound',
    ],
    'invoice' => [
      1 => 'draft',
      2 => 'requested',
      3 => 'paid'
    ],
  ],

  'load' => [
    'directions' => [
      'inbound' => 'inbound',
      'outbound' => 'outbound',
    ],
    'paymentOption' => [
      1 => 'skipFactoring',
    ],
    'loadboardIntegration' =>  [
      1 => 'transplace_stedi',
      2 => 'walmart_orderful',
    ],

    // NOTE: DO NOT change the order. It's used for trailer_type TINYINT DB column.
    'equipment_type' => [
      '53_dry_van' => "53' Dry Van",
      '53_reefer' => "53' Reefer",
      'flatbed' => "Flatbed",
      'power_only' => "Power Only",
      '48_dry_van' => "48' Dry Van",
      '48_reefer' => "48' Reefer",
      '22_van' => "22' Van",
      'cargo_van' => 'Cargo Van',
      'hot_shot' => 'Hot Shot',
      'box_truck' => 'Box Truck',
      'load_out' => "Load-Out",
      'step_deck' => "Step Deck",
      'straight_van' => "Straight Van",
      'tanker' => "Tanker",
      'curtain_van' => "Curtain Van",
      'vented_van' => "Vented Van",
      '20_dry_container' => "20' Dry Container",
      '20_reefer_container' => "20' Reefer Container",
      '40_dry_container' => "40' Dry Container",
      '40_reefer_container' => "40' Reefer Container",
      '45_dry_container' => "45' Dry Container",
      '45_reefer_container' => "45' Reefer Container",
      'lowboy' => "Lowboy",
      'landoll' => "Landoll",
    ],
    // NOTE: DO NOT change the above order. It's used for trailer_type TINYINT DB column.

    'trailer_type' => [
      1 => 'Walking Floor',
      2 => 'Dump',
      3 => 'Belt'
    ],

    'image' => [
      'purpose' => [
        'load_start_odometer' => 'load_start_odometer',
        'load_end_odometer' => 'load_end_odometer',
        'load_picked_up' => 'load_picked_up',
        'load_delivered' => 'load_delivered',
        'load_handover_odometer' => 'load_handover_odometer',
        'load_pod' => 'load_pod',
        'load_pod_admin' => 'load_pod_admin', // pod upload by admin
        'load_image_admin' => 'load_image_admin', // image upload by admin
        'bol' => 'bol',
        'lumper' => 'lumper',
        'scale' => 'scale',
        'fuel' => 'fuel',
        'repair' => 'repair',
        'others' => 'others',
        'load_mffc' => 'load_mffc', // merged for factoring company
      ],
      'image_alias' => [
        'start_load_odometer' => 'start_load_odometer',
        'end_load_odometer' => 'end_load_odometer',
        'load_picked_up' => 'load_picked_up',
        'load_delivered' => 'load_delivered',
        'load_pod' => 'load_pod',
        'load_handover_odometer' => 'load_handover_odometer',
        'load_pod_admin' => 'load_pod_admin', // pod upload by admin
        'load_image_admin' => 'load_image_admin',
        'bol' => 'bol',
        'lumper' => 'lumper',
        'scale' => 'scale',
        'fuel' => 'fuel',
        'repair' => 'repair',
        'others' => 'others',
        'load_mffc' => 'load_mffc'
      ],
      'orderForRequestPayment' => [
        1 => 'bol',
        2 => 'load_pod',
        3 => 'load_pod_admin',
        4 => 'lumper',
        5 => 'scale',
      ],
    ],

    // Route::post('/load-images/get-upload-urls', 'DriverLoadController@getUploadUrls');
    // uses this API to get upload urls. I guess for POD, mobile app first upload
    // images to S3, then PHP code merges the images into one PDF.
    'imageType' => [
      'pickup' => 'pickup',
      'delivery' => 'delivery',
      'pod' => 'pod',
      'bol' => 'bol',
      'lumper' => 'lumper',
      'scale' => 'scale',
      'fuel' => 'fuel',
      'repair' => 'repair',
      'others' => 'others',
    ],

    // This is mainly used to finally save the uploaded doc to DB.
    'documentType' => [
      'pod' => 'pod',
      'image' => 'image',
      'bol' => 'bol',
      'lumper' => 'lumper',
      'scale' => 'scale',
      'fuel' => 'fuel',
      'repair' => 'repair',
      'others' => 'others',
    ],

    'sortBy' => [
      'field' => [
        'status' => 'status',
        'invoiceNumber' => 'load_unique_id',
        'customerName' => 'customer_name',
        'amount' => 'total_amount',
        'issueDate' => 'invoice_generated_at',
        // this dueDate in fact is wrong, we don't have due date column for sorting.
        'dueDate' => 'invoice_generated_at'
      ],
      'order' => [
        'asc' => 'asc',
        'desc' => 'desc'
      ]
    ],
    'invoice' => [
      'created' => 'invoice_created',
      'requested' => 'payment_requested', // 'invoice_sent' seems to be only used in code, 'payment_requested' is what saves in DB.
      'paid' => 'invoice_paid',
    ],

    'rateConType' => [
      1 => 'otr',
      2 => 'intermodal',
      3 => 'local',
    ],

    'multiPurposeStopsType' => [
      1 => 'terminal',
    ],

    'dropHookTrailerType' => [
      1 => 'loaded',
      2 => 'empty'
    ],

    'stopType' => [
      'shipper' => 'shipper',
      'receiver' => 'receiver',
      'leg' => 'leg',
      'terminal' => 'terminal'
    ],

    'thirdPartyCarrier' => [
      'status' => [
        1 => 'paid',
      ],
    ],

    'container' => [
      'status' => [
        1 => 'loaded',
        2 => 'empty',
      ],
      'filter' => [
        1 => 'l',
        2 => 'e',
      ],
    ],

    'parsedBy' => [
      1 => 'python',
      2 => 'chatGpt',
      3 => 'duplicate',
      4 => 'edi',
    ],

    'dispatcherPaid' => [
      0 => 'pending',
      1 => 'paid',
    ],
  ],

  'ownership' => [
    'truck' => [
      'company_truck' => 'company_truck',
      'owner_operator' => 'owner_operator',
      'leased' => 'leased',
    ],
    'trailer' => [
      'company_trailer' => 'company_trailer',
      'owner_operator' => 'owner_operator',
      'leased' => 'leased',
    ],

  ],

  'brakeType' => [
    1 => 'drum',
    2 => 'disc',
  ],

  'calculate_using' => [
    'manual' => 'manual',
    'google_maps' => 'google_maps',
    'p' => 'p', // for PC Miler
  ],

  'calculateUsingInt' => [
    1 => 'manual',
    2 => 'google_maps',
    3 => 'p', // for PC Miler
  ],

  'hauling_fees_type' => [
    'flat_fee' => 'flat_fee',
    'weight' => 'weight',
    'qty' => 'qty',
    'truck_hour' => 'truck_hour',
    'per_mile' => 'per_mile',
    'qty_var_rate' => 'qty_var_rate', // Previous out-sourcing company used string type in db...
  ],

  'haulingFeesTypeFeString' => [
    'flat_fee' => 'Flat Fee',
    'weight' => 'Weight',
    'qty' => 'Qty',
    'truck_hour' => 'Truck Hour',
    'per_mile' => 'Per Mile',
  ],

  'haulingFeeType' => [
    1 => 'flat_fee',
    2 => 'weight',
    3 => 'qty',
    4 => 'truck_hour',
  ],

  'fuel_surcharge_type' => [
    'flat_fee' => 'flat_fee',
    'percentage' => 'percentage',
    'per_mile' => 'per_mile',
    'formulaPerMile' => 'formulaPerMile',
  ],

  'fuelSurchargeType' => [
    1 => 'flat_fee',
    2 => 'percentage',
    3 => 'per_mile',
  ],

  'load_defualt_id' => 1000,

  'customer_type' => [
    'customer' => 'customer',
    'broker' => 'broker',
    'factoring_companies' => 'factoring_companies',
    'carrier' => 'carrier',
    'insurance_company' => 'insurance_company',
  ],

  'maintenance_asset_type' => [
    'truck' => 'truck',
    'trailer' => 'trailer',
  ],

  'maintenance' => [
    'asset_type_int' => [
      1 => 'truck',
      2 => 'trailer'
    ],
    'issue' => [
      'status' => [
        1 => 'reported',
        2 => 'scheduled',
        3 => 'in_service',
        4 => 'completed'
      ],
      'statusFeString' => [
        1 => 'Reported',
        2 => 'Scheduled',
        3 => 'In Service',
        4 => 'Completed'
      ],
      'priority' => [
        1 => 'high',
        2 => 'medium',
        3 => 'low'
      ]
    ]
  ],

  's3' => [
    'admin_profile' => "public/users/profile/",
    'admin_company_image' => "public/company/",
    'driver_file' => "public/documents/",
    'load_file' => "public/load/",
    'load_invoice' => "public/invoices/",
    'payment_invoice' => "public/paymentInvoices/",
    'share_file' => "share",
    'maintenances' => 'public/maintenances/',
    'presigned_url' => [
      'expiry_time' => '+60 minutes'
    ],

    // Starting of v2.
    'maintenanceV2' => [
      'issue' => 'public/maintenance-v2/issues/',
    ],
    'edi' => 'public/edi/',
    'companyFiles' => 'public/files/company/',
    'chatFiles' => "public/files/chat/",
    'safetyIncidentFiles' => "public/files/safety/incident/",
    'customerFiles' => "public/files/customer/",
    'driverFiles' => "public/files/driver/",
    'truckFiles' => "public/files/truck/",
    'trailerFiles' => "public/files/trailer/",
    'menuFiles' => "public/files/menu/",
    'tripFiles' => "public/files/trip/",
    'tripInvoices' => 'public/invoices-v2/trip/',

    'truckpedia' => [
      'carrierWebsite' => [
        'userUploadImages' => 'truckpedia/carrierWebsite/userUploadImages/',
        'html' => 'truckpedia/carrierWebsite/html/',
      ]
    ],
  ],

  'driver_type' => [
    'employee' => 'employee',
    'contractor' => 'contractor',
    'owner' => 'owner',
    'temp' => 'temp',
    'lowboy' => 'lowboy',
    'end_dump' => 'end_dump',
    'dump_truck' => 'dump_truck',
    'grinding' => 'grinding',
    'pneumatic' => 'pneumatic',
    'asphalt' => 'asphalt',
    'concrete' => 'concrete',
    'mechanic' => 'mechanic',
    'cdl' => 'cdl',
    'cmv' => 'cmv',
    'nonCmv' => 'nonCmv',
    'other' => 'other',
  ],

  'driver_pay_type' => [
    'per_mile' => 'per_mile',
    'hourly' => 'hourly',
    'percentage' => 'percentage',
    'flat' => 'flat',
    'template' => 'template'
  ],

  'flat_pay_frequency' => [
    1 => 'weekly',
    2 => 'biweekly',
    3 => 'monthly'
  ],

  'payment_method' => [
    1 => 'check',
    2 => 'directDeposit'
  ],

  'tax_form' => [
    1 => 'w2',
    2 => '1099'
  ],

  'filing_status' => [
    1 => 'single',
    2 => 'marriedFilingJointly',
    3 => 'marriedFilingSeparately',
    4 => 'headOfHousehold',
    5 => 'qualifyingWidow'
  ],

  'driver_file_type' => [
    'driver_licence' => 'driver_licence',
    'driver_medical_card' => 'driver_medical_card',
  ],

  'load_pay_percentage_of' => [
    'hauling_fees' => 'hauling_fees',
    'total_income' => 'total_income',
    'hauling_plus_fuel_surcharge' => 'hauling_plus_fuel_surcharge',

  ],

  'company' => [
    'trial_valid_day' => env('TRIAL_DAYS', 14),
    'defaultAccessorialFeeDetention' => 'Detention',
    'defaultAccessorialFee' => [
      'Detention' => 'Detention',
      'Lumper' => 'Lumper',
    ],
    'features' => [
      1 => 'brokerModeForCarrier',
      2 => 'chatGptForLoadTenderParser',
      3 => 'safety',
      4 => 'quote', // Obsolete, no longer used.
      5 => 'marketing', // Email campaign.
      6 => 'crm', // CRM, frontend will automatically show email campaign as well.
      7 => 'basic', // The 1,200 combo plan for basic functionalities.
      8 => 'marketplace',
      9 => 'noTms', // No TMS UIs at all.
    ]
  ],

  'subscription_fixe_pirce' => 10,

  'subscription_fix_month_day' => 30,

  'subscription_extra_day' => 2,

  'load_charges' => 1,

  'stripe_key' => [
    'sandbox' => [
      'public' => env('STRIPE_SANDBOX_PUBLIC', ''),
      'secret' => env('STRIPE_SANDBOX_SECRET', ''),
    ],
    'production' => [
      'public' => env('STRIPE_PRODUCTION_PUBLIC', ''),
      'secret' => env('STRIPE_PRODUCTION_SECRET', ''),
    ],
  ],

  'subscription_status' => [
    'in_active' => 'in_active',
    'active' => 'active',
    'suspended' => 'suspended',
    'canceled' => 'canceled',
  ],

  'batch_size' => 500,
  'freePlanMonthlyLoadCreateLimit' => 25,

  //date format
  'date_format' => 'Y-m-d',
  'ISO_8601_date_format' => 'Y-m-d\TH:i:s\Z',
  'shortDateFormat' => 'm/d/Y',

  //date time format
  'date_time_format' => 'Y-m-d H:i:s',

  //time format
  'time_format' => 'H:i',

  // google map api key
  'google_maps_api_key' => env('GOOGLE_MAP_API_KEY'),

  //export_file
  'export_path' => "public/export/",

  'default_expense_type' => [
    'Fuel Receipt',
    'Truck Repair',
    'Parts',
    'Miscellaneous',
  ],

  'incident' => [
    'sortByField' => [
      // TODO (not urgent, only do it later when customers asked us): is this the complete list?
      'status' => 'status',
      'incident_date' => 'incidentDate',
      'closed_date' => 'closedDate',
      'charge_back_amount' => 'chargeBackAmount',
      'cost_amount' => 'costAmount',
    ],
    'status' => [
      1 => 'open',
      2 => 'closed',
      3 => 'denied'
    ],
    'involvedType' => [
      1 => 'employee',
      2 => 'carrier',
      3 => 'vendor',
      4 => 'unknown',
      5 => 'independentContractor',
      6 => 'ownerOperator',
    ],
    'involvedPersonType' => [
      1 => 'driver',
      2 => 'yardHostler',
      3 => 'carrier',
      4 => 'vendor',
      5 => 'mechanic',
      6 => 'unknown',
      7 => 'independentContractor',
      8 => 'ownerOperator',
    ],
    'locationType' => [
      1 => 'hwy',
      2 => 'store',
      3 => 'supplier',
      4 => 'vendor',
      5 => 'yard',
      6 => 'shop',
      99 => 'other',
    ],
    'incidentType' => [
      1 => 'collision',
      2 => 'fuelSpill',
      3 => 'productDamage',
      4 => 'propertyDamage',
      5 => 'bodilyInjury',
      6 => 'theft',
      7 => 'trailerDamage',
      8 => 'truckDamage',
      9 => 'nearMiss',
      10 => 'unreported',
      99 => 'other',
    ],
    'yesNo' => [
      1 => 'yes',
      2 => 'no',
    ],
    'yesNoUnknown' => [
      1 => 'yes',
      2 => 'no',
      3 => 'unknown',
    ],
    'customization' => [
      'showColumns' => [
        'tag', 'incidentDate', 'incidentTime', 'status', 'closedDate', 'assignee',
        'followUpDate', 'notes', 'incidentClaimNumber', 'thirdPartyIncidentClaimNumber',
        'ncicNumber', 'ncicReport', 'savedAddressAffected', 'chargeBack', 'chargeBackAmount',
        'estimates', 'estimatesReceived', 'costIncurred', 'costAmount', 'insuranceCompanyName',
        'involvedType', 'involvedPersonType', 'involvedPersonName', 'involvedThirdParty',
        'correctiveActionApplied', 'dotRecordable', 'preventable', 'atFault',
        'truck', 'trailer', 'locationType',
        'savedAddress', 'reported', 'incidentType', 'jotformReport', 'description',
        // Below shall be deleted after users update to new FE.
        'involvedUser', 'involvedThirdPartyPersonName', 'thirdPartyTruck', 'thirdPartyTrailer',
      ],
    ],
    'folder' => [
      'type' => [
        // null => 'public',
        1 => 'private',
      ],
      'defaultType' => 'public'
    ],
    'fileLabel' => [
      1 => 'ncicReport',
      2 => 'jotform',
      3 => 'manifest',
      4 => 'video',
      5 => 'driverStatement',
      6 => 'sceneDiagram',
      7 => 'reeferDownload',
      8 => 'email',
      9 => 'picture',
      10 => 'check',
      11 => 'claim',
      12 => 'chargeBack',
      13 => 'incidentReport',
      14 => 'releaseOfClaims',
      15 => 'license',
      16 => 'insurance',
      17 => 'internal',
      18 => 'customer',
      19 => 'bol',
      20 => 'clientChargeBack',
      21 => 'misc',
      22 => 'productLossDetail',
    ],
    'share' => [
      'LinkType' => 'publicFiles'
    ],
    'email' => [
      'type' => [
        1 => 'sendOutFromEzpapel',
        2 => 'recordOnly'
      ]
    ],
    'note' => [
      'contactType' => [
        1 => 'adjuster',
        2 => 'appraiser',
        3 => 'attorney',
        4 => 'tpa',
        5 => 'carrier',
        6 => 'propertyManager',
        7 => 'rentalCompany',
        8 => 'store',
        9 => 'vehicleOwner',
        10 => 'misc',
        11 => 'insuranceAgent',
      ]
    ],
  ],
  'integration_status' => [
    'connected' => 'Connected',
    'not_connected' => 'Not connected',
  ],

  'quickbooks_key' => [
    'dev' => [
      'client_id' => env('QUICKBOOKS_DEV_CLIENT_ID', ''),
      'client_secret' => env('QUICKBOOKS_DEV_CLIENT_SECRET', ''),
      'redirect_uri' => env('QUICKBOOKS_DEV_REDIRECT_URI', ''),
    ],
    'prod' => [
      'client_id' => env('QUICKBOOKS_PROD_CLIENT_ID', ''),
      'client_secret' => env('QUICKBOOKS_PROD_CLIENT_SECRET', ''),
      'redirect_uri' => env('QUICKBOOKS_PROD_REDIRECT_URI', ''),
    ],

  ],

  'samsara_key' => [
    'dev' => [
      'client_id' => env('SAMSARA_DEV_CLIENT_ID', ''),
      'client_secret' => env('SAMSARA_DEV_CLIENT_SECRET', ''),
      'redirect_uri' => env('SAMSARA_DEV_REDIRECT_URI', ''),
    ],
    'prod' => [
      'client_id' => env('SAMSARA_PROD_CLIENT_ID', ''),
      'client_secret' => env('SAMSARA_PROD_CLIENT_SECRET', ''),
      'redirect_uri' => env('SAMSARA_PROD_REDIRECT_URI', ''),
    ],
    'base_uri' => env('SAMSARA_OAUTH_API_BASE_URL', 'https://api.samsara.com/'),
    'token' => env('SAMSARA_URL_TOKEN', 'oauth2/token'),
    'revoke' => env('SAMSARA_URL_REVOKE_TOKEN', 'oauth2/revoke'),
    'fleet' => [
      'vehicles' => [
        'list' => 'fleet/vehicles',
        'stats' => 'fleet/vehicles/stats',
        'locations' => 'fleet/vehicles/locations',
      ],
      'trailers' => [
        'list' => 'fleet/trailers',
        'stats' => 'beta/fleet/trailers/stats',
      ],
      'drivers' => [
        'list' => 'fleet/drivers',
        'assignments' => [
          'list' => 'fleet/driver-vehicle-assignments',
        ],
      ],
      'hos' => [
        'logs' => 'fleet/hos/clocks',
      ],
      'reports' => [
        'ifta' => 'fleet/reports/ifta/jurisdiction'
      ]
    ],
  ],

  'keepTruckin_key' => [
    'dev' => [
      'client_id' => env('KEEP_TRUCKIN_DEV_CLIENT_ID', ''),
      'client_secret' => env('KEEP_TRUCKIN_DEV_CLIENT_SECRET', ''),
      'redirect_uri' => env('KEEP_TRUCKIN_DEV_REDIRECT_URI', ''),
    ],
    'prod' => [
      'client_id' => env('KEEP_TRUCKIN_PROD_CLIENT_ID', ''),
      'client_secret' => env('KEEP_TRUCKIN_PROD_CLIENT_SECRET', ''),
      'redirect_uri' => env('KEEP_TRUCKIN_PROD_REDIRECT_URI', ''),
    ],
    'base_uri' => env('KEEP_TRUCKIN_API_BASE_URL', 'https://api.keeptruckin.com/'),
    'authorize' => env('KEEP_TRUCKIN_AUTHORIZE', ''),
    'token' => env('KEEP_TRUCKIN_URL_TOKEN', 'oauth/token'),
    // apiKey is for testing only.
    // 'apiKey' => env('KEEP_TRUCKIN_API_KEY', ''),
    'revoke' => env('KEEP_TRUCKIN_URL_REVOKE_TOKEN', 'oauth/revoke'),
    'fleet' => [
      'vehicles' => [
        'list' => 'v1/vehicles',
        'location' => 'v2/vehicle_locations',
      ],
      'trailers' => [
        'list' => 'v1/assets'
      ]
    ],
    'hos' => [
      'availableTime' => 'v1/available_time'
    ],
    'reports' => [
      'ifta' => 'v1/ifta/summary'
    ]
  ],

  'dat_equipment_types' => [
    "AC" => "Auto Carrier",
    "C" => "Container",
    "CI" => "Container, Insulated",
    "CR" => "Container, Refrigerated",
    "DD" => "Double Drop",
    "LA" => "Drop Deck, Landoll",
    "DT" => "Dump Trailer",
    "F" => "Flatbed",
    "FA" => "Flatbed, Air-Ride",
    "BT" => "Flatbed, B-Train",
    "F2" => "Flatbed, Double",
    "FZ" => "Flatbed, HazMat",
    "FH" => "Flatbed, Hotshot",
    "MX" => "Flatbed, Maxi",
    "FS" => "Flatbed w/Sides",
    "FT" => "Flatbed w/Tarps",
    "FM" => "Flatbed w/Team",
    "FD" => "Flatbed or Step Deck",
    "FR" => "Flatbed/Van/Reefer",
    "HB" => "Hopper Bottom",
    "LB" => "Lowboy",
    "MV" => "Moving Van",
    "NU" => "Pneumatic",
    "PO" => "Power Only",
    "R" => "Reefer",
    "RA" => "Reefer, Air-Ride",
    "R2" => "Reefer, Double",
    "RZ" => "Reefer, HazMat",
    "RN" => "Reefer, Intermodal",
    "RL" => "Reefer, Logistics",
    "RM" => "Reefer w/Team",
    "RG" => "Removable Gooseneck",
    "SD" => "Step Deck",
    "ST" => "Stretch Trailer",
    "TA" => "Tanker, Aluminum",
    "TN" => "Tanker, Intermodal",
    "TS" => "Tanker, Steel",
    "TT" => "Truck and Trailer",
    "V" => "Van",
    "VA" => "Van, Air-Ride",
    "VS" => "Van, Conestoga",
    "VC" => "Van, Curtain",
    "V2" => "Van, Double",
    "VZ" => "Van, HazMat",
    "VH" => "Van, Hotshot",
    "VI" => "Van, Insulated",
    "VN" => "Van, Intermodal",
    "VG" => "Van, Lift-Gate",
    "VL" => "Van, Logistics",
    "OT" => "Van, Open-Top",
    "VB" => "Van, Roller Bed",
    "V3" => "Van, Triple",
    "VV" => "Van, Vented",
    "VM" => "Van w/Team",
    "VT" => "Van or Flatbed w/Tarps",
    "VF" => "Van or Flatbed",
    "VR" => "Van or Reefer",
    "IR" => "Insulated Van or Reefer",
    "RV" => "Reefer or Vented Van",
    "FC" => "Flatbed, w/Chains",
    "RP" => "Reefer, w/Pallet Exchange",
    "VW" => "Van, w/Blanket Wrap",
    "LR" => "Lowboy or RGN",
    "VP" => "Van, w/Pallet Exchange",
    "SR" => "Step Deck or RGN",
    "CV" => "Conveyor",
    "FO" => "Flatbed, Over Dimension",
    "LO" => "Lowboy, Over Dimension",
    "CN" => "Conestoga",
    "FN" => "Flatbed Conestoga",
    "SN" => "Stepdeck Conestoga",
    "SB" => "Straight Box Truck",
  ],

  'dat_equipment_classes' => [
    "B", "C", "D", "F", "K", "N", "O", "R", "S", "T", "V", "Z"
  ],

  'ezpapel_equipment_type_to_dat' => [
    "53' Dry Van" => 'V',
    "53' Reefer" => 'R',
    "Flatbed" => 'F',
    "Power Only" => 'PO', // O
    "48' Dry Van" => 'V',
    "48' Reefer" => 'R',
    "22' Van" => 'V',
    'Cargo Van' => 'V', // V
    'Hot Shot' => 'FH,VH', // S
    'Box Truck' => 'SB', // O
    "Load-Out" => 'NO_MATCH',
    "Step Deck" => 'LB,SR', // K
    "Straight Van" => 'SB', // O
    "Tanker" => 'TA,TN,TS', // T
    "Curtain Van" => 'VC', // V
    "Vented Van" => 'VV', // V
  ],

  'truckstop_equipment_types' => [
    "2F", "ANIM", "ANY", "AUTO", "B-TR", "BDMP", "BEAM", "BELT", "BOAT", "CH", "CONG", "CONT", "CV", "DA", "DD", "DDE", "DUMP", "ENDP",
    "F", "FA", "FEXT", "FINT", "FO", "FRV", "FSD", "FSDV", "FV", "FVR", "FVV", "FVVR", "FWS", "HOPP", "HS", "HTU", "LAF", "LB", "LBO",
    "LDOT", "LIVE", "MAXI", "MBHM", "PNEU", "PO", "R", "RFV", "RGN", "RGNE", "RINT", "ROLL", "RPD", "RV", "RVF", "SD", "SDL", "SDO",
    "SDRG", "SPEC", "SV", "TANK", "V", "V-OT", "VA", "VB", "VCAR", "VF", "VFR", "VINT", "VIV", "VIVR", "VLG", "VM", "VR", "VRDD", "VRF",
    "VV", "VVR", "WALK"
  ],

  'ezpapel_equipment_type_to_truckstop' => [
    "53' Dry Van" => 'V',
    "53' Reefer" => 'R',
    "Flatbed" => 'F',
    "Power Only" => 'PO',
    "48' Dry Van" => 'V',
    "48' Reefer" => 'R',
    "22' Van" => 'V',
    'Cargo Van' => 'VCAR',
    'Hot Shot' => 'HS',
    'Box Truck' => 'SV',
    "Load-Out" => 'LDOT',
    "Step Deck" => 'SD',
    "Straight Van" => 'SV',
    "Tanker" => 'TANK',
    "Curtain Van" => 'CV',
    "Vented Van" => 'VV'
  ],

  'load_matching_manual_search_type_to_dat_type' => [
    'V' => 'V',
    'R' => 'R',
    'F' => 'F',
    'Power Only' => 'PO',
    'Box Truck' => 'SB'
  ],

  'load_matching_manual_search_type_to_truckstop' => [
    'V' => 'V',
    'R' => 'R',
    'F' => 'F',
    'Power Only' => 'PO',
    'Box Truck' => 'SV'
  ],

  // We can only use one specializedEquipmentCode.
  'ezpapel_equipment_type_to_chrobinson' => [
    "53' Dry Van" => 'V',
    "53' Reefer" => 'R',
    "Flatbed" => 'F',
    "Power Only" => 'H', // 'PO',
    "48' Dry Van" => 'V',
    "48' Reefer" => 'R',
    "22' Van" => 'V',
    'Cargo Van' => 'NO_MATCH',
    'Hot Shot' => 'HS', // 'HS',
    'Box Truck' => 'V', // 'STR',
    "Load-Out" => 'NO_MATCH',
    "Step Deck" => 'FD', // 'SD', // 'FD,SD,SDC,SSD'
    "Straight Van" => 'V', // 'STR',
    "Tanker" => 'TK', // 'TK',
    "Curtain Van" => 'CV', // 'CV',
    "Vented Van" => 'VV', // 'VV',
  ],

  // We can only use one specializedEquipmentCode, so we use modes here.
  'load_matching_manual_search_type_to_chrobinson' => [
    'V' => 'V',
    'R' => 'R',
    'F' => 'F',
    'Power Only' => 'H', // 'PO'
    'Box Truck' => 'V', // 'STR'
  ],

  'ezpapel_equipment_type_to_jbhunt' => [
    "53' Dry Van" => 'Dry Van',
    "53' Reefer" => 'REEFER',
    "Flatbed" => 'Flatbed',
    "Power Only" => 'Power Only',
    "48' Dry Van" => 'Dry Van',
    "48' Reefer" => 'REEFER',
    "22' Van" => 'Dry Van',
    'Cargo Van' => 'Dry Van',
    'Hot Shot' => 'Dry Van',
    'Box Truck' => 'Dry Van',
    "Load-Out" => 'NO_MATCH',
    "Step Deck" => 'NO_MATCH',
    "Straight Van" => 'Dry Van',
    "Tanker" => 'NO_MATCH',
    "Curtain Van" => 'Dry Van',
    "Vented Van" => 'Dry Van',
  ],

  'LM_manual_search_type_to_jbhunt' => [
    'V' => 'Dry Van',
    'R' => 'REEFER',
    'F' => 'Flatbed',
    'Power Only' => 'Power Only',
    'Box Truck' => 'Dry Van',
  ],

  'spreadsheet' => [
    'defaultName' => 'New Spreadsheet',
    'sheet' => [
      'defaultName' => 'New Subsheet',
      'filters' => [
        'column' => [
          'loadDirection' => 'loadDirection',
          'loadShipDate' => 'loadShipDate',
          'loadDeliveryDate' => 'loadDeliveryDate',
          'loadPickupState' => 'loadPickupState',
          'loadDeliveryState' => 'loadDeliveryState',
          'loadDispatcherNotes' => 'loadDispatcherNotes',
          'loadShipper' => 'loadShipper',
          'loadReceiver' => 'loadReceiver',
          'loadLeg' => 'loadLeg',
          'loadDriver' => 'loadDriver',
          'loadTag' => 'loadTag',
          'loadDispatcher' => 'loadDispatcher',
          'loadCustomer' => 'loadCustomer',
          'loadStatus' => 'loadStatus',
          'loadThirdPartyCarrier' => 'loadThirdPartyCarrier',
          'loadContainerStatus' => 'loadContainerStatus',
          'loadContainerLocation' => 'loadContainerLocation',
          'loadTrailer' => 'loadTrailer',
          'loadTruck' => 'loadTruck',
        ],
        'direction' => [
          'i' => 1,
          'o' => 0
        ],
        'containerHereStopType' => [
          's' => 'loadShippers',
          'r' => 'loadReceivers',
          'l' => 'loadLegs',
          't' => 'loadTerminals',
        ]
      ]
    ],
    'keyEntity' => [
      'load' => 1
    ],
    'customType' => [
      'text' => 1,
      'number' => 2,
      'currency' => 3,
    ],
    'predefinedColumns' => [
      'load' => [
        1 => 'loadNumber',
        2 => 'loadReference',
        3 => 'loadShipDate',
        4 => 'loadDeliveryDate',
        5 => 'loadCustomer',
        6 => 'loadPickUpLocation',
        7 => 'loadDeliveryLocation',
        8 => 'loadDrivers',
        9 => 'loadDispatcherNotes',
        10 => 'loadStatus',
        11 => 'loadPod',
        12 => 'loadDriverPay',
        13 => 'loadAmount',
        14 => 'loadDispatcher',
        15 => 'loadInvoiceDate',
        16 => 'loadDistance',
        17 => 'loadTrucks',
        18 => 'loadTrailers',
        19 => 'loadShipperNames',
        20 => 'loadReceiverNames',
        21 => 'loadTotalWeight',
        22 => 'loadBillToCode',
        23 => 'loadTag',
        24 => 'loadThirdPartyCarrier',
        25 => 'loadDriverHos',
        26 => 'loadFindCarriers',
        27 => 'loadThirdPartyCarrierRate',
        28 => 'loadThirdPartyCarrierRateCon',
        29 => 'loadThirdPartyCarrierBol',
        30 => 'loadEquipmentNumber',
        31 => 'loadFreightDescription',
        32 => 'loadGrossProfitBrokeredLoad',
        33 => 'loadGrossProfitPercentageBrokeredLoad',
        34 => 'loadEmptyDistance',
        35 => 'loadContainerStatus',
        36 => 'loadContainerLocation',
        37 => 'loadChassis',
        38 => 'loadContainer',
        39 => 'loadHaulingFee',
        40 => 'loadFuelSurcharge',
        41 => 'loadAccessorialFees',
        42 => 'loadAccessorialDeductions',
        43 => 'loadThirdPartyCarrierHaulingFee',
        44 => 'loadThirdPartyCarrierFuelSurcharge',
        45 => 'loadThirdPartyCarrierAccessorialFees',
        46 => 'loadThirdPartyCarrierAccessorialDeductions',
        47 => 'loadFirstShipDate',
        48 => 'loadLastDeliveryDate',
        49 => 'loadFirstShipperName',
        50 => 'loadFirstShipperAddress',
        51 => 'loadFirstShipperCity',
        52 => 'loadFirstShipperState',
        53 => 'loadFirstShipperZipCode',
        54 => 'loadLastReceiverName',
        55 => 'loadLastReceiverAddress',
        56 => 'loadLastReceiverCity',
        57 => 'loadLastReceiverState',
        58 => 'loadLastReceiverZipCode',
        59 => 'loadInternalReference',
        60 => 'loadDriverUnloadedStatus',
      ],
      'name' => [
        1 => 'Load #',
        2 => 'Load Reference',
        3 => 'Ship Date',
        4 => 'Del. Date',
        5 => 'Customer',
        6 => 'Pick Up',
        7 => 'Delivery',
        8 => 'Drivers',
        9 => 'Notes',
        10 => 'Load Status',
        11 => 'POD',
        12 => 'Driver Pay',
        13 => 'Load Amount',
        14 => 'Dispatcher',
        15 => 'Invoice Date',
        16 => 'Miles',
        17 => 'Truck',
        18 => 'Trailer',
        19 => 'Shipper',
        20 => 'Receiver',
        21 => 'Weight',
        22 => 'Bill To Code',
        23 => 'Tag',
        24 => 'Third Party Carrier',
        25 => 'Driver HOS',
        26 => 'Find Carriers',
        27 => 'Rate For Third Party',
        28 => 'Rate Con For Third Party',
        29 => 'BOL For Third Party',
        30 => 'Equipment #',
        31 => 'Freight Description',
        32 => 'Gross Profit (Brokered Load)',
        33 => 'Gross Profit % (Brokered Load)',
        34 => 'Empty Miles',
        35 => 'Container Status',
        36 => 'Container Location',
        37 => 'Chassis',
        38 => 'Container',
        39 => 'Hauling Fee',
        40 => 'Fuel Surcharge',
        41 => 'Accessorial Fees',
        42 => 'Accessorial Deductions',
        43 => 'Hauling Fee For Third Party',
        44 => 'Fuel Surcharge For Third Party',
        45 => 'Accessorial Fees For Third Party',
        46 => 'Accessorial Deductions For Third Party',
        47 => '1st Ship Date',
        48 => 'Last Del. Date',
        49 => '1st Shipper Name',
        50 => '1st Shipper Address',
        51 => '1st Shipper City',
        52 => '1st Shipper State',
        53 => '1st Shipper ZIP Code',
        54 => 'Last Receiver Name',
        55 => 'Last Receiver Address',
        56 => 'Last Receiver City',
        57 => 'Last Receiver State',
        58 => 'Last Receiver ZIP Code',
        59 => 'Internal Reference',
        60 => 'Driver Delivery Status',
      ],
    ],
    'accessLevel' => [
      1 => 'admin',
      2 => 'editor',
      3 => 'viewer'
    ],
    'accessRole' => [
      'admin' => 'admin',
      'editor' => 'editor',
      'viewer' => 'viewer',
      'owner' => 'owner'
    ],
    'rowHeight' => [
      'short' => 0,
      'medium' => 1,
      'tall' => 2
    ]
  ],
  'states' => [
    'canada' => [
      "AB",
      "BC",
      "MB",
      "NB",
      "NL",
      "NT",
      "NS",
      "NU",
      "ON",
      "PE",
      "QC",
      "SK",
      "YT"
    ]
  ],
  'automation' => [
    'action' => [
      'actionType' => [
        1 => 'email',
        2 => 'emailAvailableTrucks'
      ]
    ],
    'schedule' => [
      'freqType' => [
        0 => 'once',
        1 => 'day',
        2 => 'week',
        3 => 'month'
      ]
    ],
    'reminder' => [
      'freqType' => [
        0 => 'once',
        1 => 'day',
        2 => 'week',
        3 => 'month',
        4 => 'expirationDate'
      ],
      'category' => [
        1 => 'maintenance',
        2 => 'expiration'
      ],
      'asset' => [
        'assetType' => [
          1 => 'truck',
          2 => 'trailer',
          3 => 'driver'
        ],
        'fieldsToCheck' => [
          'driver' => [
            'values' => [
              1 => 'cdlExpirationDate',
              2 => 'medicalCardExpirationDate',
              3 => 'occupationExpirationDate',
              4 => 'clearinghouseExpirationDate'
            ],
            'columns' => [
              1 => 'driving_license_expire_date',
              2 => 'medical_expire_date',
              3 => 'occupation_expire_date',
              4 => 'clearinghouse_expire_date'
            ],
            'names' => [
              1 => 'CDL Expiration Date',
              2 => 'Medical Card Expiration Date',
              3 => 'Occupation Expiration Date',
              4 => 'Clearinghouse Expiration Date'
            ]
          ],
          'truck' => [
            'values' => [
              1 => 'annualInspExpireDate',
              2 => 'insuranceExpireDate',
              3 => 'irpExpirationDate',
              4 => 'registrationExpireDate',
              5 => 'annualPermitExpireDate',
            ],
            'columns' => [
              1 => 'inspection_expiry',
              2 => 'insurance_expire_date',
              3 => 'irp_expire_date',
              4 => 'registration_expire_date',
              5 => 'annual_permit_expire_date',
            ],
            'names' => [
              1 => 'Annual Inspection Expiration Date',
              2 => 'Insurance Expiration Date',
              3 => 'IRP Expiration Date',
              4 => 'Registration Expiration Date',
              5 => 'Annual Permit Expiration Date',
            ]
          ],
          'trailer' => [
            'values' => [
              1 => 'annualInspExpireDate',
              2 => 'insuranceExpireDate',
              3 => 'registrationExpireDate',
              4 => 'annualPermitExpireDate',
            ],
            'columns' => [
              1 => 'inspection_expiry',
              2 => 'insurance_expire_date',
              3 => 'registration_expire_date',
              4 => 'annual_permit_expire_date',
            ],
            'names' => [
              1 => 'Annual Inspection Expiration Date',
              2 => 'Insurance Expiration Date',
              3 => 'Registration Expiration Date',
              4 => 'Annual Permit Expiration Date',
            ]
          ]
        ]
      ]
    ],
    'asset' => [
      'assetType' => [
        1 => 'truck',
        2 => 'trailer'
      ]
    ],
  ],

  // References:
  // https://simple.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_time_zone
  // https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  // https://en.wikipedia.org/wiki/List_of_time_offsets_by_U.S._state_and_territory
  // http://efele.net/maps/tz/us/
  // Eastern: America/New_York, EST
  // Central: America/Chicago, CST
  // Mountain: America/Denver, MST
  // Pacific: America/Los_Angeles, PST
  'stateToTimezone' => [
    'AL' => 'America/Chicago',
    'AK' => 'America/Anchorage',
    'AZ' => 'America/Phoenix', // multi-timezone, most 'America/Phoenix'
    'AR' => 'America/Chicago',
    'CA' => 'America/Los_Angeles',
    'CO' => 'America/Denver',
    'CT' => 'America/New_York',
    'DE' => 'America/New_York',
    'DC' => 'America/New_York',
    'FL' => null, // multi-timezone
    'GA' => 'America/New_York',
    'HI' => 'Pacific/Honolulu',
    'ID' => null, // multi-timezone
    'IL' => 'America/Chicago',
    'IN' => null, // multi-timezone
    'IA' => 'America/Chicago',
    'KS' => 'America/Chicago', // multi-timezone, most CST
    'KY' => null, // multi-timezone
    'LA' => 'America/Chicago',
    'ME' => 'America/New_York',
    'MD' => 'America/New_York',
    'MA' => 'America/New_York',
    'MI' => 'America/New_York', // multi-timezone, most EST
    'MN' => 'America/Chicago',
    'MS' => 'America/Chicago',
    'MO' => 'America/Chicago',
    'MT' => 'America/Denver',
    'NE' => null, // multi-timezone
    'NV' => 'America/Los_Angeles', // multi-timezone
    'NH' => 'America/New_York',
    'NJ' => 'America/New_York',
    'NM' => 'America/Denver',
    'NY' => 'America/New_York',
    'NC' => 'America/New_York',
    'ND' => null, // multi-timezone
    'OH' => 'America/New_York',
    'OK' => 'America/Chicago',
    'OR' => 'America/Los_Angeles', // multi-timezone, most PST
    'PA' => 'America/New_York',
    'RI' => 'America/New_York',
    'SC' => 'America/New_York',
    'SD' => null, // multi-timezone
    'TN' => null, // multi-timezone
    'TX' => 'America/Chicago', // multi-timezone
    'UT' => 'America/Denver',
    'VT' => 'America/New_York',
    'VA' => 'America/New_York',
    'WA' => 'America/Los_Angeles',
    'WV' => 'America/New_York',
    'WI' => 'America/Chicago',
    'WY' => 'America/Denver',
  ],

  'tenderCompanies' => [
    'GE' => 1,
    'Transplace' => 2
  ],

  'gender' => [
    1 => 'male',
    2 => 'female',
    3 => 'other'
  ],

  'pagination' => [
    'pageSize' => 25
  ],

  'fcSharedPermissions' => [
    'accessLevel' => [
      1 => 'admin',
      2 => 'editor',
      3 => 'viewer'
    ]
  ],

  'fcSubmenus' => [
    'predefinedData' => [
      1 => 'load',
    ]
  ],

  'fcViews' => [
    'type' => [
      1 => 'list',
      2 => 'table',
      3 => 'board',
      4 => 'gantt',
    ]
  ],

  'logs' => [
    'truckAndTrailerType' => [
      1 => 'maintenance',
      2 => 'load',
      3 => 'dropEmptyTrailer',
      4 => 'dropLoadedTrailer',
      5 => 'hookEmptyTrailer',
      6 => 'hookLoadedTrailer'
    ],
    'hookDropTrailerLogType' => [
      3 => 'dropEmptyTrailer',
      4 => 'dropLoadedTrailer',
      5 => 'hookEmptyTrailer',
      6 => 'hookLoadedTrailer'
    ],
    'truckAndTrailerTypeStatus' => [
      2 => 'inOperation',
      3 => 'dropEmptyTrailer',
      4 => 'dropLoadedTrailer',
      5 => 'hookEmptyTrailer',
      6 => 'hookLoadedTrailer'
    ],
    'load' => [
      1 => 'adminDispatcherAssignVehicleToLoad',
      2 => 'driverAssignVehicleToLoad',
      3 => 'driverArriveAtShipper',
      4 => 'driverLoadedAtShipper',
      5 => 'driverArriveAtReceiver',
      6 => 'driverUnloadedAtReceiver',
      7 => 'driverHandedOver',
      8 => 'createLoad',
      9 => 'generateInvoice',
      10 => 'requestPayment',
      11 => 'loadPaid',
      12 => 'dropEmptyTrailer',
      13 => 'dropLoadedTrailer',
      14 => 'hookEmptyTrailer',
      15 => 'hookLoadedTrailer'
    ],
    'maintenanceIssueStatus' => [
      1 => 'serviceReported',
      2 => 'serviceScheduled',
      3 => 'inService',
      4 => 'serviceCompleted'
    ],
    'maintenanceIssueFeString' => [
      'serviceReported' => 'Service Reported',
      'serviceScheduled' => 'Service Scheduled',
      'inService' => 'In Service',
      'serviceCompleted' => 'Service Completed'
    ]
  ],

  'customField' => [
    'custom_type' => [
      1 => 'text',
      2 => 'user',
      3 => 'singleSelect',
      4 => 'date',
      5 => 'dateNoTz',
      6 => 'files',
      7 => 'number',
      8 => 'currency',
      9 => 'multiSelect',
      10 => 'recordLink',
      11 => 'rollup',
      12 => 'formula',
    ],
    'level' => [
      1 => 'primary',
      2 => 'secondary',
    ],
    'defaults' => [
      [
        'name' => 'Name',
        'type' => 'text',
        'level' => 'primary',
      ],
      [
        'name' => 'Description',
        'type' => 'text',
        'level' => null,
      ],
      [
        'name' => 'Assignee',
        'type' => 'user',
        'level' => null,
      ],
      [
        'name' => 'Status',
        'type' => 'singleSelect',
        'singleSelectOptions' => [
          ['optionName' => 'Open'],
          ['optionName' => 'In Progress'],
          ['optionName' => 'Completed'],
        ],
        'level' => null,
      ],
      [
        'name' => 'Date',
        'type' => 'date',
        'level' => null,
      ],
    ],
  ],

  'trip' => [
    'type' => [
      'companyDriver' => 'companyDriver',
      'ownerOperator' => 'ownerOperator',
      'truck' => 'truck'
    ],
    'stop' => [
      'type' => [
        'shipper' => 'shipper',
        'receiver' => 'receiver',
        'leg' => 'leg',
        'terminal' => 'terminal',
      ]
    ],
    'status' => [
      1 => 'created',
      2 => 'approved',
      3 => 'paid',
    ],
    'driver_pay_type' => [
      1 => 'perMile',
      2 => 'hourly',
      3 => 'percentage',
      4 => 'flat',
      5 => 'template'
    ],
    'defaultPayType' => [
      'per_mile' => 'perMile',
      'hourly' => 'hourly',
      'percentage' => 'percentage',
      'flat' => 'flat',
      'template' => 'template'
    ],
    'percentage_type' => [
      1 => 'haulingFees',
      2 => 'totalIncome',
      3 => 'haulingPlusFuelSurcharge'
    ],
    'sortBy' => [
      'field' => [
        'status' => 'status',
        'tripNumber' => 'trip_number',
        'totalPayment' => 'total_payment',
        'tripStartDate' => 'stops_start_date',
        'tripEndDate' => 'stops_end_date',
        'createdDate' => 'created_at',
        'approvedDate' => 'paycheck_approved_utc_datetime',
        'driverName' => 'driver_name',
        'approvedByUserName' => 'approved_user_name',
        'totalLoadedDistance' => 'total_loaded_distance'
      ],
      'order' => [
        'asc' => 'asc',
        'desc' => 'desc'
      ]
    ]
  ],
  'invoices' => [
    'type' => [
      'manual' => 'manual',
      'singleLoad' => 'singleLoad',
      'multipleLoads' => 'multipleLoads'
    ],
    'percentageOf' => [
      1 => 'subtotal'
    ],
    'status' => [
      'invoicePayments' => [
        1 => 'success',
        2 => 'failed',
      ],
    ],
    'paymentServiceProvider' => [
      1 => 'authorize.net',
    ],
    'sortBy' => [
      'field' => [
        'status' => 'status',
        'invoiceNumber' => 'invoice_number',
        'customerName' => 'customer_name',
        'amount' => 'balance_due',
        'issueDate' => 'issue_date',
        'dueDate' => 'due_date'
      ],
      'order' => [
        'asc' => 'asc',
        'desc' => 'desc'
      ]
    ]
  ],

  'predefinedColumns' => [
    'load' => [
      1 => 'loadNumber',
      2 => 'loadReference',
      3 => 'loadShipDate',
      4 => 'loadDeliveryDate',
      5 => 'loadCustomer',
      6 => 'loadPickUpLocation',
      7 => 'loadDeliveryLocation',
      8 => 'loadDrivers',
      9 => 'loadDispatcherNotes',
      10 => 'loadStatus',
      11 => 'loadPod',
      12 => 'loadDriverPay',
      13 => 'loadAmount',
      14 => 'loadDispatcher'
    ],
    'list' => [
      1 => 'loadNumber',
      2 => 'loadReference',
      3 => 'loadShipDate',
      4 => "loadDeliveryDate",
      5 => "loadCustomer",
      6 => "loadPickUpLocation",
      7 => "loadDeliveryLocation",
      8 => "loadDrivers",
      9 => "loadDispatcherNotes",
      10 => "loadStatus"
    ],
    'table' => [
      1 => 'loadNumber',
      2 => 'loadReference',
      3 => 'loadShipDate',
      4 => "loadDeliveryDate",
      5 => "loadCustomer",
      6 => "loadPickUpLocation",
      7 => "loadDeliveryLocation",
      8 => "loadDrivers",
      9 => "loadDispatcherNotes",
      10 => "loadStatus"
    ],
    'board' => [
      1 => 'loadNumber',
      2 => 'loadReference',
      3 => 'loadShipDate',
      4 => "loadDeliveryDate",
      5 => "loadCustomer",
      6 => "loadPickUpLocation",
      7 => "loadDeliveryLocation",
      8 => "loadDrivers",
      9 => "loadDispatcherNotes",
    ],
    'gantt' => [
      1 => 'loadNumber',
    ],
    'ganttRecordDatesForUi' => [
      3 => 'loadShipDate',
      4 => 'loadDeliveryDate',
    ],
    'percentageOf' => [
      1 => 'subtotal'
    ]
  ],

  'tags' => [
    'type' => [
      1 => 'subsidiary',
      2 => 'terminal',
      3 => 'ownerOperator'
    ]
  ],

  'driverPayTemplate' => [
    'type' => [
      1 => 'byLoadedMiles',
      2 => 'byEmptyMiles',
      3 => 'flatPay',
      4 => 'stopPay',
      5 => 'byHour',
      6 => 'byPercentageOfHaulingFee',
      7 => 'byPercentageOfFuelSurcharge',
      8 => 'byPercentageOfTotalIncome',
      9 => 'formulaLoadedMiles',
      10 => 'formulaEmptyMiles'
    ],
    'defaultName' => [
      'byLoadedMiles' => 'By Loaded Miles',
      'byEmptyMiles' => 'By Empty Miles',
      'flatPay' => 'Flat Pay',
      'stopPay' => 'Stop Pay',
      'byHour' => 'By Hour',
      'byPercentageOfHaulingFee' => 'By % of Hauling Fee',
      'byPercentageOfFuelSurcharge' => 'By % of Fuel Surcharge',
      'byPercentageOfTotalIncome' => 'By % of Total Income',
      'formulaLoadedMiles' => 'Formula Loaded Miles',
      'formulaEmptyMiles' => 'Formula Empty Miles'
    ],
    'target' => [
      1 => 'load',
      2 => 'trip'
    ]
  ],
  'planning' => [
    'timelineFor' => ['truck', 'trailer', 'driver'],

    'schedule' => [
      'frequentType' => [
        1 => 'weekly',
        2 => 'once'
      ],
      'weeklySelectedDays' => [
        1 => 'Monday',
        2 => 'Tuesday',
        3 => 'Wednesday',
        4 => 'Thursday',
        5 => 'Friday',
        6 => 'Saturday',
        7 => 'Sunday'
      ],
      'weeklyCheck' => [
        'd1' => 1,
        'd2' => 2,
        'd3' => 3,
        'd4' => 4,
        'd5' => 5,
        'd6' => 6,
        'd7' => 7
      ],
      'equipmentTypes' => [
        'type_van' => 'van',
        'type_reefer' => 'reefer',
        'type_flatbed' => 'flatbed',
        'type_step_deck' => 'stepDeck',
        'type_power_only' => 'powerOnly',
        'type_conestoga' => 'conestoga',
        'type_box_truck' => 'boxTruck',
        'type_sprinter' => 'sprinter',
        'type_drayage' => 'drayage'
      ],
    ]
  ],

  'mobileApps' => [
    'ezpapel' => [
      'latestVersion' => '1.0.0'
    ],
    'platform' => [
      1 => 'iOS',
      2 => 'Android'
    ],
  ],

  'driver' => [
    'approvalStatus' => [
      1 => 'approved',
      2 => 'notApproved',
      3 => 'approvedCdl',
      4 => 'approvedCmv',
      5 => 'approvedNonCmv',
    ],
    'approvalStatusFeString' => [
      1 => 'Approved',
      2 => 'Not Approved',
      3 => 'Approved CDL',
      4 => 'Approved CMV',
      5 => 'Approved Non-CMV',
    ],
    'sortBy' => [
      'field' => [
        'name' => 'name',
        'phone' => 'phone',
        'email' => 'email',
        'driverType' => 'driverType',
        'truckNumber' => 'truckNumber',
        'trailerNumber' => 'trailerNumber'
      ],
    ],
    'drugPool' => [
      1 => 'yes',
      2 => 'no'
    ],
    'payFrequency' => [
      1 => "weekly",
      2 => "biweekly",
      3 => "monthly"
    ],
    'cdlClass' => [
      1 => 'A',
      2 => 'B',
      3 => 'C',
      5 => 'E',
      6 => 'F',
    ],
    'exceptedInterIntrastateType' => [
      1 => 'nonExceptedInterstate',
      2 => 'nonExceptedIntrastate',
      3 => 'exceptedInterstate',
      4 => 'exceptedIntrastate',
    ],
    'exceptedInterIntrastateTypeFront' => [
      1 => 'Interstate Non-Excepted',
      2 => 'Intrastate Non-Excepted',
      3 => 'Interstate Excepted',
      4 => 'Intrastate Excepted',
    ],
    'unloadedStatus' => [
      'pending' => 'Pending',
      'onTime' => 'Delivered On Time',
      'late' => 'Late',
    ],
  ],

  'truck_types' => [
    'type_van' => 'van',
    'type_reefer' => 'reefer',
    'type_flatbed' => 'flatbed',
    'type_step_deck' => 'stepDeck',
    'type_power_only' => 'powerOnly',
    'type_conestoga' => 'conestoga',
    'type_box_truck' => 'boxTruck',
    'type_sprinter' => 'sprinter',
    'type_hot_shot' => 'hotShot',
  ],

  'defaultSortByOrder' => [
    'asc' => 'asc',
    'desc' => 'desc'
  ],

  // This is mainly used for get presigned S3 upload URL.
  'uploadFileType' => [
    'logo' => 'logo',
    'profile' => 'profile',
    'rc' => 'rc',
    'inv' => 'inv',
    'pod' => 'pod',
    'pic' => 'pic',
    'bol' => 'bol',
    'tpcinv' => 'tpcinv',
    'lumper' => 'lumper',
    'scale' => 'scale',
    'fuel' => 'fuel',
    'repair' => 'repair',
    'others' => 'others',
  ],

  'loadOtherImage' => [
    'lumper' => 'lumper',
    'scale' => 'scale',
    'fuel' => 'fuel',
    'repair' => 'repair',
  ],

  'syncApi' => [
    'ownerShipType' => [
      'truck' => [
        'company_truck' => 'companyTruck',
        'owner_operator' => 'ownerOperator',
        'leased' => 'leased',
      ],
      'trailer' => [
        'company_trailer' => 'companyTrailer',
        'owner_operator' => 'ownerOperator',
        'leased' => 'leased',
      ]
    ],
  ],

  'defaultPassword' => '123456',
  'defaultTimeZone' => 'America/Los_Angeles',

  'homeTab' => [
    'type' => [
      'customer' => 'customer',
      'driver' => 'driver',
      'truck' => 'truck',
      'dispatcher' => 'dispatcher',
      'market' => 'market',
    ],
    'expense' => [
      'category' => [
        'driverPay' => 'Driver Pay',
        'fuelExpense' => 'Fuel Expense',
      ],
    ],
  ],

  'chat' => [
    'type' => [
      1 => 'oneOnOne',
      2 => 'group',
      3 => 'load'
    ]
  ],

  'usStatesIntMapping' => [
    1 => 'AL',
    2 => 'AK',
    3 => 'AZ',
    4 => 'AR',
    5 => 'CA',
    6 => 'CO',
    7 => 'CT',
    8 => 'DE',
    9 => 'DC',
    10 => 'FL',
    11 => 'GA',
    12 => 'HI',
    13 => 'ID',
    14 => 'IL',
    15 => 'IN',
    16 => 'IA',
    17 => 'KS',
    18 => 'KY',
    19 => 'LA',
    20 => 'ME',
    21 => 'MD',
    22 => 'MA',
    23 => 'MI',
    24 => 'MN',
    25 => 'MS',
    26 => 'MO',
    27 => 'MT',
    28 => 'NE',
    29 => 'NV',
    30 => 'NH',
    31 => 'NJ',
    32 => 'NM',
    33 => 'NY',
    34 => 'NC',
    35 => 'ND',
    36 => 'OH',
    37 => 'OK',
    38 => 'OR',
    39 => 'PA',
    40 => 'RI',
    41 => 'SC',
    42 => 'SD',
    43 => 'TN',
    44 => 'TX',
    45 => 'UT',
    46 => 'VT',
    47 => 'VA',
    48 => 'WA',
    49 => 'WV',
    50 => 'WI',
    51 => 'WY',
  ],

  'latLngSource' => [
    'driverMobileApp' => 'driverMobileApp',
    'externalApi' => 'externalApi',
  ],

  'externalSystems' => [
    'nodeProject' => [
      'prodUrl' => env('NODE_PROD_API_URL'),
      'devUrl' => env('NODE_DEV_API_URL', 'http://localhost:3000/api/'),
    ]
  ],
  'mergeAndUploadUrl' => 'load/factoring/rts/mergeAndUpload',
  'mergePdfAndUpload' => 'pdf/mergeAndUpload',
  'wexFactoringAPI' => 'loads/factoring/wex/mergeAndUpload',
  'pushNotificationUrl' => 'users/sendNotification',

  'factoringCompany' => [
    'integrationPartners' => [
      1 => 'rts',
      2 => 'wex',
      3 => 'tafs',
    ]
  ],

  'accounting' => [
    'item' => [
      'type' => [
        1 => 'service',
        2 => 'inventory',
        3 => 'nonInventory',
        4 => 'group',
      ]
    ],
  ],

  'customer' => [
    'inExternal' => [
      1 => 'internal',
      2 => 'external',
    ]
  ],

  'melioPayment' => [
    'status' => [
      'markAsPaid' => 'markAsPaid',
      'cancel' => 'cancel',
    ]
  ],

  'report' => [
    'dispatcher' => [
      'sortField' => [
        1 => 'customer',
        2 => 'loadUniqueId',
        3 => 'shipDate',
        4 => 'deliveryDate'
      ],
      "sortOrder" => [
        1 => 'asc',
        2 => 'desc'
      ]
    ]
  ]
];

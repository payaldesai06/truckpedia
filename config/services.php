<?php

return [

  /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

  'cloundfront-s3' => [
    'key_id' => env('CLOUDFRONT_S3_KEY_ID'),
    'key_path' => env('CLOUDFRONT_S3_KEY_PATH'),
  ],

  'mailgun' => [
    'domain' => env('MAILGUN_DOMAIN'),
    'secret' => env('MAILGUN_SECRET'),
    'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
  ],

  'postmark' => [
    'token' => env('POSTMARK_TOKEN'),
  ],

  'ses' => [
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
  ],

  'dat' => [
    'auth' => [
      'test_url' => 'https://identity.api.nprod.dat.com/access/v1/token',
      'prod_url' => 'https://identity.api.dat.com/access/v1/token',
      'organization' => '/organization',
      'user' => '/user'
    ],
    'search' => [
      'test_url' => 'https://freight.api.nprod.dat.com/search/v1/loads',
      'prod_url' => 'https://freight.api.prod.dat.com/search/v1/loads',
      'matches' => '/matches',
      'detailedMatches' => '/detailedMatches'
    ],
  ],

  'truckstop' => [
    'search' => [
      'test_url' => 'http://testws.truckstop.com:8080/V13',
      'prod_url' => env('TRUCKSTOP_SEARCH_URL', 'http://webservices.truckstop.com/v13'),
      'loadsearch' => '/Searching/LoadSearch.svc?wsdl',
      'test_username' => 'EZPapelWS',
      'prod_username' => env('TRUCKSTOP_USERNAME', 'EZPapelWS'),
      'test_password' => 'HwTigPNo',
      'prod_password' => env('TRUCKSTOP_PASSWORD', 'HwTigPNo'),
    ],
  ],

  'chrobinson' => [
    'search' => [
      'test_url' => 'https://sandbox-api.navisphere.com',
      'test_clientId' => '0oahtkprrwDVP40vj357',
      'test_clientSecret' => 'HM7aBazuJ6F_dgVvtjiXCTaOS9fVJ-kNacrHolTw',

      'prod_url' => env('CHROBINSON_SEARCH_URL', 'https://api.navisphere.com'),
      'prod_clientId' => env('CHROBINSON_CLIENT_ID'),
      'prod_clientSecret' => env('CHROBINSON_CLIENT_SECRET'),
    ],
  ],

  'loadboard-crawler' => [
    'search' => [
      'url' => env('LOADBOARD_CRAWLER_URL', ''),
      'url_param' => '/searchLoads/',
    ],
  ],

  'transplace' => [
    'loadboard' => [
      'test_url' => 'https://uatapi.transplace.com',
      'test_clientId' => 'Hdhcz6Q6YGuqLeoPNL9gLmZRKXV6Farf',
      'test_clientSecret' => 'UKRcAGHoSDUABe0x',

      'prod_url' => env('TRANSPLACE_LOADBOARD_URL', 'https://api.transplace.com'),
      'prod_clientId' => env('TRANSPLACE_CLIENT_ID'),
      'prod_clientSecret' => env('TRANSPLACE_CLIENT_SECRET'),
    ],
  ],

  'geoLocationToTimezoneUrl' => env('GEO_LOCATION_TO_TIMEZONE_URL', 'http://localhost:2004/tz/'),

  'googleMapsApi' => env('GOOGLE_MAP_API_KEY', 'AIzaSyD3Srz6dpiK1Pl6CcC9r5ZfVQ9XXCJ6sWs'),

  'rateConUploadUrlKey' => env('RATE_CON_UPLOAD_URL_KEY', '26e1db3e9b103e3b'),

  'openAiApiKey' => env('OPENAI_API_KEY', ''),

  'wex' => [
    'testUrl' => 'https://ws.partner.efsllc.com/axis2/services/CardManagementWS?wsdl',
    'prodUrl' => 'https://ws.efsllc.com/axis2/services/CardManagementWS?wsdl',
  ],

  'authorizeNet' => [
    'dev' => [
      'baseUri' => \net\authorize\api\constants\ANetEnvironment::SANDBOX,
    ],
    'prod' => [
      'baseUri' => \net\authorize\api\constants\ANetEnvironment::PRODUCTION,
    ],
  ],
];

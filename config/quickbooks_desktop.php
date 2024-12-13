<?php

// Account,
use App\Services\Qbd\Account;
use App\Services\Qbd\Customer;
use App\Services\Qbd\Invoice;
use App\Services\Qbd\Item;

use App\Services\Qbd\StandardTerms;

/*
QB_DSN=mysqli://username:password@host/database
QB_LOGLEVEL=QUICKBOOKS_LOG_DEVELOP
QB_MEMLIMIT=512M
QB_SOAPSERVER=QUICKBOOKS_SOAPSERVER_BUILTIN
 */

/**
 * Try to handle an error
 *
 * @param string $requestID
 * @param string $user         This is the username of the connected Web Connector user
 * @param string $action       The action type that experienced an error (i.e. QUICKBOOKS_ADD_CUSTOMER, or QUICKBOOKS_QUERY_CUSTOMER, or etc.)
 * @param string $ID           The $ID value of the record that experienced an error (usually your primary key for this record)
 * @param array $extra
 * @param string $err          If an error occurs **within the error handler**, put an error message here (i.e. if your error handler experienced an internal error), otherwise, leave this NULL
 * @param string $xml
 * @param string $errnum       The error number or error code which occurred
 * @param string $errmsg       The error message received from QuickBooks
 * @return boolean             Return TRUE if the error was handled and you want to continue processing records, or FALSE otherwise
 */

if (!function_exists('my_qbd_error_handler')) {
  function my_qbd_error_handler($requestID, $user, $action, $ID, $extra, &$err, $xml, $errnum, $errmsg) {
    // ...
    return true; // return TRUE if you want the Web Connector to continue to process requests
    // return false;    // return FALSE if you want the Web Connector to stop processing requests and report the error
  }
}

return [
  'qbd_db_conn_def' => env('QBD_DB_CONN_DEF'),
  'qb_log_level' => QUICKBOOKS_LOG_DEVELOP,
  'qb_mem_limit' => '512M',
  'error_map' => [
    '*' => 'my_qbd_error_handler',
  ], // '_quickbooks_error_catchall',
  // 'error_map'     => array(
  //     '*' => array(App\Quickbooks\ErrorHandler::class, '_quickbooks_error_catchall')
  // ),
  'hooks' => [
    /*\QuickBooks_WebConnector_Handlers::HOOK_LOGINSUCCESS => [App\Quickbooks\HooksHandler::class, '_quickbooks_hook_loginsuccess']*/
  ], // An array of callback hooks
  'soap' => [
    'server' => QUICKBOOKS_SOAPSERVER_BUILTIN, // A pure-PHP SOAP server (no PHP ext/soap extension required, also makes debugging easier)
    'options' => [], // See http://www.php.net/soap
  ],
  'handler_options' => [
    'deny_concurrent_logins' => false,
    'deny_reallyfast_logins' => false,
  ], // See the comments in the QuickBooks/Server/Handlers.php file
  'driver_options' => [], // See the comments in the QuickBooks/Driver/<YOUR DRIVER HERE>.php file ( i.e. 'Mysql.php', etc. )
  'callback_options' => [],

  // Map QuickBooks actions to handle functions
  'actions' => [
    QUICKBOOKS_ADD_CUSTOMER => [
      [Customer::class, 'xmlRequestForAdd'],
      [Customer::class, 'xmlResponseForAdd'],
    ],
    QUICKBOOKS_QUERY_CUSTOMER => [
      [Customer::class, 'xmlRequestForQuery'],
      [Customer::class, 'xmlResponseForQuery'],
    ],
    QUICKBOOKS_ADD_ACCOUNT => [
      [Account::class, 'xmlRequestForAdd'],
      [Account::class, 'xmlResponseForAdd'],
    ],
    QUICKBOOKS_QUERY_ACCOUNT => [
      [Account::class, 'xmlRequestForQuery'],
      [Account::class, 'xmlResponseForQuery'],
    ],
    QUICKBOOKS_ADD_STANDARDTERMS => [
      [StandardTerms::class, 'xmlRequestForAdd'],
      [StandardTerms::class, 'xmlResponseForAdd'],
    ],
    QUICKBOOKS_QUERY_STANDARDTERMS => [
      [StandardTerms::class, 'xmlRequestForQuery'],
      [StandardTerms::class, 'xmlResponseForQuery'],
    ],
    QUICKBOOKS_ADD_SERVICEITEM => [
      [Item::class, 'xmlRequestForAdd'],
      [Item::class, 'xmlResponseForAdd'],
    ],
    QUICKBOOKS_QUERY_SERVICEITEM => [
      [Item::class, 'xmlRequestForQuery'],
      [Item::class, 'xmlResponseForQuery'],
    ],
    QUICKBOOKS_ADD_INVOICE => [
      [Invoice::class, 'xmlRequestForAdd'],
      [Invoice::class, 'xmlResponseForAdd'],
    ],
    QUICKBOOKS_MOD_INVOICE => [
      [Invoice::class, 'xmlRequestForMod'],
      [Invoice::class, 'xmlResponseForMod'],
    ],
  ],
];

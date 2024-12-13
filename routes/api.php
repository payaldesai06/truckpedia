<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::namespace('Api')->group(function () {
  // Route::any('/zbu-test', 'ZhaoxingManualImportDataController@test');

  Route::post('/auth/login', 'AuthController@login');
  Route::post('/auth/driver/login', 'DriverAuthController@login');

  Route::post('/auth/register', 'AuthController@register');
  Route::post('/auth/forget-password', 'AuthController@forgetPassword');
  Route::get('/language-labels', 'LanguageLabelController@index');

  Route::get('/timezones', 'TimeZoneController@index');

  Route::post('/waiting-list', 'WaitingListController');

  Route::get('/load-info', 'loadController@getLoadDetailsByPublicUrl')->name('public-load-info');

  /* Load-Matching public access routes */
  Route::prefix('loads-matching')->group(function () {
    Route::get('/public-locate-trucks', 'LoadsMatchingController@publicLocateTrucks');
    Route::get('/public-truck-schedules', 'LoadsMatchingController@publicTruckSchedules');
  });

  // Route::post('/get-new-email-rate-con-upload-url', 'UserUploadFilesController@getNewEmailRateConUploadUrl');

  Route::group(['middleware' => 'auth:api'], function () {
    Route::post('admin/setup-profile', 'AdminCompanyProfileSetupController@setupProfile');
    Route::post('admin/update-profile', 'AdminUpdateProfile@updateProfile');
    Route::post('admin/update-company-profile', 'AdminCompanyProfileSetupController@update');
    Route::post('admin/change-password', 'AdminChangePasswordController@changePassword');

    Route::post('auth/logout', 'AuthController@logout');
    Route::get('auth/user', 'AuthController@authUser');

    Route::prefix('task-automation')->group(function () {
      Route::get('/', 'TaskAutomationController@getTaskAutomation')->name('task-automation');
      Route::patch('/', 'TaskAutomationController@updateTaskAutomation')->name('task-automation.update');
    });

    Route::prefix('pcmiler')->namespace('ExternalRouting')->group(function () {
      Route::get('/api-key', 'PcMilerController@getApiKey');
      Route::post('/api-key', 'PcMilerController@updateOrCreateApiKey');
    });

    Route::prefix('automation')->group(function () {
      Route::get('/get-all-automations', 'AutomationController@getAllAutomations');
      Route::post('/create-automation', 'AutomationController@createAutomation');
      Route::post('/update-automation', 'AutomationController@updateAutomation');
      Route::post('/delete-automation', 'AutomationController@deleteAutomation');
    });

    Route::prefix('customization')->group(function () {
      Route::get('/', 'CustomizationController@getCustomizations');
      Route::middleware('role:admin')->group(function () {
        Route::patch('/', 'CustomizationController@updateCustomizations');
      });
    });

    // Dashboard
    Route::prefix('dashboard')->namespace('Dashboard')->group(function () {
      // Home Tab Statistics Details
      Route::get('/trips/stats', 'TripStatController');
      // Home Tab Trip Revenue and expanse chart
      Route::get('/trips/revenue', 'TripRevenueController');
      // Home Tab get all loads with invoice overdue date
      Route::get('/loads/datatable', 'LoadController@datatable');
    });

    /* New Calendar routes */
    Route::prefix('calendar')->group(function () {
      Route::get('/', 'CalendarController@index');
      // Are we really using this one?
      // Route::post('/share', 'CalendarController@share');
      Route::get('/load-detail', 'CalendarController@loadDetails');
      Route::get('/locate-trucks', 'CalendarController@locateTrucks');
      Route::get('/locate-trucks-drivers', 'CalendarController@locateTrucksDrivers');
    });

    Route::prefix('load-collaborator')->group(function () {
      Route::post('/', 'LoadCollaboratorController@create');
      Route::get('/details/{load_id}', 'LoadCollaboratorController@getByLoadId');
      Route::patch('/{id}', 'LoadCollaboratorController@update');
      Route::delete('/{id}', 'LoadCollaboratorController@delete');
    });

    Route::prefix('locate')->namespace('Locate')->group(function () {
      Route::get('/locate-all', 'LocateAllController@locateAll');
    });

    // Loads matching tab
    Route::prefix('loads-matching')->group(function () {
      Route::get('/locate-trucks', 'LoadsMatchingController@locateTrucks');
      Route::get('/truck-schedules', 'LoadsMatchingController@truckSchedules');
      Route::patch('/truck-reload-destination', 'LoadsMatchingController@updateTruckReloadDestination');
      Route::patch('/truck-deadhead-origin', 'LoadsMatchingController@updateTruckDeadheadOrigin');
      Route::patch('/truck-deadhead-destination', 'LoadsMatchingController@updateTruckDeadheadDestination');
      Route::patch('/truck-target-price', 'LoadsMatchingController@updateTruckTargetPrice');
      Route::patch('/truck-max-weight', 'LoadsMatchingController@updateTruckMaxWeight');
      Route::patch('/truck-reload-date', 'LoadsMatchingController@updateTruckReloadDate');
      Route::get('/create-public-url', 'LoadsMatchingController@createPublicUrl');
    });

    // External load boards for the load matching tab.
    Route::prefix('dat')->namespace('ExternalLoadBoards')->group(function () {
      Route::middleware('role:admin')->group(function () {
        Route::post('/service-account', 'DatController@updateOrCreateServiceAccount');
        Route::delete('/service-account', 'DatController@removeServiceAccount');
      });

      Route::middleware('role:admin|dispatcher')->group(function () {
        Route::get('/connection-status', 'DatController@getConnectionStatus');
        Route::get('/account-details', 'DatController@getDatAccountDetails');
        Route::post('/user-account', 'DatController@updateOrCreateUserAccount');
        Route::delete('/user-account', 'DatController@removeUserAccount');
        Route::post('/search-loads', 'DatController@searchLoads');
        // Route::get('/load-details', 'DatController@getLoadDetails');
      });
    });

    Route::prefix('truckstop')->namespace('ExternalLoadBoards')->group(function () {
      Route::middleware('role:admin|dispatcher')->group(function () {
        Route::get('/integration-id', 'TruckStopController@getIntegrationId');
        Route::post('/integration-id', 'TruckStopController@updateOrCreateIntegrationId');
        Route::delete('/integration-id', 'TruckStopController@removeIntegrationId');
        Route::get('/connection-status', 'TruckStopController@getConnectionStatus');
        Route::post('/search-loads', 'TruckStopController@searchLoads');
      });
    });

    Route::prefix('chrobinson')->namespace('ExternalLoadBoards')->group(function () {
      Route::middleware('role:admin|dispatcher')->group(function () {
        Route::get('/carrier-code', 'CHRobinsonController@getCarrierCode');
        Route::post('/carrier-code', 'CHRobinsonController@updateOrCreateCarrierCode');
        Route::delete('/carrier-code', 'CHRobinsonController@removeCarrierCode');
        Route::get('/connection-status', 'CHRobinsonController@getConnectionStatus');
        Route::post('/search-loads', 'CHRobinsonController@searchLoads');
      });
    });

    Route::prefix('loadboard-crawler')->namespace('ExternalLoadBoards')->group(function () {
      Route::middleware('role:admin|dispatcher')->group(function () {
        Route::post('/search-loads', 'LoadBoardCrawlerController@searchLoads');
      });
    });

    Route::get('/pipeline', 'PipelineController@loadsEagerLoading');

    Route::prefix('spreadsheet')->group(function () {
      Route::get('/get-spreadsheet-list', 'SpreadsheetController@getSpreadsheetList');
      Route::post('/get-spreadsheet', 'SpreadsheetController@getSpreadsheet');
      Route::post('/create-spreadsheet', 'SpreadsheetController@createSpreadsheet');
      Route::patch('/modify-spreadsheet-name', 'SpreadsheetController@modifySpreadsheetName');
      Route::patch('/add-column', 'SpreadsheetController@addColumnOnSpreadsheet');
      Route::patch('/add-multiple-columns', 'SpreadsheetController@addMultipleColumns');
      Route::patch('/update-cell-value', 'SpreadsheetController@updateCellValue');
      Route::patch('/modify-sheet-name', 'SpreadsheetController@modifySheetName');
      Route::patch('/add-sheet', 'SpreadsheetController@addSheet');
      Route::patch('/modify-sheet-filter', 'SpreadsheetController@modifySheetFilter');
      Route::get('/access-details', 'SpreadsheetController@accessDetails');
      Route::patch('/update-access-level', 'SpreadsheetController@updateAccessLevel');
      Route::get('/get-created-custom-columns', 'SpreadsheetController@getCreatedCustomColumns');
      Route::post('/delete-spreadsheet', 'SpreadsheetController@deleteSpreadsheet');
      Route::post('/delete-sheet', 'SpreadsheetController@deleteSheet');
      Route::post('/delete-column', 'SpreadsheetController@deleteColumn');
      Route::patch('/change-column-order', 'SpreadsheetController@changeColumnOrder');
      Route::patch('/update-row-height', 'SpreadsheetController@updateRowHeight');
      Route::patch('/update-column-width', 'SpreadsheetController@updateColumnWidth');
      Route::patch('/update-sort-schema', 'SpreadsheetController@updateSortSchema');
      Route::patch('/update-color-schema', 'SpreadsheetController@updateColorSchema');
      Route::patch('/update-sheet-multiple-rows-format', 'SpreadsheetController@updateSheetMultipleRowFormat');
    });

    /**
     * Trucks Routes
     */
    Route::prefix('trucks')->group(function () {
      Route::get('/', 'TrucksController@index');
      Route::get('/datatable', 'TrucksController@datatable');
      Route::post('/', 'TrucksController@store');
      Route::patch('/{truck}', 'TrucksController@update');
      Route::delete('/{truck}', 'TrucksController@destroy');
      Route::patch('/{truck}/change-status', 'TruckChangeStatusController');
      Route::get('/search', 'TrucksController@search');
    });

    /**
     * Trailers Routes
     */
    Route::prefix('trailers')->group(function () {
      Route::get('/', 'TrailerController@index');
      Route::post('/', 'TrailerController@store');
      Route::get('/datatable', 'TrailerController@datatable');
      Route::patch('/{trailer}', 'TrailerController@update');
      Route::delete('/{trailer}', 'TrailerController@destroy');
      Route::patch('/{trailer}/change-status', 'TrailerChangeStatusController');
      Route::get('/search', 'TrailerController@search');
    });

    Route::get('/customers/datatable', 'CustomerController@datatable');
    Route::get('/customers', 'CustomerController@index');
    Route::get('/customers/get/{id}', 'CustomerController@getCustomer');
    Route::post('/customers', 'CustomerController@store');
    Route::patch('/customers/{customer}', 'CustomerController@update');
    Route::delete('/customers/{customer}', 'CustomerController@destroy');

    Route::prefix('saved-address')->group(function () {
      Route::get('/datatable', 'SavedAddressesController@datatable');
      Route::post('/', 'SavedAddressesController@create');
      Route::patch('/{id}', 'SavedAddressesController@update');
      Route::get('/search/{name}', 'SavedAddressesController@search');
      Route::delete('/{id}', 'SavedAddressesController@delete');
    });

    Route::get('/shippers/datatable', 'ShipperController@datatable');
    Route::post('/shippers', 'ShipperController@store');
    Route::patch('/shippers/{shipper}', 'ShipperController@update');
    Route::delete('/shippers/{shipper}', 'ShipperController@destroy');

    Route::get('/receivers/datatable', 'ReceiverController@datatable');
    Route::post('/receivers', 'ReceiverController@store');
    Route::patch('/receivers/{receiver}', 'ReceiverController@update');
    Route::delete('/receivers/{receiver}', 'ReceiverController@destroy');

    Route::prefix('company-users')->group(function () {
      Route::get('/datatable', 'CompanyUserController@datatable');
      Route::post('/', 'CompanyUserController@store');
      Route::patch('/{user}', 'CompanyUserController@update');
      Route::delete('/{user}', 'CompanyUserController@destroy');
      Route::patch('/{user}/change-status', 'CompanyUserChangeStatusController');
      Route::get('/get-current-user-tag-ids', 'CompanyUserController@getCurrentUserTagIds');
    });

    Route::prefix('/tag')->group(function () {
      Route::get('/', 'TagController@index');
      Route::post('/', 'TagController@create');
      Route::get('/{tag_id}', 'TagController@getById');
      Route::patch('/{tag_id}', 'TagController@update');
    });

    Route::prefix('referral')->group(function () {
      Route::get('/get-referral-link', 'ReferralController@getReferralLink');
      Route::post('/submit-referral', 'ReferralController@submitReferral');
    });

    /**
     * Drivers Routes
     */
    Route::prefix('drivers')->group(function () {
      Route::get('/', 'DriverController@index');
      Route::post('/', 'DriverController@store');
      Route::get('/datatable', 'DriverController@datatable');
      Route::middleware('role:admin|dispatcher')->group(function () {
        Route::patch('/{driver}', 'DriverController@update');
        Route::patch('/{driver}/change-status', 'DriverController@changeStatus');
      });
      Route::get('/{driver}/current-truck-trailer', 'DriverController@currentTruckTrailer');
      Route::patch('/{driver}/update-current-truck-trailer', 'DriverController@updateCurrentTruckTrailer');
    });

    Route::delete('/driver-files/{driverfile}', 'DriverFileController@destroy');

    Route::get('/driver-pays/datatable', 'DriverPayController@datatable');

    Route::get('/dispacher', 'DispacherController@index');

    Route::get('/accessorial-fees', 'AccessorialFeeController@index');
    Route::post('/accessorial-fees', 'AccessorialFeeController@store');

    Route::get('/accessorial-deductions', 'AccessorialDeductionController@index');
    Route::post('/accessorial-deductions', 'AccessorialDeductionController@store');

    Route::post('/rate-confirmations/s3-image', 'RateConfirmationS3Controller');

    Route::prefix('loads')->group(function () {
      Route::middleware('role:admin|dispatcher')->group(function () {
        Route::get('/unique-id', 'loadController@loadUniqeId');
        Route::get('/unique-id/{tag_id}', 'loadController@loadUniqeId');
        //Route::get('/{load}', 'loadController@showEagerLoading');
        Route::post('/', 'loadController@store');
        Route::patch('/{load}', 'loadController@update');
        Route::delete('/{load}', 'loadController@destroy');
        Route::post('/{load}/restore', 'loadController@restore'); // restore deleted load
        Route::patch('/{load}/update-status', 'loadController@updateLoadStatus');
        Route::patch('/{load}/update-dispatcher-notes', 'loadController@updateDispatcherNotes');
        Route::patch('/{load}/change-access', 'loadController@changeLoadAccess');
        Route::post('/{load}/invoices', 'LoadInvoiceController@store'); // Generate Invoice
        Route::post('/generate-mass-invoice', 'LoadInvoiceController@generateMassInvoice');
        // For QuickBooks Online
        Route::post('/{load}/sync-to-quickbooks', 'QuickbooksAuthController@syncToQuickbooks');
        // For QuickBooks Desktop
        Route::post('/{load}/sync-to-qbd', 'QbdController@syncToQbd');
        Route::post('/sync-mass-invoice-to-qbd', 'QbdController@syncMassInvoiceToQbd');

        Route::post('/{load}/payments', 'LoadPaymentController@store'); // Request for payment
        Route::post('/request-mass-invoice-payment', 'LoadPaymentController@requestMassInvoicePayment');
        Route::patch('/{load}/payments', 'LoadPaymentController@update'); // Payment Received
        Route::post('/multiple-loads-payment-received', 'LoadPaymentController@multipleLoadsPaymentReceived');

        Route::get('/{load}/create-public-url', 'loadController@createPublicUrl');
        Route::put('/{load}/update-commission-details', 'loadController@updateCommissionDetails');
        Route::post('/{load_id}/restore-canceled', 'loadController@restoreCanceledLoad'); // restore canceled load
        Route::post('/{load_id}/cancel-load', 'loadController@cancelLoad');
      });
      Route::get('/get-pod-url', 'loadController@getLoadPodUrl');
      // Dispatch -> List page
      Route::get('/datatable', 'loadController@datatableEagerLoading');
      Route::get('/{load}', 'loadController@show');
    });

    Route::post('/driver-loads/{driverLoad}/trailer-picked-up', 'DriverLoadTrailerPickupController');

    Route::get('/expense-types/datatable', 'ExpenseTypeController@datatable');
    Route::post('/expense-types', 'ExpenseTypeController@store');
    Route::patch('/expense-types/{expenseType}', 'ExpenseTypeController@update');

    Route::prefix('maintenances')->group(function () {
      Route::get('/datatable', 'MaintenanceController@datatable');
      Route::get('/{maintenance}', 'MaintenanceController@getMaintenanceDetails');
      Route::post('/', 'MaintenanceController@store');
      Route::patch('/{maintenance}', 'MaintenanceController@update');
    });

    // Admin upload Invoice in Edit Load
    Route::post('/admin/loads/{load}/invoices', 'AdminLoadInvoiceController@store');

    // Admin upload POD and Driver Images in Edit Load
    Route::post('/admin/loads/{load}/documents', 'AdminLoadDocumentController@store');
    Route::delete('/admin/loads/{load}/documents/{document}', 'AdminLoadDocumentController@destroy');

    // Admin upload Rate Confirmation in Edit Load
    Route::post('/admin/loads/{load}/rate-confirmations', 'AdminLoadRateConfirmationController@store');
    Route::delete('/admin/loads/{load}/rate-confirmations/{rateConfirmation}', 'AdminLoadRateConfirmationController@destroy');

    // Admin upload third party carrier invoice in Edit Load
    Route::post('/admin/loads/{load}/thirdPartyCarrierInvoice', 'AdminLoadDocumentController@storeThirdPartyCarrierInvoice');
    Route::delete('/admin/loads/{load}/thirdPartyCarrierInvoice', 'AdminLoadDocumentController@destroyThirdPartyCarrierInvoice');

    /*
     * REPORTS
     */
    Route::prefix('reports')->namespace('Reports')->group(function () {
      Route::get('/customer-revenue/datatable', 'CustomerRevenueReportController@datatable');
      Route::post('/dispatcher-commission/datatable', 'DispatcherCommissionReportController@datatable');
      Route::post('/dispatcher-sales-revenue/datatable', 'DispatcherSalesRevenueReportController@datatable');
      Route::get('/driver-payment/datatable', 'DriverPaymentReportController@datatable');
      Route::get('/trip-revenue/datatable', 'TripRevenueReportController@datatable');
      Route::get('/equipment-maintenance/datatable', 'EquipmentMaintenanceReportController@datatable');
      Route::get('/equipment-list/datatable', 'EquipmentListReportController@datatable');
      Route::get('/drop-trailers/datatable', 'DropTrailerReportController@datatable');
      Route::get('/load-driver-report/datatable', 'LoadDriverReportController@datatable');
    });

    // Factorying Company
    Route::prefix('factoring-companies')->group(function () {
      Route::get('/', 'FactoringCompanyController@index')->name('factoring-companies.index');
      Route::post('/', 'FactoringCompanyController@store')->name('factoring-companies.store');
      Route::get('/{id}', 'FactoringCompanyController@show')->name('factoring-companies.show');
      Route::patch('/{id}', 'FactoringCompanyController@update')->name('factoring-companies.update');
      Route::delete('/{id}', 'FactoringCompanyController@delete')->name('factoring-companies.delete');
    });

    // QuickBooks Online
    Route::get('/quickbooks/connection-status-all', 'QuickbooksAuthController@connectionStatusAll');
    Route::get('/quickbooks/connection-status', 'QuickbooksAuthController@connectionStatus');
    Route::get('/quickbooks/connection-status/{tag_id}', 'QuickbooksAuthController@connectionStatus');
    Route::post('/quickbooks/connect', 'QuickbooksAuthController@connectToQuickbooks');
    Route::delete('/quickbooks/disconnect/{tag_id}', 'QuickbooksAuthController@disconnectToQuickbooks');
    Route::delete('/quickbooks/disconnect', 'QuickbooksAuthController@disconnectToQuickbooks');
    Route::get('/quickbooks/auth_callback', 'QuickbooksAuthController@processQuickbooksResponse');
    //Route::post('/quickbooks/auth_callback', 'QuickbooksAuthController@processQuickbooksResponse');

    // QuickBooks Desktop
    Route::get('/qbd/connection-status-all', 'QbdController@connectionStatusAll');
    Route::get('/qbd/connection-status', 'QbdController@connectionStatus');
    Route::get('/qbd/connection-status/{tag_id}', 'QbdController@connectionStatus');
    Route::post('/qbd/connect', 'QbdController@generateQWC');
    Route::delete('/qbd/disconnect/{tag_id}', 'QbdController@disconnect');
    Route::delete('/qbd/disconnect', 'QbdController@disconnect');

    /**
     * API Route
     * Samsara Integration route
     */
    Route::prefix('samsara')->namespace('Samsara')->group(function () {
      Route::get('/connection-status', 'SamsaraAuthController@connectionStatus');
      Route::get('/connect', 'SamsaraAuthController@connectToSamsara');
      Route::delete('/disconnect', 'SamsaraAuthController@disconnectToSamsara');
      Route::get('/auth_callback', 'SamsaraAuthController@processSamsaraResponse');
    });

    /**
     * Keep Truckin Integration
     */
    Route::prefix('keepTruckin')->namespace('KeepTruckin')->group(function () {
      Route::get('/connection-status', 'KeepTruckinAuthController@connectionStatus');
      Route::get('/connect', 'KeepTruckinAuthController@connectToKeepTruckin');
      Route::delete('/disconnect', 'KeepTruckinAuthController@disconnectToKeepTruckin');
      Route::get('/auth_callback', 'KeepTruckinAuthController@processKeepTruckinResponse');
    });

    /*
     * MOBILE API START
     */

    Route::post('/save-fcm-token', 'UserController@updateFcmToken');

    Route::prefix('driver-loads')->group(function () {
      Route::middleware('role:driver')->group(function () {
        Route::get('/', 'DriverLoadController@index');
        Route::patch('/{driverLoad}/accepted', 'DriverLoadController@accepted');
        Route::patch('/{driverLoad}/load-started', 'DriverLoadController@loadStarted');

        Route::patch('/{driverLoad}/from-arrived', 'DriverLoadController@fromArrived');
        Route::patch('/{driverLoad}/from-loaded', 'DriverLoadController@fromLoaded');

        Route::patch('/{driverLoad}/to-arrived', 'DriverLoadController@toArrived');
        Route::patch('/{driverLoad}/to-unloaded', 'DriverLoadController@toUnloaded');

        Route::patch('/{driverLoad}/end-load', 'DriverLoadController@endLoad');
        Route::patch('/{driverLoad}/handed-over', 'DriverLoadController@handedOver');

        Route::get('/get-available-leg-loads', 'DriverLoadController@getAvailableLegLoads');
        Route::post('/pickup-leg-load', 'DriverLoadController@pickupLegLoad');

        // The following two to be removed in future.
        Route::patch('/{driverLoad}/pick-up', 'DriverLoadController@pickUp');
        Route::patch('/{driverLoad}/delivered', 'DriverLoadController@delivered');
      });
      Route::post('/load-images/get-upload-urls', 'DriverLoadController@getUploadUrls');
    });

    //a Load images
    Route::post('/driver-loads/{driverLoad}/load-images/pick-up', 'LoadPickedUpImageController');
    Route::post('/driver-loads/{driverLoad}/load-images/load-deliver', 'LoadDeliveredImageController');
    Route::post('/driver-loads/{driverLoad}/load-images/proof-of-delivery', 'LoadProofOfDeliveryImageController');
    Route::post('/driver-loads/{driverLoad}/load-images/bol', 'LoadBolImageController');
    Route::post('/driver-loads/{driverLoad}/load-images/others', 'LoadOtherImageController');
    /* Sample payload:
    { images: [
      { imageName: 'load-bol-36-68353-80032-0-20240104-195331-402614945-SsiiEIlGsa9gvQaO.jpeg' },
      { imageName: 'load-bol-36-68353-80032-1-20240104-195331-406504886-KXd1ftaCr4Ya1WoD.jpeg' }
      ]
    }
    */

    Route::delete('/loads/{load}/load-images/{loadImage}', 'LoadImagesController@destroy');

    Route::patch('/drivers/{driver}/location', 'DriverController@locationUpdate');

    Route::get('/co-drivers', 'CoDriverController@index');

    Route::get('/trips/in-progress ', 'TripController@tripInProgress');
    Route::get('/trips/paid ', 'TripController@tripPaid');
    Route::post('/trips', 'TripController@store');
    Route::patch('/trips/{trip}', 'TripController@update');
    Route::patch('/trips/{trip}/payment-request', 'TripController@paymentRequest');

    Route::get('/expense-types', 'ExpenseTypeController@index');

    Route::get('/trips/{trip}/expense', 'TripExpenseController@index');
    Route::post('/trip-expenses', 'TripExpenseController@store');
    Route::patch('/trip-expenses/{tripExpenses}', 'TripExpenseController@update');
    Route::delete('/trip-expenses/{tripExpenses}', 'TripExpenseController@destroy');

    Route::get('/trips/{trip}/load', 'TripLoadController@index');

    Route::get('/language-labels/datatable', 'LanguageLabelController@datatable');
    Route::post('/language-labels', 'LanguageLabelController@store');
    Route::patch('/language-labels/{languageLabel}', 'LanguageLabelController@update');
    Route::delete('/language-labels/{languageLabel}', 'LanguageLabelController@destroy');

    /*
     * MOBILE API END
     */

    Route::post('/card', 'StripeCardController@cardCreate');
    Route::get('/card', 'StripeCardController@cardShow');
    Route::delete('/card', 'StripeCardController@cardDelete');

    Route::get('/transactions/datatable', 'TransactionController@datatable');

    Route::post('/subscriptions/active', 'SubscriptionController@subscriptionPlaneActive');
    Route::post('/subscriptions/cancel', 'SubscriptionController@subscriptionPlaneCancel');
    Route::patch('/subscriptions/{subscription}/manual', 'SubscriptionController@manualSubscription');

    Route::get('/trips/{trip}', 'TripController@show');
    Route::patch('/trips/{trip}/payment', 'TripController@tripPayment');

    //crone
    Route::get('/upgrade-plan', 'SubscriptionController@upgradePlan');

    //stripe demo customer
    // Route::post('/customer', 'StripeController@customerCreate');

    //super admin api start

    Route::prefix('super-admin')->middleware('role:super_admin')
      ->namespace('SuperAdmin')->group(function () {
        Route::prefix('admin-company-details')->group(function () {
          Route::get('/datatable', 'AdminCompanyDetailController@datatable');
          Route::get('/{adminCompanyDetails}', 'AdminCompanyDetailController@show');
          Route::patch('/{adminCompanyDetails}/extend-trial', 'AdminCompanyDetailController@extendTrial');
          Route::get('/{adminCompanyDetails}/admins', 'AdminCompanyDetailController@companyAdmins');
          Route::get('/{adminCompanyDetails}/dispatchers', 'AdminCompanyDetailController@companyDispatchers');
          Route::get('/{adminCompanyDetails}/drivers', 'AdminCompanyDetailController@companyDrivers');
          Route::get('/{adminCompanyDetails}/trucks', 'AdminCompanyDetailController@companyTrucks');
          Route::get('/{adminCompanyDetails}/trailers', 'AdminCompanyDetailController@companyTrailers');
          Route::get('/{adminCompanyDetails}/loads', 'AdminCompanyDetailController@companyLoads');
          Route::patch('/{adminCompanyDetails}/update-monthly-fees', 'AdminCompanyDetailController@updateMonthlyFees');
          Route::patch('/{adminCompanyDetails}/update-trial-valid-till', 'AdminCompanyDetailController@updateCompanyTrial');
          Route::patch('/{adminCompanyDetails}/update-feature-access', 'AdminCompanyDetailController@updateCompanyFeatureAccess');
          Route::post('/{adminCompanyDetails}/users', 'AdminCompanyDetailController@createCompanyAdminUser');
        });
        Route::get('/payment-history/datatable', 'PaymentHistoryController@datatable');
        Route::get('/users/datatable', 'RegisteredUserController@datatable');
      });

    //super admin api end

    // New APIs from 2022-11-09.
    Route::prefix('/vehicle-v2')->group(function () {
      Route::get('/all-vehicles', 'VehicleV2Controller@getAllVehicles');
      Route::post('/get-all-vehicles', 'VehicleV2Controller@getAllVehiclesV2');
    });

    Route::prefix('company-users-v2')->group(function () {
      Route::get('/all-users', 'CompanyUserController@getAllUsersV2');
      Route::post('/get-all-drivers', 'CompanyUserController@getAllDriversV2');
      Route::post('/get-all-website-users-except-current-user', 'CompanyUserController@getAllWebsiteUsersExceptCurrentUserV2');
    });

    Route::prefix('maintenance-v2')->group(function () {
      Route::post('/create-issue', 'MaintenanceV2IssueController@createMaintenanceIssue');
      Route::get('/get-issue-list', 'MaintenanceV2IssueController@getMaintenanceIssueList');
      Route::post('/get-issue-attachments-upload-urls', 'MaintenanceV2IssueController@getIssueAttachmentsUploadUrls');
      Route::get('/get-issue/{id}', 'MaintenanceV2IssueController@getMaintenanceIssueDetails');
      Route::delete('/delete-issue', 'MaintenanceV2IssueController@deleteMaintenanceIssue');
      Route::patch('/update-issue', 'MaintenanceV2IssueController@updateMaintenanceIssue');
      Route::post('/get-vehicle-issue-list', 'MaintenanceV2IssueController@getVehicleMaintenanceIssueList');
      Route::patch('/change-issue-status', 'MaintenanceV2IssueController@changeMaintenanceIssueStatus');
      Route::get('/serviceTypes', 'MaintenanceV2ServiceTypeController@index');
      Route::post('/serviceTypes', 'MaintenanceV2ServiceTypeController@create');
    });

    Route::prefix('authorize-net')->namespace('AuthorizeNet')->group(function () {
      Route::post('connect', 'AuthorizeNetController@connect');
      Route::get('connectionStatus', 'AuthorizeNetController@getConnectionStatus');
      Route::get('getKey', 'AuthorizeNetController@getKey');
    });

    Route::prefix('v2')->group(function () {
      Route::prefix('trailers')->group(function () {
        Route::post('/get-list', 'TrailerController@getListTrailerV2');
        Route::post('/create', 'TrailerController@createTrailerV2');
        Route::get('/get/{id}', 'TrailerController@getTrailerV2');
        Route::patch('/edit', 'TrailerController@updateTrailerV2');
        Route::post('/get-log-list', 'TrailerController@getTrailerLogList');
        Route::prefix('folders')->group(function () {
          Route::get('/', 'TrailerController@getTrailerV2Folders');
          Route::post('/create', 'TrailerController@createTrailerV2Folder');
          Route::patch('/edit', 'TrailerController@updateTrailerV2Folder');
        });
        Route::get('/{id}/files', 'TrailerController@getTrailerV2Files');
        Route::prefix('files')->group(function () {
          Route::post('/create', 'TrailerController@createTrailerV2File');
          Route::delete('/', 'TrailerController@deleteTrailerV2File');
          Route::post('/get-upload-urls', 'TrailerController@getUploadUrls');
          Route::patch('/change-folder', 'TrailerController@changeTrailerV2FilesFolder');
        });
        Route::post('/get-maintenance-issue-list', 'TrailerController@getMaintenanceIssueList');
      });
      Route::prefix('trucks')->group(function () {
        Route::post('/get-list', 'TrucksController@getListTruckV2');
        Route::post('/create', 'TrucksController@createTruckV2');
        Route::patch('/edit', 'TrucksController@updateTruckV2');
        Route::get('/folders', 'TrucksController@getTruckv2Folders');
        Route::get('/{id}/files', 'TrucksController@getTruckV2Files');
        Route::delete('/files', 'TrucksController@deleteTruckV2Files');
        Route::prefix('files')->group(function () {
          Route::post('/create', 'TrucksController@createTruckV2File');
          Route::post('/get-upload-urls', 'TrucksController@getUploadUrls');
          Route::patch('/change-folder', 'TrucksController@changeTruckV2FilesFolder');
        });
        Route::get('/get/{id}', 'TrucksController@getTruckV2ById');
        Route::prefix('folders')->group(function () {
          Route::post('/create', 'TrucksController@createTruckFolder');
          Route::patch('/edit', 'TrucksController@updateTruckFolder');
        });
        Route::post('/get-maintenance-issue-list', 'TrucksController@getMaintenanceIssueList');
        Route::post('/get-log-list', 'TrucksController@getTruckLogList');
      });
      Route::prefix('drivers')->group(function () {
        Route::post('get-all-driver-with-assigned-vehicles', 'DriverController@getAllDriverWithAssignedVehicles');
        Route::post('create', 'DriverController@createDriverV2');
        Route::get('get/{id}', 'DriverController@getDriverById');
        Route::post('get-list', 'DriverController@getDriverListV2');
        Route::patch('edit', 'DriverController@updateDriverV2');

        Route::prefix('folders')->group(function () {
          Route::get('/', 'DriverController@getDriverFoldersV2');
          Route::post('create', 'DriverController@createDriverFoldersV2');
          Route::patch('edit', 'DriverController@updateDriverFoldersV2');
        });

        Route::get('{id}/files', 'DriverController@getDriverFilesV2');
        Route::prefix('files')->group(function () {
          Route::post('get-upload-urls', 'DriverController@getDriverFileUploadUrlV2');
          Route::post('create', 'DriverController@createDriverFilesV2');
          Route::delete('/', 'DriverController@deleteDriverFilesV2');
          Route::patch('/change-folder', 'DriverController@changeDriverV2FilesFolder');
        });

        Route::patch('edit-accounting-info', 'DriverController@updateDriverAccountingInfoV2');
        Route::get('{id}/get-accounting-info', 'DriverController@getDriverAccountingInfoV2');
        Route::post('getAllDriverTruckTrailerForLoadDriver', 'DriverController@getAllDriverTruckTrailerForLoadDriver');
      });

      Route::prefix('fc')->namespace('FullyCustomized')->group(function () {
        Route::prefix('menu')->group(function () {
          Route::get('get-menus', 'FcMenuController@index');
          Route::post('create-menu', 'FcMenuController@store');
          Route::patch('change-menu', 'FcMenuController@update');
          Route::delete('delete-menu', 'FcMenuController@destroy');
          Route::get('{menuId}/get-submenus', 'FcSubmenuController@index');
          Route::get('{menuId}/menu-shared-permissions', 'FcMenuController@getSharedPermissions');
          Route::patch('change-menu-shared-permissions', 'FcMenuController@updateSharedPermissions');
          Route::post('create-submenu', 'FcSubmenuController@store');
          Route::get('{submenuId}/submenu-shared-permissions', 'FcSubmenuController@getSharedPermissions');
          Route::patch('change-submenu-shared-permissions', 'FcSubmenuController@updateSharedPermissions');
          Route::patch('change-submenu', 'FcSubmenuController@update');
          Route::get('{submenuId}/get-views', 'FcViewController@index');
        });
        Route::prefix('view')->group(function () {
          Route::post('create-view', 'FcViewController@store');
          Route::patch('change-view', 'FcViewController@update');
          Route::post('get-view', 'FcViewController@show');
        });
        Route::prefix('data')->group(function () {
          Route::post('create-custom-fields', 'FcCustomFieldController@store');
          Route::patch('change-custom-field', 'FcCustomFieldController@update');
          Route::post('get-custom-fields', 'FcCustomFieldController@index');
          Route::post('get-record', 'FcCustomRecordController@show');
          Route::post('create-new-record', 'FcCustomRecordController@store');
          Route::patch('update-fields-values', 'FcCustomRecordController@update');
          Route::delete('delete-record', 'FcCustomRecordController@destroy');
          Route::delete('delete-custom-field', 'FcCustomFieldController@destroy');
          Route::prefix('fields')->group(function () {
            Route::post("rollup/get-possible-targets", "FcRollupController@getPossibleTargets");
            Route::post("recordLink/get-possible-target-records", "FcRecordLinkController@getPossibleTargetRecords");
          });
          Route::prefix('files')->group(function () {
            Route::post('get-upload-urls', 'FcCustomDataFileController@getPresignedUrl');
            Route::post('create', 'FcCustomDataFileController@store');
            Route::delete('/', 'FcCustomDataFileController@destroy');
          });
        });
      });
      Route::prefix('customers')->group(function () {
        Route::prefix('folders')->group(function () {
          Route::get('/', 'CustomerController@getCustomerV2Folders');
          Route::post('/create', 'CustomerController@createCustomerV2Folder');
          Route::patch('/edit', 'CustomerController@updateCustomerV2Folder');
        });
        Route::prefix('files')->group(function () {
          Route::post('get-upload-urls', 'CustomerController@getCustomerV2FileUploadUrl');
          Route::post('create', 'CustomerController@createCustomerV2Files');
          Route::delete('/', 'CustomerController@deleteCustomerV2File');
          Route::patch('/change-folder', 'CustomerController@changeCustomerV2FilesFolder');
        });
        Route::get('{id}/files', 'CustomerController@getCustomerV2Files');
      });
      Route::prefix('trips')->group(function () {
        Route::middleware('role:admin|dispatcher')->group(function () {
          Route::post('create-trip', 'TripV2Controller@createTripV2');
          Route::post('get-loads-for-planning', 'TripV2Controller@getLoadsForPlanning');
          Route::post('get-trips', 'TripV2Controller@getTripsV2');
          Route::patch('load/updatePreTripDriverPay', 'TripV2Controller@updatePreTripDriverPay');
          Route::get('/{tripId}', 'TripV2Controller@getTripById');
          Route::patch('approve-trip', 'TripV2Controller@approveTripV2');
          Route::patch('changeStatus', 'TripV2Controller@changeTripV2Status');
          Route::delete('/{tripId}', 'TripV2Controller@deleteTripV2');
          Route::prefix('files')->group(function () {
            Route::post('get-upload-urls', 'TripV2FileController@getPresignedUrl');
            Route::post('create', 'TripV2FileController@store');
            Route::delete('/', 'TripV2FileController@destroy');
          });
          Route::prefix('custom-payment-field')->group(function () {
            Route::post('create', 'TripV2Controller@createTripV2CustomPaymentField');
            Route::get('get-fields', 'TripV2Controller@getTripV2CustomPaymentFields');
          });
        });
        Route::prefix('load')->group(function () {
          Route::post('getDriverPay', 'TripV2Controller@getDriverPay');
        });

        // Driver can start and end a trip.
        Route::middleware('role:driver')->group(function () {
          Route::prefix('sheets')->group(function () {
            Route::post('create', 'TripV2Controller@createTripSheet');
            Route::post('end', 'TripV2Controller@endTripSheet');
            Route::post('getList', 'TripV2Controller@getTripSheetList');
          });
        });
      });
      Route::prefix('invoices')->group(function () {
        Route::post('create', 'InvoiceV2Controller@createInvoice');
        Route::patch('edit', 'InvoiceV2Controller@updateInvoice');
        Route::post('mark-as-paid', 'InvoiceV2Controller@markPaid');
        Route::post('/get-list', 'InvoiceV2Controller@getInvoiceList');
        Route::get('get-next-invoice-number', 'InvoiceV2Controller@getNextInvoiceNumber');
        Route::get('/{invoiceId}', 'InvoiceV2Controller@getInvoice');
        Route::post('/request-payment', 'InvoiceV2Controller@requestPayment');
        Route::delete('delete', 'InvoiceV2Controller@deleteInvoice');
        Route::prefix('custom-payment-field')->group(function () {
          Route::post('create', 'InvoiceV2Controller@createInvoiceV2CustomPaymentField');
          Route::get('get-fields', 'InvoiceV2Controller@getInvoiceV2CustomPaymentFields');
        });
      });

      Route::prefix('planning')->namespace('Planning')->group(function () {
        Route::prefix('timeline')->group(function () {
          Route::post('setCustomization', 'PlanningController@setCustomization');
        });
        Route::prefix('driver-time-off-calendar')->group(function () {
          Route::post('create', 'DriverTimeOffCalendarController@createDriverTimeOffCalendar');
          Route::patch('edit', 'DriverTimeOffCalendarController@updateDriverTimeOffCalendar');
          Route::delete('/delete', 'DriverTimeOffCalendarController@deleteDriverTimeOffCalendar');
          Route::post('/get-list', 'DriverTimeOffCalendarController@getDriverTimeOffCalendarList');
        });
        Route::post('get-timeline', 'PlanningController@getTimeline');
        Route::prefix('schedules')->group(function () {
          Route::post('create', 'SchedulesController@create');
          Route::patch('edit', 'SchedulesController@edit');
          Route::patch('batch-update', 'SchedulesController@batchUpdate');
          Route::delete('delete', 'SchedulesController@destroy');
        });
        Route::prefix('frequent-lanes')->group(function () {
          Route::post('create', 'FrequentLaneController@createFrequentLane');
          Route::get('/{id}', 'FrequentLaneController@getFrequentLane');
          Route::patch('edit', 'FrequentLaneController@updateFrequentLane');
          Route::post('/get-all', 'FrequentLaneController@getFrequentLaneAll');
          Route::post('/get-list', 'FrequentLaneController@getFrequentLaneList');
        });
      });

      Route::prefix('driver-pay-templates')->group(function () {
        Route::post('create', 'DriverPayTemplateController@createDriverPayTemplate');
        Route::patch('edit', 'DriverPayTemplateController@updateDriverPayTemplate');
        Route::get('/{id}', 'DriverPayTemplateController@getDriverPayTemplateById');
        Route::post('/get-templates', 'DriverPayTemplateController@getTemplates');
        Route::post('/get-all-templates', 'DriverPayTemplateController@getAllTemplates');

        Route::prefix('custom-fields')->group(function () {
          Route::post('create', 'DriverPayTemplatesCustomFieldsController@createCustomFields');
          Route::patch('edit', 'DriverPayTemplatesCustomFieldsController@updateCustomFields');
          Route::get('get-all-fields', 'DriverPayTemplatesCustomFieldsController@getAllCustomFields');
        });
      });

      Route::prefix('company')->group(function () {
        Route::prefix('file')->group(function () {
          Route::post('/get-upload-url', 'AdminCompanyProfileSetupController@getCompanyFileUploadUrl');
        });
      });

      Route::prefix('tag')->group(function () {
        Route::prefix('file')->group(function () {
          Route::post('/get-upload-url', 'TagController@getUploadUrl');
        });
      });

      Route::prefix('user')->group(function () {
        Route::prefix('file')->group(function () {
          Route::post('/get-upload-url', 'AdminUpdateProfile@getUserFileUploadUrl');
        });
      });

      Route::prefix('load')->group(function () {
        Route::prefix('pipeline')->group(function () {
          // Dispatch -> Pipeline API.
          Route::post('get', 'PipelineController@getLoadPipeline');
          Route::post('setCustomization', 'PipelineController@setCustomization');
        });

        Route::prefix('list')->group(function () {
          Route::post('setCustomization', 'loadController@setListCustomization');
        });
        Route::prefix('files')->group(function () {
          Route::post('/get-upload-urls', 'loadController@getLoadFileUploadUrls');
        });
        Route::post('extractLoadTenderDataFromTxt', 'loadController@extractLoadTenderDataFromTxt');
        Route::prefix('customized')->group(function () {
          Route::post('mergeLoad', 'loadController@mergeLoad');
        });
        Route::post('trackLoadTrucks', 'loadController@trackLoadTrucks');
        Route::delete('batchDelete', 'loadController@batchDelete')
          ->middleware('role:admin|dispatcher');
        Route::patch('updateSelectFields', 'loadController@updateSelectFields');
        Route::prefix('thirdPartyCarrier')->group(function () {
          Route::patch('invoice/status', 'loadController@updateThirdPartyCarrierInvoiceStatus');
        });
      });

      Route::prefix('driverLoads')->group(function () {
        Route::middleware('role:driver')->group(function () {
          Route::post('dropTrailer', 'DriverLoadController@dropTrailer');
          Route::post('hookTrailer', 'DriverLoadController@hookTrailer');
          Route::patch('updateLoad', 'DriverLoadController@updateLoad');
          Route::patch('updateTruckTrailer', 'DriverLoadController@updateTruckTrailer');
        });
      });

      Route::prefix('savedEquipmentTypes')->group(function () {
        Route::post('getList', 'SavedEquipmentTypeController@getList');
        Route::post('create', 'SavedEquipmentTypeController@create');
        Route::patch('update', 'SavedEquipmentTypeController@update');
        Route::delete('delete/{id}', 'SavedEquipmentTypeController@delete');
      });

      Route::prefix('hos')->namespace('Hos')->group(function () {
        Route::post('get', 'HosController@getHos');
      });

      // Fuel Card Integration
      Route::prefix('fuelCard')->namespace('FuelCard')->group(function () {
        Route::prefix('wex')->group(function () {
          Route::get('/connection-status', 'WexController@getConnectionStatus');
          Route::get('/account', 'WexController@getAccountDetails');
          Route::post('/account', 'WexController@updateOrCreateAccount');
          Route::delete('/disconnect', 'WexController@disconnectAccount');
          // This probably will only be used for testing purposes.
          Route::get('/transactions/save', 'WexController@getAndSaveTransactions');
        });
      });

      Route::prefix('referral')->group(function () {
        Route::post('/getEarnings', 'ReferralController@getEarnings');
      });

      Route::prefix('safety')->group(function () {
        Route::prefix('incident')->namespace('Safety')->group(function () {
          Route::prefix('files')->group(function () {
            Route::post('getUploadUrls', 'IncidentController@getUploadUrls');
            Route::post('create', 'IncidentController@createFile');
            Route::delete('/', 'IncidentController@deleteFile');
            Route::patch('edit', 'IncidentController@editFile');
            Route::post('getList', 'IncidentController@getFileList');
          });
          // OMG, there is a conflict. When we delete a file, it's delete safety/incident/files.
          // Laravel thinks we are in fact calling delete safety/incident/{id} and treat "files"
          // as id. I solved this temporarily by moving files above.
          Route::post('/getList', 'IncidentController@getList');
          Route::post('/create', 'IncidentController@store');
          Route::patch('/edit', 'IncidentController@update');
          Route::get('/{id}', 'IncidentController@show');
          Route::delete('/{id}', 'IncidentController@delete');
          Route::prefix('share')->group(function () {
            Route::post('getLink', 'IncidentController@getShareLink');
            Route::post('getLinksForFiles', 'IncidentController@getLinksForFiles');
          });
          Route::post('/setCustomization', 'IncidentController@setCustomization');
          Route::prefix('emails')->group(function () {
            Route::post('/create', 'IncidentController@createEmail');
            Route::delete('/', 'IncidentController@deleteEmail');
          });
          Route::prefix('statistics')->group(function () {
            Route::post('/getDataForCharts', 'IncidentController@getDataForCharts');
            Route::post('/getYearlyComparisonDataForCharts', 'IncidentController@getYearlyComparisonDataForCharts');
          });
          Route::post('/getCount', 'IncidentController@getCount');
          Route::prefix('notes')->group(function () {
            Route::post('create', 'IncidentController@createNote');
            Route::patch('edit', 'IncidentController@editNote');
            Route::delete('/', 'IncidentController@deleteNote');
          });
        });
      });
      Route::prefix('ifta')->namespace('IftaReport')->group(function () {
        Route::post('/getReport', 'IftaReportController@getReport');
      });

      Route::prefix('publicWeeklyFuelPrices')->group(function () {
        Route::get('/get', 'PublicWeeklyFuelPriceController@getPrices');
      });

      /*
      Route::prefix('accounting')->group(function () {
        Route::prefix('account')->group(function () {
          Route::get('/', 'AccountController@index');
          Route::post('create', 'AccountController@create')->middleware('role:admin|dispatcher');
          Route::patch('{id}', 'AccountController@edit')->middleware('role:admin|dispatcher');
          Route::prefix('qbo')->group(function () {
            Route::get('pull', 'AccountController@pullQboAccounts');
            Route::post('push', 'AccountController@pushQboAccounts');
          });
        });
        Route::prefix('items')->group(function () {
          Route::get('/', 'AccountItemController@index');
          Route::post('create', 'AccountItemController@create')->middleware('role:admin|dispatcher');
          Route::patch('{id}', 'AccountItemController@edit')->middleware('role:admin|dispatcher');
          Route::prefix('qbo')->group(function () {
            Route::get('pull', 'AccountItemController@pullQboAccountItems');
          });
        });
      });
      */
    });
  });

  Route::prefix('v2')->group(function () {
    /*Route::namespace('SageDesktopCustomized')->prefix('sage-desktop-customized')->group(function () {
      Route::post('get-invoices', 'SageDesktopCustomizedPublicApiController@getInvoices');
      Route::post('confirm-received-invoices', 'SageDesktopCustomizedPublicApiController@confirmReceivedInvoices');
    });*/
    // Temp location.
    Route::get('mobile-apps/ezpapel/latest-version', 'UserController@getAppLatestVersion');

    /*
    Route::prefix('sync')->group(function () {
      Route::namespace('Sync')->group(function () {
        Route::post('/import/assets', 'ImportController@importAssets');
        Route::post('/export/driverPay', 'ExportController@exportDriverPay');
      });
    });
    */

    Route::get('website/ezpapel/version', 'UserController@getEzpapelWebsiteVersion');

    Route::prefix('safety')->group(function () {
      Route::prefix('incident')->namespace('Safety')->group(function () {
        Route::prefix('share')->group(function () {
          Route::post('viewPage', 'IncidentController@viewSharePage');
        });
      });
    });
  });

  Route::prefix('truckpedia')->group(function () {
    Route::namespace('Truckpedia')->group(function () {
      Route::get('/checkNewBusinessUrl', 'CarrierWebsiteController@checkNewBusinessUrl');
      Route::post('/getCarrierWebsite', 'CarrierWebsiteController@getCarrierWebsite');
      Route::get('/isRegisteredCustomDomain', 'CarrierWebsiteController@isRegisteredCustomDomain');
      Route::get('/isValidAddressForCertificate', 'CarrierWebsiteController@isValidAddressForCertificate');

      Route::namespace('TruckReserved')->group(function () {
        Route::post('reserveRequestFromCarrierWebsite', 'TruckReservedController@reserveRequestFromCarrierWebsite');
      });

      Route::group(['middleware' => 'auth:api'], function () {
        Route::post('/carrierWebsite', 'CarrierWebsiteController@updateCarrierWebsiteComponent');
        Route::post('/getCarrierWebsiteImageUploadUrls', 'CarrierWebsiteController@getCarrierWebsiteImageUploadUrls');
        Route::get('/checkNewCustomDomain', 'CarrierWebsiteController@checkNewCustomDomain');

        Route::namespace('TruckReserved')->group(function () {
          Route::post('reserve', 'TruckReservedController@reserveTruck')->name('truckpedia.reserved');
          Route::post('reserveByLoad', 'TruckReservedController@reserveByLoad');
        });

        Route::post('trackCarrierTrucks', 'TruckTrackingController@trackCarrierTrucks');
      }); // End of auth:api middleware.
    });
    Route::post('/auth/carrier-one-step-register', 'AuthController@truckpediaOneStepUserRegistration');
    Route::prefix('available-trucks')->namespace('Truckpedia')->group(function () {
      Route::post('search', 'SearchAvailableTruckController@searchAvailableTrucks');
      Route::post('searchFromCarrierWebsite', 'SearchAvailableTruckController@searchFromCarrierWebsite');
      Route::post('searchByLoad', 'SearchAvailableTruckController@searchByLoad')->middleware('auth:api');
    });
    Route::prefix('companyWebsite')->namespace('CompanyWebsite')->group(function () {
      Route::prefix('blog')->group(function () {
        Route::post('getBlogs', 'BlogController@getBlogs');
        Route::get('/{id}', 'BlogController@show');
        Route::post('/create', 'BlogController@store')->middleware('auth:api');
        Route::patch('/edit', 'BlogController@update')->middleware('auth:api');
      });
    });
  });

  Route::middleware('auth.tender.load')->group(function () {
    Route::namespace('ExternalLoadParser')->group(function () {
      Route::post('/new-email-parsed-rate-con', 'EmailLoadParserController@addTenderLoad');
    });

    Route::namespace('Stedi')->prefix('stedi')->group(function () {
      Route::post('/handleWebhook', 'StediLoadParserController@handleStediWebhook');
    });
    Route::namespace('Edi')->prefix('edi')->group(function () {
      Route::post('/loads', 'EdiController@upsertLoad');
    });
  });

  // For outsiders to pay invoice.
  Route::post('v2/invoices/getPaymentDetailsFromPublicUrl', 'InvoiceV2Controller@getPaymentDetailsFromPublicUrl');
  Route::prefix('authorize-net')->namespace('AuthorizeNet')->group(function () {
    Route::get('getClientKeyByInvoice', 'AuthorizeNetController@getClientKeyByInvoice');
    Route::post('process-payment', 'AuthorizeNetController@processPayment');
  });
});

<?php

return [
  'per_page' => 10,

  'truck' => [
    'create' => 'Truck created successfully.',
    'update' => 'Truck update successfully.',
    'delete' => 'Truck delete successfully.',
    'change_status' => 'Truck status updated successfully.',
    'error' => 'Something went wrong, please try again.',
    'not_found' => 'Truck not found!',
    'assignments' => [
      'multiple_current_error' => 'You can only assign one truck to a driver as current.',
      'match_with_truck_numbers' => 'The driver assignment truck number has to match one entry in the trucks\'s truck number.',
    ],
    'unique' => 'Truck number is already being taken.',
    'file' => [
      'not_found' => 'Truck file not found!',
    ],
  ],

  'trailer' => [
    'create' => 'Trailer created successfully.',
    'update' => 'Trailer update successfully.',
    'delete' => 'Trailer delete successfully.',
    'change_status' => 'Trailer status updated successfully.',
    'error' => 'Something went wrong, please try again.',
    'driver_error' => 'Please contact dispatchers to add the new trailer.',
    'not_found' => 'Trailer not found!',
    'file' => [
      'not_found' => 'Trailer file not found!',
    ],
    'assignments' => [
      'multiple_current_error' => 'You can only assign one trailer to a driver as current.',
      'match_with_trailer_numbers' => 'The driver assignment trailer number has to match one entry in the trailers\'s trailer number.',
    ],
    'unique' => 'Trailer number is already being taken.',
  ],

  'customer' => [
    'create' => 'Customer created successfully.',
    'update' => 'Customer update successfully.',
    'delete' => 'Customer delete successfully.',
    'error' => 'Something went wrong, please try again.',
    'billingCcEmailLimitError' => 'Maximum billing cc email limit exceeded',
    'not_found' => 'Customer not found!',
    'file' => [
      'not_found' => 'Customer file not found!',
    ]
  ],

  'shipper' => [
    'create' => 'Shipper created successfully.',
    'update' => 'Shipper update successfully.',
    'delete' => 'Shipper delete successfully.',
    'error' => 'Something went wrong, please try again.',
    'notFound' => 'Shipper not found!',
  ],

  'incident' => [
    'create' => 'Incident created successfully.',
    'update' => 'Incident updated successfully.',
    'invalidId' => 'Invalid Incident Id',
    'notFound' => 'Incident not found!',
    'fileNotFound' => 'Incident file not found!',
    'notes' => [
      'update' => 'Incident Note updated successfully.',
      'notFound' => 'Incident Note not found!',
    ],
    'email' => [
      'notFound' => 'Incident email not found!',
    ],
  ],

  'receiver' => [
    'create' => 'Receiver created successfully.',
    'update' => 'Receiver update successfully.',
    'delete' => 'Receiver delete successfully.',
    'error' => 'Something went wrong, please try again.',
  ],

  'dispacher' => [
    'create' => 'Dispacher created successfully.',
    'update' => 'Dispacher update successfully.',
    'delete' => 'Dispacher delete successfully.',
    'error' => 'Something went wrong, please try again.',
  ],

  'user' => [
    'create' => 'User created successfully.',
    'update' => 'User update successfully.',
    'delete' => 'User delete successfully.',
    'change_status' => 'User status updated successfully.',
    'error' => 'Something went wrong, please try again.',
    'unique' => 'Employee id is already being taken.',
    'unique_email' => 'Email is already being taken.',
  ],

  'driver' => [
    'create' => 'Driver created successfully.',
    'update' => 'Driver update successfully.',
    'delete' => 'Driver delete successfully.',
    'error' => 'Something went wrong, please try again.',
    'status' => 'Driver status change successfully.',
    'location' => 'Driver Location update successfully.',
    'not_found' => 'Driver not found!',
    'assigned_load_changed' => 'Assigned loads have been changed. Please refresh the load list.',
    'ccEmailLimitError' => 'Maximum cc email limit exceeded',
    'loadStartedError' => 'Cannot start a new load before previous loads are finished.'
  ],

  'load' => [
    'create' => 'Load created successfully.',
    'update' => 'Load updated successfully.',
    'delete' => 'Load deleted successfully.',
    'restore' => 'Load restored successfully.',
    'subscription_error' => 'Your subscription has been expired please pay now to continue use the system.',
    'permission_denied' => 'You dont have permission to access this load',
    'invalid_order' => 'Invalid load stops ordering. Please refresh website or close current tab and open a new tab, then try again.',
    'invalid_leg_order' => 'Leg cannot be the first or last stop.',
    'dispatchDriverToCanceledLoad' => 'Cannot dispatch drivers to a canceled load. Restore this load first if needed.',
    'loadHasCarrier' => 'This load already has one carrier.',
    'planLimitReached' => 'You have reached the free plan limit. Please upgrade to continue.',
    'accessDenied' => 'Access Denied: You do not have permission for this.',
    'multipleStopContainerHereError' => 'Container can only be at one location.',
    'duplicateReference' => 'A load with the same reference already exists in the system.',
    'updateToDeliveredError' => 'Please provide arrival and departure timestamps for all shippers and receivers before marking the load as delivered.',
  ],

  'driver_load' => [
    'trailer_picked_up' => 'Trailer marked as picked up successfully.',
    'not_found' => 'Load not found!'
  ],

  'pipeline' => [
    'invalid_module' => 'Invalid appliedModule value.'
  ],

  'load_collaborator' => [
    'create' => 'Load collaborator created successfully.',
    'update' => 'Load collaborator updated successfully.',
  ],

  'load_document' => [
    'create' => 'Load Document created successfully.',
    'update' => 'Load Document updated successfully.',
    'delete' => 'Load Document deleted successfully.',
  ],

  'load_rate_confirmation' => [
    'create' => 'Load Rate Confirmation created successfully.',
    'update' => 'Load Rate Confirmation updated successfully.',
    'delete' => 'Load Rate Confirmation deleted successfully.',
  ],

  'load_invoice' => [
    'create' => 'Load Invoice created successfully.',
    'update' => 'Load Invoice updated successfully.',
    'delete' => 'Load Invoice deleted successfully.',
  ],

  'load_payment' => [
    'request' => 'Load payment request sent successfully.',
    'received' => 'Load payment received successfully.',
  ],

  'trip' => [
    'create' => 'Trip created successfully.',
    'payment_request' => 'Trip payment request successfully.',
    'update' => 'Trip update successfully.',
    'trip_payment' => 'Driver payment approved.',
    'load_occupied' => 'Load already occupied in trip.',
    'access_denied' => 'You dont have permission to access this trip.',
    'not_found' => 'Trip not found!'
  ],

  'trip_sheet' => [
    'started' => 'Trip sheet started successfully.',
    'trip_start_exist' => 'Cannot start a new trip sheet while another one is still in progress.',
  ],

  'trip_expense' => [
    'create' => 'Trip expense created successfully.',
    'update' => 'Trip expense update successfully.',
    'delete' => 'Trip expense delete successfully.',
  ],

  'language_label' => [
    'create' => 'Language Label created successfully.',
    'update' => 'Language Label update successfully.',
    'delete' => 'Language Label delete successfully.',
  ],

  'expense_type' => [
    'create' => 'Expense Type created successfully.',
    'update' => 'Expense Type update successfully.',
    'delete' => 'Expense Type delete successfully.',
  ],

  'maintenance' => [
    'create' => 'Maintenance created successfully.',
    'update' => 'Maintenance update successfully.',
    'delete' => 'Maintenance delete successfully.',
    'issue' => [
      'not_found' => 'Maintenance issue not found!'
    ]
  ],

  'status' => [
    'driver_load' => [
      'accepted' => 'Load has been accepted successfully.',
      'load_started' => 'Load has been started successfully.',
      'from_arrived' => 'Arrived at pickup location successfully.',
      'from_loaded' => 'Load has been loaded successfully.',
      'to_arrived' => 'Arrived at delivery location successfully.',
      'to_unloaded' => 'Load has been unloaded successfully.',
      'end_load' => 'Load has been end successfully.',
      'handed_over' => 'Load has been handover successfully.',
      'handover_error' => 'You are not eligible for handover the load!',
      // May be removed.
      'pick_up' => 'Load has been pick up successfully.',
      'delivered' => 'Load has been delivered successfully.',
    ],
  ],

  'driver_file' => [
    'delete' => 'Driver File delete successfully.',
    'error' => 'Something went wrong, please try again.',
    'not_found' => 'Driver Files not found.',
    'permission_denied' => 'You do not have permission to create/access this file.',
  ],

  'accessorial_fee' => [
    'create' => 'Accessorial Fee created successfully.',
  ],

  'accessorial_deduction' => [
    'create' => 'Accessorial Deduction created successfully.',
  ],

  'stripe' => [
    'card' => [
      'create' => 'Stripe card created successfully.',
      'delete' => 'Stripe card delete successfully.',
    ],
    'payment' => [
      'success' => 'Subscription plane update successfully.',
      'manual_success' => 'Subscription plane update successfully.',
    ],
  ],

  'subscription' => [
    'plane_active' => 'Subscription plane active successfully.',
    'plane_cancel' => 'Subscription plane cancel successfully.',
  ],

  'unprocessable_entity_error' => 'Unprocessable Entity: Request param not found',

  'tag' => [
    'create_success' => 'Tag created successfully',
    'delete_success' => 'Tag deleted successfully',
    'update_success' => 'Tag updated successfully',
    'notFound' => 'Tag not found!',
  ],

  'error' => 'Something went wrong, please try again.',

  'number' => [
    'no_number' => 'We do not have the number for this truck.',
    'samsara_no_match' => 'No truck on Samsara has a matching number for this truck.',
    'keeptruckin_no_match' => 'No truck on KeepTruckin has a matching number for this truck.',
  ],

  'factoring_company' => [
    'create' => 'Factoring company created successfully.',
    'update' => 'Factoring company updated successfully.',
    'delete' => 'Factoring company deleted successfully.',
    'error' => 'Something went wrong, please try again.',
  ],

  'spreadsheet' => [
    'access_denied' => 'Access Denied: You do not have permission for this.',
    "no_spreadsheet_found" => 'No spreadsheet found: Unprocessable Entity.',
    "column_not_editable" => "This column is not editable.",
    "invalid_filter" => "Invalid Filter: Invalid filter found.",
    "no_shared_user_found" => "User Not Found: No user access level found for this sheet."
  ],

  'url' => [
    'format_invalid' => 'The given url format is invalid.',
    'invalid' => 'Invalid url.',
    'not_available' => 'The given url is not available.',
  ],

  'customDomain' => [
    'not_exists' => 'The given domain does not exist.',
    'format_invalid' => 'The given domain format is invalid.',
    'not_available' => 'The given domain is not available.',
  ],

  'folder' => [
    'not_found' => 'Folder not found!'
  ],

  'fc' => [
    'submenu' => [
      'access_denied' => 'Access Denied: You do not have access to this submenu.',
    ],
    'view' => [
      'not_found' => 'View not found!',
      'access_denied' => 'Access Denied: You do not have access to this view.',
      'showFields' => [
        'duplicate_order' => 'The order already exists.',
      ],
    ],
    'record' => [
      'not_found' => 'Record not found!',
    ],
    'field' => [
      'not_found' => 'Field not found!',
      'selectOptions' => [
        'not_found' => 'Select option not found!',
      ],
      'level' => [
        'not_found' => 'Level not found!',
        'primary_field_already_exists' => 'There can only be one primary field per submenu.',
      ],
    ],
    'menu' => [
      'access_denied' => 'Access Denied: You do not have access to this menu.',
    ],
    'showFields' => [
      'duplicate_order' => 'The order already exists.',
    ],
  ],
  'driverTimeOffCalendar' => [
    'not_found' => 'Driver time off calendar not found!',
  ],
  'driverPayTemplate' => [
    'not_found' => 'Driver pay template not found!',
  ],
  'driverPayTemplateCustomField' => [
    'not_found' => 'Driver pay template custom field not found!',
  ],
  'frequentLane' => [
    'not_found' => 'Frequent lane not found!',
  ],
  'driverTimeOffCalendar' => [
    'per_page' => 25,
  ],
  'truckReserved' => [
    'success' => 'Truck reserved successfully'
  ],
  'companySetup' => [
    'invalidReferralCode' => 'Referral code is not valid. Please check the code.'
  ],
  'wex' => [
    'transactions' => [
      'failedToDownloadOrSave' => 'Issues were encountered when downloading or processing data from one or more companies. Please refer to the system log for further details.',
      'partiallyFailedToDownloadOrSave' => 'Partially processed. Issues were encountered when downloading or processing data from one or more companies. Please refer to the system log for further details.'
    ]
  ],
  'authorizeNet' => [
    'keyNotFound' => 'Cannot find any Authorize.net key.',
  ],
  'account' => [
    'typeError' => 'The selected type is invalid.',
    'duplicateError' => 'Another account is already using this name. Please use a different name.',
    'parentError' => 'For subaccounts, you must select the same account type as their parent.',
    'changeTypeError' => 'You cannot change the type of an account with subaccounts.',
    'changeArTypeError' => 'You cannot change the detail type of an account to \'Accounts Receivable (A/R)\' or change an \'Accounts Receivable (A/R)\' account to another detail type.',
    'changeApTypeError' => 'You cannot change the detail type of an account to \'Accounts Payable (A/P)\' or change an \'Accounts Payable (A/P)\' account to another detail type.',
  ],
  'item' => [
    'duplicateError' => 'Another item is already using this name. Please use a different name.',
  ],
];

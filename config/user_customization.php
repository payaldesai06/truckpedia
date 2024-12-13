<?php
if (env('APP_ENV') == 'production') {
  return [
    'GE' => [
      'companyId' => 76, //36,
      'stopChargeId' => 97, // 89,
      'spottingChargeId' => 98, // 90,
      'customerId' => 8994, //2167,
      'userId' => 595, //177,
      'accessorialFeeSocId' => 97, // 89,
      'customersEmail' => [
        // 'zbu@ezpapel.com',
        'Rebecca.Fileppi2@geappliances.com',
        'pdco.tenderedloads@geappliances.com',
        'pdco.mdloadtenders@geappliances.com'
      ],
      'weeklyLoadReportToAddresses' => [
        'Jeffrey.Myers@geappliances.com',
      ],
      'remitToCompany' => [
        'name' => 'Product Distribution Company',
        'addressLine1' => 'PO Box 74007313',
        'city' => 'Chicago',
        'state' => 'IL',
        'zip' => '60674-7313',
      ],
      'iccRegulations' => "I.C.C. Regulations require payment of this freight bill within 7 days.",
      'pvTagId' => 35,
    ],
    76 => [
      'remitToCompany' => [
        'name' => 'Product Distribution Company',
        'addressLine1' => 'PO Box 74007313',
        'city' => 'Chicago',
        'state' => 'IL',
        'zip' => '60674-7313',
      ],
      'iccRegulations' => "I.C.C. Regulations require payment of this freight bill within 7 days.",
    ],
    85 => [
      'syncInvoiceToMenu' => [
        'submenuId' => 87,
        'textFieldId' => 618, // invoice number
        'numberFieldId' => 626, // qty
        'currencyFieldId' => 627, // price
        'singleSelectFieldId' => 621, // warehouse
        'recordLinksFieldId' => 625,
      ]
    ],
    89 => [
      'remitToCompany' => [
        'name' => 'Rev Capital',
        'addressLine1' => '27 Roytec Rd #11',
        'city' => 'Woodbridge',
        'state' => 'ON',
        'zip' => 'L4L 8E3',
        'email' => 'payment@revinc.com',
        'phone' => '(855) 879-1511',
      ],
      'iccRegulations' => ''
    ],
    'api' => [
      'sync' => [
        'emerySappTest' => [
          // key is common_key_value_pairs is "apiSync-emerySappTest"
          'companyId' => 40,
          'userId' => 204,
        ],
        'emerySappProd' => [
          // key is common_key_value_pairs is "apiSync-emerySappProd"
          'companyId' => 112,
          'userId' => 873,
        ]
      ]
    ],
    // Company ids.
    'hideDriverTruckTrailerInLoadInvoicePdf' => [32],
    'hideDriverInLoadInvoicePdf' => [76],
    'showLaneCodeInLoadInvoicePdf' => [36, 76],
    'useAuthorizeNetForManualInvoice' => [36], // , 85 Test then release this feature.
    'additionalDisclaimer' => [
      118 => 'Send invoice, BOL, and rate con to billing.pleco@gmail.com within 24 hours of delivery.',
    ],
    'additionalServiceNotice' => [
      118 => 'For payment, the driver is required to submit pictures after loading at the shipper with the carrier name on the side of the truck and have the load visible.',
    ],
    "disclaimer" => [
      315 => "Driver must call Flamekeeper to be dispatched. Driver or carrier\'s dispatch must call each day during transit to provide a tracking update/driver location report. The Carrier or Driver must be informed prior to entering detention. Time-stamped BOL is required for detention pay within 48 hours of delivery. Carrier must immediately notify Flamekeeper if shipper's instructions do NOT match this Rate Confirmation. Carrier agrees that it will be the sole Carrier for the entire shipment and there will be no brokering of said load to another Carrier. Co-Brokering will result in non-payment of the load. Missed pickup and/or delivery date(s)/times will result in rate reduction up to 20% per day. Mechanical failure delay with supporting receipt will not penalized. Accurate tracking updates must be provided daily. Flamekeeper's terms for payment are (30) days from the date of receipt of Invoice, Rate Confirmation and Proof of Delivery. Proof of Delivery must be signed by Consignee. Please email invoice, rate confirmation and proof of delivery to bids@shipwithflame.com for payment. Quick Pay and/or Fuel Advance must be approved prior to loading. POD due within 2hrs of delivery; Rate reduction of 1% per day each day thereafter. Carrier may not break any seal. Proper load temperature is the Driver/Carrier's responsibility. Driver must verify at the time of pickup that the Bill of Lading matches the temperature on this load confirmation. By accepting this load, you are guaranteeing compliance with the Food Safety Modernize on Act (21 U.S.C. ?? 2201, et seq.), the Food, Drug and Cosmec Act (21 U.S.C. ?? 341, et seq.) (\"FD&C Act\"), the Sanitary Food Transportation Act (49 USC 5701 et seq.), and the U.S. Food and Drug Administration's Final Rule on the Sanitary Transportation of Human and Animal Food (21 C.F.R. ?? 1.900 et seq.), that any operang Transport Refrigera on Units (TRU's) are compliant with the California Air Resources Board's (CARB) TRU Airborne Toxic Control Measure (ATCM) requirements and regulations for the transportation of freight at any point in the State of California.Carrier agrees to the terms and conditions of the Flamekeeper Broker/Carrier Agreement between Flamekeeper and the Motor Carriers, and such Agreement governs this Carrier Rate Confirmation between the parties even in the event the carrier does not sign this Carrier Rate Confirmation, but provides the transportation as described herein. In the event of any conflict between the Agreement or the Carrier Rate Confirmation, the Agreement shall govern and then any terms as set forth in this Carrier Rate Confirmation shall apply. The Carrier agrees to and must comply with all Department of Transportation and other governmental regulations when transporting hazard materials. No secondary bills will be accepted after 30 days from delivery date. Carrier is not an employee of Flamekeeper. Carrier is responsible for determining the correct route for transporting the shipments it accepts. Carrier understand and acknowledges that any instruction or information given to it by Flamekeeper are merely for the Carrier's convenience and not to be construed as Falamekeeper's attempt to control the manner, method, or means by which Carrier or its employees performs the work hereunder. This Rate Confirmation Sheet is a legally binding agreement between Flamekeeper and Carrier. No signature is required to enforce provision of this agreement; rather both parties accept the terms and conditions contained herein upon Carrier's partial or full performance of the shipment. Driver must call Flamekeeper to be dispatched. Driver or carrier's dispatch must call Flamekeeper each day during transit to provide a tracking update/driver location report. The Carrier or Driver must call Flamekeeper prior to entering detention. Carrier must immediately notify Flamekeeper if shipper's instructions do NOT match this Rate Confirmation.
      Carrier agrees that it will be the sole Carrier for the entire shipment and there will be no brokering of said load to another Carrier. Co-Brokering will result in non-payment of the load. Right to Offset: In the event that Carrier fails to perform services agreed or becomes liable to Flamekeeper for any reason under the Broker/Carrier Agreement, Flamekeeper shall have the right to deduct the amount of the damages that Flamekeeper incurs as a result of Carrier's actions, including actual damages, consequential damages, and attorney fees, due to such failure or on account of such liability, from any monies that Carrier is owed by Flamekeeper. The right of offset provided for in this Section shall not be Flamekeeper exclusive remedy, but rather it shall be in addition to any other legal or equitable remedies that Flamekeeper may be entitled to pursue against Carrier. In the event of a claim for delay in delivery of freight (â€œa delay claim\"), Carrier shall pay to Flamekeeper, Flamekeeper's customer, the shipper/consignor, and/or the consignee, as the case may be, the greater of the actual damages caused by such a delay claim or $100.00 per day, or any portion of a day, by which the delivery was late. The provisions of this Agreement shall supersede and prevail over any terms or provisions to the contrary contained in Carrier's tariff(s), pricing agreements, publications, schedules, rules, policies, regulations, practices, other agreements, or other documents or statements. Any attempts to limit Carrier's liability for loss, damage, shortage, or delay claims as set forth in this Agreement shall be ineffective and are hereby deemed and agreed to be null and void. Carrier agrees that Flamekeeper reserves the right to withhold payment on any load on which there is a pending claim arising out of Carrier's failure to provide agree upon services. Carrier's failure to provide equipment and/or services as agreed upon may result in additional line haul deductions. Accurate tracking updates must be provided daily. Carrier agrees to accept Flamekeeper's request for tracking and tracing and will comply with any such request. Flamekeeper 's terms for payment are (30) days from the date of receipt of the Invoice, Rate Confirmation, and Proof of Delivery. Proof of Delivery must be signed by Consignee. Please email invoice, rate confirmation and proof of delivery to bids@shipwithflame.com for payment. Quick Pay and/or Fuel Advance must be approved prior to loading. POD due within 2hrs of delivery; Rate reduction of 1% per day each day thereafter. Carrier may not break any seal. Any refer temperature set point instructions given to Carrier from Flamekeeper shall be subordinate to any set point instructions on the Bill of Lading. In the event of conflicting refer temperature set point instructions, it is the Carrier's responsibility to confirm the refer temperature set point with the shipper before departure. Driver must verify at the me of pickup that the Bill of Lading matches the temperature on this load confirm on. By accepting this load, you are guaranteeing compliance with the Food Safety Modernize on Act (21 U.S.C. ?? 2201, et seq.), the Food, Drug and Cosmo c Act (21 U.S.C. ?? 341, et seq.) (\"FD&C Act\"), the Sanitary Food Transport on Act (49 USC 5701 et seq.), and the U.S. Food and Drug Administraon's Final Rule on the Sanitary Transport on of Human and Animal Food (21 C.F.R. ?? 1.900 et seq.), that any operating Transport Refrigerater Units (TRU's) are compliant with the California Air Resources Board's (CARB) TRU Airborne Toxic Control Measure (ATCM) requirements and regulations for the transportation of freight at any point in the State of California. Carrier agrees to notify Flamekeeper immediately if any problems or claims concerning the freight arise. Carrier is responsible for any damage to product, damage to the products container and overages/shortages of freight Carrier is responsible for the wholesomeness, temperature, and quality of food products at all times after leaving loading facility. Carrier is responsible for the inspection of the cargo prior to or at loading of the cargo on trailer. Unless otherwise noted on the Bill of Lading, Carrier agrees that the cargo was tendered to Carrier in good condition and Carrier is liable for any loss or damage to the cargo in transit, subject to the Carmack defenses, including (1) the act of God (2) the public enemy (3) the act of the shipper himself; (4) public authority; or (5) the inherent vic or nature of the goods. Carrier is also responsible for the safety and security if the cargo while in transit. Carrier agrees to the terms and conditions of the Flamekeeper Broker/Carrier Agreement between Flamekeeper and the Motor Carriers, and such Agreement governs this Carrier Rate Confirmation between the parties even in the event the carrier does not sign this Carrier Rate Confirmation but provides the transportation as described herein. In the event of any conflict between the Agreement or the Carrier Rate Confirmation, the Agreement shall govern and then any terms as set forth in this Carrier Rate Confirmation shall apply. The Carrier agrees to and must comply with all Department of Transportation and other governmental regulations when transporting hazard materials. No secondary bills will be accepted after 30 days from delivery date. Flamekeeper does not authorize hand written or verbal changes to this rate confirmation. If this rate confirmation does not accurately reflect the load terms,carrier must obtain a revised rate confirmation from Flamekeeper. Lumper reimbursement (for exact amount): Receipt required from the lumper service Detention: Carrier must be on time for pick up/delivery. Detention accrual begins 3 hours after appointment time at shipper/receiver. Carrier agrees to a detention rate of $25/hr. with a maximum amount of $150.00, including layover. Partial hours will be prorated. For detention approval,; CARRIER must notify Flamekeeper via phone at the time detention will start accruing and provide proof of timely arrival. Time stamped BOL required for detention pay within 48 hours of delivery. Truck Ordered Not Used (TONU): In the event Carrier's equipment is ordered but is not utilized, Carrier agrees to a TONU rate of $75.Submission of POD & reimbursement receipts due within 48HRS, unless Carrier is otherwise notified by Flamekeeper.It is the Carrier's responsibility to inspect the condition and security of all cargo prior to departing the loading area. If the driver is not allowed on the loading dock, a signature from the shipper must be obtained, verifying the condition and security of the loaded Cargo. Carrier hereby authorizes Flamekeeper to directly invoice shippers, consignees, consignors, or receivers or their designated agent for all freight, accessorial or other charges claimed due from such entities as agent for and on behalf of Carrier. Carrier's sole remedy shall be to seek payment from Flamekeeper and waives all rights to invoice shipper. Carrier agrees that Flamekeeper reserves the right to withhold payment on any load on which there is a pending claims arising out of Carrier's failure to provided agreed upon services. Carrier agrees that any bulkhead information provided to Flamekeeper does not limit carrier's liability for ??cargo damage. Carrier must inspect the installation and integrity of the installed bulkhead and agrees prior to leaving the loading facility the bulkhead meets all required specifications Carrier must verify the bulkhead allows for the shipper required temperature in each segment of the trailer. As between Broker and Carrier, any damage to cargo resulting from a faulty bulkhead is the sole responsibly of the carrier, subject to the Carmack defenses including (1) the act of God; (2) the public enemy; (3) the act of the shipper himself; (4) public authority; or (5) the inherent vic or nature of the goods. All shipments are dedicated unless prior authorized by us. We will not honor any payment if the truck is not dedicated. Carrier Do not accept live tracking or messing around with the tracking app will not get paid for the entire load. If Shipment delivers late without valid proof reason Flamekeeper is not liable to pay any $ amount. 
      Any Delays on delivery Flamekeeper Needs to notify at the same time or will not honor any payment on load for late delivery.
      
      Carriers/Drivers Need to Notify Us of any Cash or Fuel Advance before booking / Picking up the Freight. We do not do any advances of Cash/Fuel. If we have t for any reason we Charge 15% of the Total Freight Cost to Carrier/Driver
      PLEASE EMAIL A COPY OF POD AND INVOICE TO: Billing (accounting@flamekeeperlogistics.com)"
    ],
    'serviceNoticeNoPod' => [
      160 => 'All invoices and accessorial charge requests must be submitted'
    ],
    'incident' => [
      'customizationEmail' => [
        143 => [
          'toEmails' => ['brlfleet@blackrock-logistics.net'],
          'ccEmails' => ['mfrisby@blackrock-logistics.net', 'jdias@blackrock-logistics.net'],
          'replyToEmails' => ['mfrisby@blackrock-logistics.net', 'jdias@blackrock-logistics.net'],
        ],
        36 => [
          'toEmails' => ['zbu@ezpapel.com'],
          'ccEmails' => [],
          'replyToEmails' => ['zbu@ezpapel.com', 'zbu@ucla.edu'],
        ],
      ]
    ],
  ];
} else { // test and dev
  return [
    'PDCM' => [
      'companyId' => 36,
      'stopChargeId' => 31,
      'spottingChargeId' => 32,
      'customerId' => 2167,
      'userId' => 177,
      'accessorialFeeSocId' => 31,
      'customerEmails' => [
        'zbu@ezpapel.com'
      ],
    ],
    'GE' => [
      'companyId' => 36,
      'stopChargeId' => 31,
      'spottingChargeId' => 32,
      'customerId' => 2167,
      'userId' => 177,
      'accessorialFeeSocId' => 31,
      'customersEmail' => [
        // 'zbu@ezpapel.com'
      ],
      'weeklyLoadReportToAddresses' => [
        // 'zbu@ezpapel.com'
      ],
      'remitToCompany' => [
        'name' => 'Product Distribution Company',
        'addressLine1' => 'PO Box 74007313',
        'city' => 'Chicago',
        'state' => 'IL',
        'zip' => '60674-7313',
      ],
      'iccRegulations' => "I.C.C. Regulations require payment of this freight bill within 7 days.",
      'pvTagId' => 1,
    ],
    36 => [
      'remitToCompany' => [
        'name' => 'Product Distribution Company',
        'addressLine1' => 'PO Box 74007313',
        'city' => 'Chicago',
        'state' => 'IL',
        'zip' => '60674-7313',
      ],
      'iccRegulations' => "I.C.C. Regulations require payment of this freight bill within 7 days.",
      'syncInvoiceToMenu' => [
        'submenuId' => 25,
        'textFieldId' => 194, // invoice number
        'numberFieldId' => 199, // qty
        'currencyFieldId' => 200, // price
        'singleSelectFieldId' => 197, // warehouse
        'recordLinksFieldId' => 201,
      ]
    ],
    236 => [
      'remitToCompany' => [
        'name' => 'Rev Capital',
        'addressLine1' => '27 Roytec Rd #11',
        'city' => 'Woodbridge',
        'state' => 'ON',
        'zip' => 'L4L 8E3',
        'email' => 'payment@revinc.com',
        'phone' => '(855) 879-1511',
      ],
      'iccRegulations' => ''
    ],
    'api' => [
      'sync' => [
        'emerySappTest' => [
          // key is common_key_value_pairs is "apiSync-emerySappTest"
          'companyId' => 36, // 38,
          'userId' => 177, // 183,
        ],
        'emerySappProd' => [
          // key is common_key_value_pairs is "apiSync-emerySappProd"
          'companyId' => 36,
          'userId' => 177,
        ]
      ]
    ],
    'hideDriverTruckTrailerInLoadInvoicePdf' => [36],
    'hideDriverInLoadInvoicePdf' => [36],
    'showLaneCodeInLoadInvoicePdf' => [36],
    'useAuthorizeNetForManualInvoice' => [36],
    'additionalDisclaimer' => [
      36 => 'Send invoice, BOL, and rate con to billing.pleco@gmail.com within 24 hours of delivery.',
    ],
    'additionalServiceNotice' => [
      36 => 'For payment, the driver is required to submit pictures after loading at the shipper with the carrier name on the side of the truck and have the load visible.',
    ],
    'serviceNoticeNoPod' => [
      36 => 'All invoices and accessorial charge requests must be submitted'
    ],
    "disclaimer" => [
      36 => "Driver must call Flamekeeper to be dispatched. Driver or carrier\'s dispatch must call each day during transit to provide a tracking update/driver location report. The Carrier or Driver must be informed prior to entering detention. Time-stamped BOL is required for detention pay within 48 hours of delivery. Carrier must immediately notify Flamekeeper if shipper's instructions do NOT match this Rate Confirmation. Carrier agrees that it will be the sole Carrier for the entire shipment and there will be no brokering of said load to another Carrier. Co-Brokering will result in non-payment of the load. Missed pickup and/or delivery date(s)/times will result in rate reduction up to 20% per day. Mechanical failure delay with supporting receipt will not penalized. Accurate tracking updates must be provided daily. Flamekeeper's terms for payment are (30) days from the date of receipt of Invoice, Rate Confirmation and Proof of Delivery. Proof of Delivery must be signed by Consignee. Please email invoice, rate confirmation and proof of delivery to bids@shipwithflame.com for payment. Quick Pay and/or Fuel Advance must be approved prior to loading. POD due within 2hrs of delivery; Rate reduction of 1% per day each day thereafter. Carrier may not break any seal. Proper load temperature is the Driver/Carrier's responsibility. Driver must verify at the time of pickup that the Bill of Lading matches the temperature on this load confirmation. By accepting this load, you are guaranteeing compliance with the Food Safety Modernize on Act (21 U.S.C. ?? 2201, et seq.), the Food, Drug and Cosmec Act (21 U.S.C. ?? 341, et seq.) (\"FD&C Act\"), the Sanitary Food Transportation Act (49 USC 5701 et seq.), and the U.S. Food and Drug Administration's Final Rule on the Sanitary Transportation of Human and Animal Food (21 C.F.R. ?? 1.900 et seq.), that any operang Transport Refrigera on Units (TRU's) are compliant with the California Air Resources Board's (CARB) TRU Airborne Toxic Control Measure (ATCM) requirements and regulations for the transportation of freight at any point in the State of California.Carrier agrees to the terms and conditions of the Flamekeeper Broker/Carrier Agreement between Flamekeeper and the Motor Carriers, and such Agreement governs this Carrier Rate Confirmation between the parties even in the event the carrier does not sign this Carrier Rate Confirmation, but provides the transportation as described herein. In the event of any conflict between the Agreement or the Carrier Rate Confirmation, the Agreement shall govern and then any terms as set forth in this Carrier Rate Confirmation shall apply. The Carrier agrees to and must comply with all Department of Transportation and other governmental regulations when transporting hazard materials. No secondary bills will be accepted after 30 days from delivery date. Carrier is not an employee of Flamekeeper. Carrier is responsible for determining the correct route for transporting the shipments it accepts. Carrier understand and acknowledges that any instruction or information given to it by Flamekeeper are merely for the Carrier's convenience and not to be construed as Falamekeeper's attempt to control the manner, method, or means by which Carrier or its employees performs the work hereunder. This Rate Confirmation Sheet is a legally binding agreement between Flamekeeper and Carrier. No signature is required to enforce provision of this agreement; rather both parties accept the terms and conditions contained herein upon Carrier's partial or full performance of the shipment. Driver must call Flamekeeper to be dispatched. Driver or carrier's dispatch must call Flamekeeper each day during transit to provide a tracking update/driver location report. The Carrier or Driver must call Flamekeeper prior to entering detention. Carrier must immediately notify Flamekeeper if shipper's instructions do NOT match this Rate Confirmation.
      Carrier agrees that it will be the sole Carrier for the entire shipment and there will be no brokering of said load to another Carrier. Co-Brokering will result in non-payment of the load. Right to Offset: In the event that Carrier fails to perform services agreed or becomes liable to Flamekeeper for any reason under the Broker/Carrier Agreement, Flamekeeper shall have the right to deduct the amount of the damages that Flamekeeper incurs as a result of Carrier's actions, including actual damages, consequential damages, and attorney fees, due to such failure or on account of such liability, from any monies that Carrier is owed by Flamekeeper. The right of offset provided for in this Section shall not be Flamekeeper exclusive remedy, but rather it shall be in addition to any other legal or equitable remedies that Flamekeeper may be entitled to pursue against Carrier. In the event of a claim for delay in delivery of freight (â€œa delay claim\"), Carrier shall pay to Flamekeeper, Flamekeeper's customer, the shipper/consignor, and/or the consignee, as the case may be, the greater of the actual damages caused by such a delay claim or $100.00 per day, or any portion of a day, by which the delivery was late. The provisions of this Agreement shall supersede and prevail over any terms or provisions to the contrary contained in Carrier's tariff(s), pricing agreements, publications, schedules, rules, policies, regulations, practices, other agreements, or other documents or statements. Any attempts to limit Carrier's liability for loss, damage, shortage, or delay claims as set forth in this Agreement shall be ineffective and are hereby deemed and agreed to be null and void. Carrier agrees that Flamekeeper reserves the right to withhold payment on any load on which there is a pending claim arising out of Carrier's failure to provide agree upon services. Carrier's failure to provide equipment and/or services as agreed upon may result in additional line haul deductions. Accurate tracking updates must be provided daily. Carrier agrees to accept Flamekeeper's request for tracking and tracing and will comply with any such request. Flamekeeper 's terms for payment are (30) days from the date of receipt of the Invoice, Rate Confirmation, and Proof of Delivery. Proof of Delivery must be signed by Consignee. Please email invoice, rate confirmation and proof of delivery to bids@shipwithflame.com for payment. Quick Pay and/or Fuel Advance must be approved prior to loading. POD due within 2hrs of delivery; Rate reduction of 1% per day each day thereafter. Carrier may not break any seal. Any refer temperature set point instructions given to Carrier from Flamekeeper shall be subordinate to any set point instructions on the Bill of Lading. In the event of conflicting refer temperature set point instructions, it is the Carrier's responsibility to confirm the refer temperature set point with the shipper before departure. Driver must verify at the me of pickup that the Bill of Lading matches the temperature on this load confirm on. By accepting this load, you are guaranteeing compliance with the Food Safety Modernize on Act (21 U.S.C. ?? 2201, et seq.), the Food, Drug and Cosmo c Act (21 U.S.C. ?? 341, et seq.) (\"FD&C Act\"), the Sanitary Food Transport on Act (49 USC 5701 et seq.), and the U.S. Food and Drug Administraon's Final Rule on the Sanitary Transport on of Human and Animal Food (21 C.F.R. ?? 1.900 et seq.), that any operating Transport Refrigerater Units (TRU's) are compliant with the California Air Resources Board's (CARB) TRU Airborne Toxic Control Measure (ATCM) requirements and regulations for the transportation of freight at any point in the State of California. Carrier agrees to notify Flamekeeper immediately if any problems or claims concerning the freight arise. Carrier is responsible for any damage to product, damage to the products container and overages/shortages of freight Carrier is responsible for the wholesomeness, temperature, and quality of food products at all times after leaving loading facility. Carrier is responsible for the inspection of the cargo prior to or at loading of the cargo on trailer. Unless otherwise noted on the Bill of Lading, Carrier agrees that the cargo was tendered to Carrier in good condition and Carrier is liable for any loss or damage to the cargo in transit, subject to the Carmack defenses, including (1) the act of God (2) the public enemy (3) the act of the shipper himself; (4) public authority; or (5) the inherent vic or nature of the goods. Carrier is also responsible for the safety and security if the cargo while in transit. Carrier agrees to the terms and conditions of the Flamekeeper Broker/Carrier Agreement between Flamekeeper and the Motor Carriers, and such Agreement governs this Carrier Rate Confirmation between the parties even in the event the carrier does not sign this Carrier Rate Confirmation but provides the transportation as described herein. In the event of any conflict between the Agreement or the Carrier Rate Confirmation, the Agreement shall govern and then any terms as set forth in this Carrier Rate Confirmation shall apply. The Carrier agrees to and must comply with all Department of Transportation and other governmental regulations when transporting hazard materials. No secondary bills will be accepted after 30 days from delivery date. Flamekeeper does not authorize hand written or verbal changes to this rate confirmation. If this rate confirmation does not accurately reflect the load terms,carrier must obtain a revised rate confirmation from Flamekeeper. Lumper reimbursement (for exact amount): Receipt required from the lumper service Detention: Carrier must be on time for pick up/delivery. Detention accrual begins 3 hours after appointment time at shipper/receiver. Carrier agrees to a detention rate of $25/hr. with a maximum amount of $150.00, including layover. Partial hours will be prorated. For detention approval,; CARRIER must notify Flamekeeper via phone at the time detention will start accruing and provide proof of timely arrival. Time stamped BOL required for detention pay within 48 hours of delivery. Truck Ordered Not Used (TONU): In the event Carrier's equipment is ordered but is not utilized, Carrier agrees to a TONU rate of $75.Submission of POD & reimbursement receipts due within 48HRS, unless Carrier is otherwise notified by Flamekeeper.It is the Carrier's responsibility to inspect the condition and security of all cargo prior to departing the loading area. If the driver is not allowed on the loading dock, a signature from the shipper must be obtained, verifying the condition and security of the loaded Cargo. Carrier hereby authorizes Flamekeeper to directly invoice shippers, consignees, consignors, or receivers or their designated agent for all freight, accessorial or other charges claimed due from such entities as agent for and on behalf of Carrier. Carrier's sole remedy shall be to seek payment from Flamekeeper and waives all rights to invoice shipper. Carrier agrees that Flamekeeper reserves the right to withhold payment on any load on which there is a pending claims arising out of Carrier's failure to provided agreed upon services. Carrier agrees that any bulkhead information provided to Flamekeeper does not limit carrier's liability for ??cargo damage. Carrier must inspect the installation and integrity of the installed bulkhead and agrees prior to leaving the loading facility the bulkhead meets all required specifications Carrier must verify the bulkhead allows for the shipper required temperature in each segment of the trailer. As between Broker and Carrier, any damage to cargo resulting from a faulty bulkhead is the sole responsibly of the carrier, subject to the Carmack defenses including (1) the act of God; (2) the public enemy; (3) the act of the shipper himself; (4) public authority; or (5) the inherent vic or nature of the goods. All shipments are dedicated unless prior authorized by us. We will not honor any payment if the truck is not dedicated. Carrier Do not accept live tracking or messing around with the tracking app will not get paid for the entire load. If Shipment delivers late without valid proof reason Flamekeeper is not liable to pay any $ amount. 
      Any Delays on delivery Flamekeeper Needs to notify at the same time or will not honor any payment on load for late delivery.
      
      Carriers/Drivers Need to Notify Us of any Cash or Fuel Advance before booking / Picking up the Freight. We do not do any advances of Cash/Fuel. If we have t for any reason we Charge 15% of the Total Freight Cost to Carrier/Driver
      PLEASE EMAIL A COPY OF POD AND INVOICE TO: Billing (accounting@flamekeeperlogistics.com)"
    ],
    'incident' => [
      'customizationEmail' => [
        36 => [
          'toEmails' => ['zbu@ezpapel.com'],
          'ccEmails' => [],
          'replyToEmails' => ['zbu@ezpapel.com', 'zbu@ucla.edu'],
        ],
      ]
    ],
  ];
}

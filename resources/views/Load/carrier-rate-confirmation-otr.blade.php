<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.cdnfonts.com/css/helvetica-neue-9" rel="stylesheet">
  <title></title>
  <style>
    .table,
    .th,
    .td {
      border: 1px solid black;
      border-collapse: collapse;
    }

    .table {
      border-radius: 5px;
    }

    .td {
      margin-top: 10px;
      width: 100%;
    }

    /* ol{
         list-style-position: inside;
        } */

    html,
    body,
    td,
    th,
    div,
    p,
    span {
      font-family: 'Helvetica Neue', sans-serif !important;
    }

    table {
      border-collapse: collapse;
    }

    p {
      margin: 3px;
      padding: 3px;
    }
  </style>
</head>

<body style="font-family: 'Helvetica Neue', sans-serif;">
  <div style="
   color: #000000;
   font-size: 12px;
   font-weight: 400;
   font-family: 'Helvetica Neue', sans-serif;
   border: 0 !important;
   margin: 0 !important;
   outline: 0 !important;
   text-decoration: none !important;">
    <table cellpadding="0" cellspacing="0" border="0">
      <!-- Header Section -->
      <tr>
        <td>
          <div style="margin-bottom: 10px;">
            <table style="width: 100%;">
              <tr style="width: 100%;">
                <td style="width:25%">
                  <!-- Logo -->
                  <!-- Company Image / Logo Variable -->
                  <div>
                    <img src="{{ $data['company']['logo'] }}" style="object-fit: contain; max-height: 100px; max-width: 100px" />
                  </div>
                </td>
                <td style="width:35%; text-align: center; vertical-align: middle;">
                  <table style="width: 100%;">
                    <!-- Rate -->
                    <tr style="
                              font-size: 16px;
                              font-weight: 600;
                              padding: 5px;
                              width: 100%;
                              ">
                      <td style="width:100%; text-align: center; vertical-align: middle;">
                        {{ !empty($data['isBol']) ? "Bill of Lading" : "Rate Confirmation" }}
                      </td>
                    </tr>
                  </table>
                </td>
                <td style="width:35%; text-align: center; vertical-align: middle; padding-left: 25px;">
                  <table style="width: 100%;">
                    <!-- Date -->
                    <tr style="width: 100%;">
                      <td style="width: 20%;margin-left: 10px">Date: </td>
                      <td style="
                        width: 200px;
                        margin-left: 5px;
                        font-weight: 400;
                        margin-bottom: -1px;
                        ">
                        <p style="display: block;padding-left:30px;"> {{ $data['date'] }}
                        <p>
                          <span style="display: block;border: 0.5px solid #000; width: 150px;"> </span>
                          <!-- Date : Variable -->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr style="color: #000; font-weight: 400; width: 100%;">
                <td style="width:30%; vertical-align:top;">
                  <!-- Address, Contact -->
                  <div style="font-size: 12px">
                    <p style="line-height: 8px;">{{ $data['company']['name'] }}</p>
                    @if (!empty($data['company']['address']))
                    <p style="line-height: 16px;">{{ $data['company']['address'] }}</p>
                    @endif
                    @if (!empty($data['company']['city']) || !empty($data['company']['state'] || !empty($data['company']['zip'])))
                    <p style="line-height: 8px;">{{ printAddressHelper('', $data['company']['city'], $data['company']['state'], $data['company']['zip']) }}</p>
                    @endif
                    @if (!empty($data['company']['businessUrl']))
                    <p style="line-height: 8px;">{{ $data['company']['businessUrl'] }}</p>
                    @endif
                    <!-- Company Mail Id : Variable -->
                    @if (!empty($data['company']['email']))
                    <p style="line-height: 8px;">{{ $data['company']['email'] }}</p>
                    @endif
                  </div>
                </td>
                <td style="width:35%; vertical-align:center; text-align:left;">
                  <!-- Carrier Info -->
                  <div style="
                           border: 1px solid #000;
                           border-radius: 5px;
                           padding: 5px;
                           ">
                    <span style="font-size: 16px; font-weight: 600"> Carrier </span>
                    <p>
                      <!-- Carrier Info : Variable -->
                      <span style="display: block;">{{ $data['carrier']['name'] }}</span>
                      <!-- Carrier Name : Sub Variable -->
                      <span style="display: block;">{{ $data['carrierAddress'] }}</span>
                      <span style="display: block;">{{ $data['carrierAddress1'] }}</span>
                      <!-- Address line 1 : Sub Variable -->
                      <span style="display: block;">{{ $data['carrier']['phone'] }}</span>
                      <!-- Phone Number : Sub Variable -->
                      <span style="display: block;">{{ $data['carrier']['email'] }}</span>
                      <!-- Email : Sub Variable -->
                    </p>
                  </div>
                </td>
                <td style="width:35%; vertical-align:bottom; text-align:center; padding-left: 25px;">
                  <!-- Details -->
                  <section>
                    <!-- Row 1  -->
                    <table style="
                        border: 1px solid #000;
                        border-top-left-radius: 5px;
                        border-top-right-radius: 5px;
                        border-bottom: none;
                        color: rgb(0, 0, 0);
                        width: 100%;
                        table-layout: fixed;
                      " cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <th width="50%" style="padding: 8px 5px; border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                          Load
                        </th>
                        <td width="50%" style="
                            padding: 8px 5px;
                            border-right: 1px solid #000;
                            text-align: left; vertical-align: middle;
                          ">
                          {{ $data['loadNumber'] }} <!-- Load Number : Variable -->
                        </td>
                      </tr>
                    </table>
                    <!-- Row 2  -->
                    <table style="
                        border: 1px solid #000;
                        border-bottom: none;
                        color: rgb(0, 0, 0);
                        width: 100%;
                      " cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <th width="50%" style="padding: 8px 5px; border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                          Reference
                        </th>
                        <td width="50%" style="padding: 8px 5px; border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                          {{ $data['loadReference'] }} <!-- Customer Load : Variable -->
                        </td>
                      </tr>
                    </table>
                    <!-- Row 3  -->
                    <table style="
                        border: 1px solid #000;
                        border-bottom: none;
                        color: rgb(0, 0, 0);
                        width: 100%;
                      " cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <th width="50%" style="padding: 8px 5px; border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                          Order Type
                        </th>
                        <td width="50%" style="padding: 8px 5px; border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                          {{ $data['orderType'] }} <!-- Order Type - Import, Export, or Reposition : Variable -->
                        </td>
                      </tr>
                    </table>
                    <!-- Row 4  -->
                    <table style="
                        border: 1px solid #000;
                        border-bottom-left-radius: 5px;
                        border-bottom-right-radius: 5px;
                        color: rgb(0, 0, 0);
                        width: 100%;
                      " cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <th width="50%" style="padding: 8px 5px; border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                          Service Type
                        </th>
                        <td width="50%" style="padding: 8px 5px; border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                          {{ $data['serviceType'] }} <!-- Service Type - Live, No touch, Drop & Hook : Variable -->
                        </td>
                      </tr>
                    </table>
                  </section>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
      <!-- Body Section -->
      <tr>
        <td>
          <div style="
            border: 1px solid #000;
            border-bottom: 0.5px solid #000;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            color: #000;
            font-weight: 400;
            margin-top: 5px">
            <!-- Service Notice -->
            <div style="padding: 10px;">
              <p style="font-size: 16px; font-weight: 600">Service Notice:</p>
              <p style="font-size: 16px">
                <!-- Service Notice : Variable -->
                {{$data['serviceNotice']}} to
                <b>{{ $data['company']['name'] }}</b> within 24 hours after completing a job.
                @if(isset($data['additionalServiceNotice']) && !is_null($data['additionalServiceNotice']))
                {{$data['additionalServiceNotice']}}
                @endif
              </p>
            </div>
          </div>
        </td>
      </tr>
      <!-- Pickups and Deliveries  -->
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" style="
              width: 100%;
              border: 1px solid #000;
              border-top: 0.5px solid #000;
              border-bottom: 0.5px solid #000;
            ">
            <!-- Heading of Pickup and Delivery  -->
            <tr>
              <!-- Pickups  -->
              <th class="th" width="50%" style="padding: 0 10px; margin: 0px; font-size: 16px; font-weight: 600; text-align: left;">
                Pickup(s):
              </th>
              <!-- Deliveries -->
              <th class="th" width="50%" style="padding: 0 10px; font-size: 16px; font-weight: 600; text-align: left;">
                Delivery(ies):
              </th>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Pick Up and Delivery Block : START  -->
      @php
      $maxRows = max(count($data['receivers']), count($data['shippers']));
      @endphp
      @for ($i = 0; $i < $maxRows; $i++) <!-- Pick up & Deliver address - Single row template -->
        <tr>
          <td>
            <table style="
              border: 1px solid #000;
              border-top: 0.5px solid #000;
              border-bottom: 0.5px solid #000;
              color: rgb(0, 0, 0);
              width: 100%;
            " cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="50%" height="30px" style="border-right: 1px solid #000; text-align: left; vertical-align: middle;">
                  <p style="padding: 0 6px;">
                    @if (isset($data['shippers'][$i]))
                    <span style="display: block;font-size: 14px;">{{
                        $data['shippers'][$i]['shipper_name']
                        . ', ' . printAddressHelper(
                          $data['shippers'][$i]['address'],
                          $data['shippers'][$i]['city'],
                          $data['shippers'][$i]['state'],
                          $data['shippers'][$i]['zip_code']) }}</span>
                    <span style="display: block;font-size: 14px;">Date:
                      {{ formatDateInAmericanDateFormat($data['shippers'][$i]['shipping_date'])}}
                      @if (!empty($data['shippers'][$i]['shipping_time']))
                      {{ $data['shippers'][$i]['shipping_time'] }}
                      @endif
                      @if(!empty($data['shippers'][$i]['shipping_end_date']) && $data['shippers'][$i]['shipping_end_date'] != $data['shippers'][$i]['shipping_date'])
                      - {{ formatDateInAmericanDateFormat($data['shippers'][$i]['shipping_end_date']) }} {{ $data['shippers'][$i]['shipping_end_time'] ?? '' }}
                      @elseif(!empty($data['shippers'][$i]['shipping_end_time']))
                      - {{ $data['shippers'][$i]['shipping_end_time'] }}
                      @endif
                    </span>
                    @if (!empty($data['shippers'][$i]['contact_number']) ||
                    !empty($data['shippers'][$i]['contact_person']))
                    <span style="display: block;font-size: 14px;">
                      @if (!empty($data['shippers'][$i]['contact_person']))
                      Contact: {{ $data['shippers'][$i]['contact_person'] }} &nbsp;
                      @endif
                      @if (!empty($data['shippers'][$i]['contact_number']))
                      Phone: {{ $data['shippers'][$i]['contact_number'] }}
                      @endif
                    </span>
                    @endif
                    @if (!empty($data['shippers'][$i]['freight_weight']) ||
                    !empty($data['shippers'][$i]['freight_qty']))
                    <span style="display: block;font-size: 14px;">
                      @if (!empty($data['shippers'][$i]['freight_weight']))
                      Weight: {{ round($data['shippers'][$i]['freight_weight'], 2) }}
                      @if (!empty($data['shippers'][$i]['weight_unit']))
                      {{$data['shippers'][$i]['weight_unit']}}
                      @endif
                      &nbsp;
                      @endif
                      @if (!empty($data['shippers'][$i]['freight_qty']))
                      Qty: {{ round($data['shippers'][$i]['freight_qty']) }}
                      @if (!empty($data['shippers'][$i]['qty_unit']))
                      {{$data['shippers'][$i]['qty_unit']}}
                      @endif
                      @endif
                    </span>
                    @endif
                    @if(!empty($data['shippers'][$i]['freightEquipmentType']) ||
                    !empty($data['shippers'][$i]['freight_description']))
                    <span style="display: block;font-size: 14px;">
                      @if (!empty($data['shippers'][$i]['freightEquipmentType']))
                      Equipment #: {{ $data['shippers'][$i]['freightEquipmentType'] }} &nbsp;
                      @endif
                      @if (!empty($data['shippers'][$i]['freight_description']))
                      Description: {{ $data['shippers'][$i]['freight_description'] }} &nbsp;
                      @endif
                    </span>
                    @endif
                    @if (!empty($data['shippers'][$i]['additionalFreightDetails']))
                    @if (!empty($data['shippers'][$i]['additionalFreightDetails']->a))
                    @foreach ($data['shippers'][$i]['additionalFreightDetails']->a as $detail)
                    @if (!empty($detail->e) || !empty($detail->q))
                    <span style="display: block;font-size: 14px;">
                      @if (!empty($detail->e))
                      Weight: {{ round($detail->e, 2) }}
                      @if (!empty($detail->i))
                      {{config('constant.weight_unit')[$detail->i]}}
                      @endif
                      &nbsp;
                      @endif

                      @if (!empty($detail->q))
                      Qty: {{ round($detail->q) }}
                      @if (!empty($detail->t))
                      {{config('constant.quantity_unit')[$detail->t]}}
                      @endif
                      &nbsp;
                      @endif
                    </span>
                    @endif
                    @if(!empty($detail->u) || !empty($detail->d))
                    <span style="display: block;font-size: 14px;">
                      @if (!empty($detail->u))
                      Equipment #: {{ $detail->u }} &nbsp;
                      @endif
                      @if (!empty($detail->d))
                      Description: {{ $detail->d }} &nbsp;
                      @endif
                    </span>
                    @endif
                    @endforeach
                    @endif
                    @endif
                    @if (!empty($data['shippers'][$i]['temperature']) || !isNullOrEmptyStr($data['shippers'][$i]['container']) ||
                    !empty($data['shippers'][$i]['shipper_reference']))
                    <span style="display: block;font-size: 14px;">
                      @if (!empty($data['shippers'][$i]['shipper_reference']))
                      PU#: {{ $data['shippers'][$i]['shipper_reference'] }} &nbsp;
                      @endif
                      @if (!isNullOrEmptyStr($data['shippers'][$i]['container']))
                      Container #: {{ $data['shippers'][$i]['container'] }} &nbsp;
                      @endif
                      @if (!empty($data['shippers'][$i]['temperature']))
                      Temperature: {{ $data['shippers'][$i]['temperature'] }}
                      @endif
                    </span>
                    @endif
                    @if(!empty($data['shippers'][$i]['shipper_note']))
                    <span style="display: block;font-size: 14px;">Note: {{$data['shippers'][$i]['shipper_note']}}</span>
                    @endif
                    @endif
                  </p>
                </td>
                <td width="50%" height="30px" style="text-align: left; vertical-align: middle;">
                  <p style="padding: 0 6px;">
                    @if (isset($data['receivers'][$i]))
                    <span style="display: block;font-size: 14px;">{{
                      $data['receivers'][$i]['receiver_name']
                      . ', ' . printAddressHelper(
                        $data['receivers'][$i]['address'],
                        $data['receivers'][$i]['city'],
                        $data['receivers'][$i]['state'],
                        $data['receivers'][$i]['zip_code'])
                       }}</span>
                    <span style="display: block;font-size: 14px;">Date:
                      {{ formatDateInAmericanDateFormat($data['receivers'][$i]['delivery_date'])}}
                      @if (!empty($data['receivers'][$i]['delivery_time']))
                      {{ $data['receivers'][$i]['delivery_time'] }}
                      @endif
                      @if(!empty($data['receivers'][$i]['delivery_end_date']) && $data['receivers'][$i]['delivery_end_date'] != $data['receivers'][$i]['delivery_date'])
                      - {{ formatDateInAmericanDateFormat($data['receivers'][$i]['delivery_end_date']) }} {{ $data['receivers'][$i]['delivery_end_time'] ?? '' }}
                      @elseif(!empty($data['receivers'][$i]['delivery_end_time']))
                      - {{ $data['receivers'][$i]['delivery_end_time'] }}
                      @endif
                    </span>
                    @if (!empty($data['receivers'][$i]['contact_number']) ||
                    !empty($data['receivers'][$i]['contact_person']))
                    <span style="display: block;">
                      @if (!empty($data['receivers'][$i]['contact_person']))
                      Contact: {{ $data['receivers'][$i]['contact_person'] }} &nbsp;
                      @endif
                      @if (!empty($data['receivers'][$i]['contact_number']))
                      Phone: {{ $data['receivers'][$i]['contact_number'] }}
                      @endif
                    </span>
                    @endif
                    @if (!isNullOrEmptyStr($data['receivers'][$i]['receiver_reference']))
                    Delivery #: {{ $data['receivers'][$i]['receiver_reference'] }} &nbsp;
                    @endif
                    @if(!empty($data['receivers'][$i]['receiver_note']))
                    <span style="display: block;">Note: {{$data['receivers'][$i]['receiver_note']}}</span>
                    @endif
                    @endif
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        @endfor
        <!-- Pick Up and Delivery Block : END  -->

        <!-- Body Block : START  -->
        <!-- Body Block - END -->

        <!-- Footer block : Start : Amount, Instruction , Disclaimer , Signature -->
        @if(empty($data['isBol']))
        <!-- Amount  -->
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" style="
                width: 100%;
                border-top: 1px solid #000;
                border-bottom: 0.5px solid #000;
                color: #000;
                border-left: 1px solid #000;
                border-right: 1px solid #000;
              ">
              <tr>
                <th style="width: 30%; padding-left: 10px;">
                  <p style="text-align: left;font-weight: 600; font-size: 14px">Rate Details</p>
                </th>
                <th style="width: 30%; padding: 0">
                  <p style="text-align: left;font-weight: 600; font-size: 14px">Amount</p>
                </th>
                <th style="width: 40%; padding-right: 10px;">
                  <p style="text-align: left;font-weight: 600; font-size: 14px">Notes</p>
                </th>
              </tr>
              <tr>
                <td style="width: 30%; border-bottom: 1px solid #ccc; padding-left: 10px;">
                  <p style="font-size: 13px">Base Cost</p>
                </td>
                <td style="width: 30%; border-bottom: 1px solid #ccc;">
                  {{ getCurrencyInNumberFormatWithDollarPrefix($data['charges']['hauling_fee']) }}
                  <!-- Base Cost - Amount : Variable  -->
                </td>
                <td style="width: 40%; border-bottom: 1px solid #ccc; padding-right: 10px;">
                  Hauling Fee
                </td>
              </tr>
              <tr>
                <td style="width: 30%; border-bottom: 1px solid #ccc; padding-left: 10px;">
                  <p style="font-size: 13px">Fuel Surcharge</p>
                </td>
                <td style="width: 30%; border-bottom: 1px solid #ccc;">
                  {{ getCurrencyInNumberFormatWithDollarPrefix($data['charges']['fuel_surcharge']) }}
                  <!-- Surcharges - Amount : Variable  -->
                </td>
                <td style="width: 40%; border-bottom: 1px solid #ccc; padding-right: 10px;">
                  Fuel Surcharge
                </td>
              </tr>
              @if(!empty($data['charges']['accessorial_fee']))
              @foreach($data['charges']['accessorial_fee'] as $accessorialFee)
              <tr>
                <td style="width: 30%; border-bottom: 1px solid #ccc; padding-left: 10px;">
                  <p style="font-size: 13px">{{$accessorialFee['name']}}</p>
                </td>
                <td style="width: 30%; border-bottom: 1px solid #ccc;">
                  {{ getCurrencyInNumberFormatWithDollarPrefix($accessorialFee['rate']) }}
                  <!-- Surcharges - Amount : Variable  -->
                </td>
                <td style="width: 40%; border-bottom: 1px solid #ccc; padding-right: 10px;">
                  Accessorial Fee
                  <!-- Base Cost - Notes : Variable  -->
                </td>
              </tr>
              @endforeach
              @endif
              @if(!empty($data['charges']['accessorial_deduction']))
              @foreach($data['charges']['accessorial_deduction'] as $accessorialDeduction)
              <tr>
                <td style="width: 30%; border-bottom: 1px solid #ccc; padding-left: 10px;">
                  <p style="font-size: 13px">{{$accessorialDeduction['name']}}</p>
                </td>
                <td style="width: 30%; border-bottom: 1px solid #ccc;">
                  {{ getCurrencyInNumberFormatWithDollarPrefix($accessorialDeduction['rate']) }}
                  <!-- Surcharges - Amount : Variable  -->
                </td>
                <td style="width: 40%; border-bottom: 1px solid #ccc; padding-right: 10px;">
                  Accessorial Deduction
                  <!-- Base Cost - Notes : Variable  -->
                </td>
              </tr>
              @endforeach
              @endif
              @if($data['discount'] != 0)
              <tr>
                <td style="width: 30%; border-bottom: 1px solid #ccc; padding-left: 10px;">
                  <p style="font-size: 13px">Discount</p>
                </td>
                <td style="width: 30%; border-bottom: 1px solid #ccc;">
                  {{ getCurrencyInNumberFormatWithDollarPrefix($data['discount']) }}
                </td>
                <td style="width: 40%; border-bottom: 1px solid #ccc; padding-right: 10px;">
                </td>
              </tr>
              @endif
              <tr>
                <td style="width: 30%; padding-left: 10px;">
                  <p style="font-size: 13px;font-weight: 600;">Total</p>
                </td>
                <td style="width: 30%;">
                  <span style="font-size: 13px;font-weight: 600;">
                    {{ getCurrencyInNumberFormatWithDollarPrefix($data['totalAmount'])}}
                  </span>
                  <!-- Total - Amount : Variable  -->
                </td>
                <td style="width: 40%;"></td>
              </tr>
            </table>
          </td>
        </tr>
        @endif
        <!-- Instruction  -->
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" style="
              width: 100%;
              border-top: 0.5px solid #000;
              border-bottom: 0.5px solid #000;
              color: #000;
              border-left: 1px solid #000;
              border-right: 1px solid #000;
            ">
              <tr>
                <th style="text-align: left;">
                  <p style="font-size: 16px; font-weight: 600;">
                    Instructions:
                  </p>
                </th>
              </tr>
              <tr>
                <td height="30px">
                  <p>{{ $data['specialInstructions'] }}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Disclaimer  -->
        <tr>
          <td>
          <table cellpadding="0" cellspacing="0" border="0" style="
              width: 100%;
              border-top: 0.5px solid #000;
              border-bottom: 0.5px solid #000;
              color: #000;
              border-left: 1px solid #000;
              border-right: 1px solid #000;
            ">
          <tr>
              <th style="text-align: left;">
                <p style="padding: 0 5px; font-size: 16px; font-weight: 600; margin-bottom: 5px">
                  Disclaimers:
                </p>
              </th>
            </tr>
            <!-- Disclaimer  -->
            <tr>
              @if(isset($data['disclaimer']) && !is_null($data['disclaimer']))
                <td style="padding: 5px;font-size: 9.2px;text-align: justify;">
                  {{$data['disclaimer']}}
                </td>
              @else
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 0 10px; margin-bottom: 5px;">
                    <tr width="100%">
                      <td width="50%" style="font-size: 13px; font-weight: 400; padding-right: 10px;vertical-align:top;">
                        Carrier agrees to provide final charges within 24 hours of completion of shipment. No additional fees
                        shall be charged by carrier without previous written notification and approval by
                        <b>{{ $data['company']['name'] }}</b>; please refer to carrier package for details.
                      </td>
                      <td width="50%" style="font-size: 13px; font-weight: 400; padding-left: 10px;vertical-align:top;">
                        Invoices must contain: Rate Confirmation, Bill Of Lading, Proof Of Delivery; Accessorial charge,
                        including but not limited to lumper, chassis, etc, in connection with the shipment and with prior
                        approval by <b>{{ $data['company']['name'] }}</b>.
                        @if(isset($data['additionalDisclaimer']) && !is_null($data['additionalDisclaimer']))
                          {{$data['additionalDisclaimer']}}
                        @endif
                      </td>
                    </tr>
                  </table>
                </td>
                @endif
              </tr>
            </table>
          </td>
        </tr>
        <!-- Signature  -->
        <tr>
          <td>
            <div style="
              border: 1px solid #000;
              border-top: 0.5px solid #000;
              border-bottom-left-radius: 5px;
              border-bottom-right-radius: 5px;
              color: #000;
              ">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 10px;">
                <!-- Signature header and Driver name   -->
                <tr width="100%">
                  <td width="25%">
                    <p style="width: 100%; font-size: 18px; font-weight: 700;">
                      Signature(s):
                    </p>
                  </td>
                  <td width="25%">
                    <p style="width: 100%;">

                    </p>
                  </td>
                  <td width="20%">
                    <p style="width: 100%; margin-left: 20px;">
                      Driver's Name :
                    </p>
                  </td>
                  <td width="30%">
                    <p style="border-bottom: 0.5px solid #000; width: 100%;">
                      @if (!empty($data['driverName']))
                      {{ $data['driverName'] }}
                      @endif
                    </p>
                  </td>
                </tr>
                <!-- Carrier Signature and Truck Number  -->
                <tr width="100%">
                  <td width="15%">
                    <p style="width: 100%;">
                      Carrier Signature :
                    </p>
                  </td>
                  <td width="35%">
                    <p style="border-bottom: 0.5px solid #000; width: 100%;">

                    </p>
                  </td>
                  <td width="20%">
                    <p style="width: 100%; margin-left: 20px;">
                      Truck Number :
                    </p>
                  </td>
                  <td width="30%">
                    <p style="border-bottom: 0.5px solid #000; width: 100%;">
                      @if (!empty($data['truckNumber']))
                      {{ $data['truckNumber'] }}
                      @endif
                    </p>
                  </td>
                </tr>
                <!-- Carrier name and Other Info -->
                <tr width="100%">
                  <td width="15%">
                    <p style="width: 100%;">
                      Carrier Name :
                    </p>
                  </td>
                  <td width="35%">
                    <p style="border-bottom: 0.5px solid #000; width: 100%;">
                      @if (!empty($data['carrier']['name'] ))
                      {{ $data['carrier']['name'] }}
                      @endif
                    </p>
                  </td>
                  <td width="20%">
                    <p style="width: 100%; margin-left: 20px;">
                      Driver Phone :
                    </p>
                  </td>
                  <td width="30%">
                    <p style="border-bottom: 0.5px solid #000; width: 100%;">
                      @if (!empty($data['driverPhone']))
                      {{ $data['driverPhone'] }}
                      @endif
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
        <!-- Footer block : END : Amount, Instruction , Disclaimer , Signature -->
    </table>
  </div>
</body>

</html>
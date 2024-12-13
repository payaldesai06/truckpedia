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
          <div style="margin-bottom: 15px;">
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
                  <table cellpadding="0" cellspacing="0" border="0" style="width:100%;" width="100%">
                    <tr>
                      <th width="50%" style="padding: 8px 5px; border: 1px solid #000; text-align: left; vertical-align: middle;">
                        Load
                      </th>
                      <td width="50%" style="
                          padding: 8px 5px;
                          border-right: 1px solid #000;
                          text-align: left; vertical-align: middle;
                          border: 1px solid #000;
                        ">
                        {{ $data['loadNumber'] }} <!-- Load Number : Variable -->
                      </td>
                    </tr>
                    <tr>
                      <th width="50%" style="padding: 8px 5px; border: 1px solid #000; text-align: left; vertical-align: middle;">
                        Reference
                      </th>
                      <td width="50%" style="padding: 8px 5px; border: 1px solid #000; text-align: left; vertical-align: middle;">
                        {{ $data['loadReference'] }} <!-- Customer Load : Variable -->
                      </td>
                    </tr>
                    <tr>
                      <th width="50%" style="padding: 8px 5px; border: 1px solid #000; text-align: left; vertical-align: middle;">
                        Order Type
                      </th>
                      <td width="50%" style="padding: 8px 5px; border: 1px solid #000; text-align: left; vertical-align: middle;">
                        {{ $data['orderType'] }} <!-- Order Type - Import, Export, or Reposition : Variable -->
                      </td>
                    </tr>
                    <tr>
                      <th width="50%" style="padding: 8px 5px; border: 1px solid #000; text-align: left; vertical-align: middle;">
                        Service Type
                      </th>
                      <td width="50%" style="padding: 8px 5px; border: 1px solid #000; text-align: left; vertical-align: middle;">
                        {{ $data['serviceType'] }} <!-- Service Type - Live, No touch, Drop & Hook : Variable -->
                      </td>
                    </tr>
                  </table>
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
            font-weight: 400;">
            <!-- Service Notice -->
            <div style="padding: 10px;">
              <p style="font-size: 16px; font-weight: 600">Service Notice:</p>
              <p style="font-size: 14px">
                <!-- Service Notice : Variable -->
                {{$data['serviceNotice']}} to <b>{{ $data['company']['name'] }}</b> within 24 hours after completing a job.
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
              <th class="th" width="50%">
                <p style="padding: 0 10px; font-size: 16px; font-weight: 600; text-align: left;">
                  Pickup(s):</p>
              </th>
              <!-- Deliveries -->
              <th class="th" width="50%">
                <p style="padding: 0 10px; font-size: 16px; font-weight: 600; text-align: left;">
                  Delivery(ies):</p>
              </th>
            </tr>
            <!-- Loop for Pick Up and delivery -->
            <!-- Use the code inside the comment "Loop Start and Loop End" to loop the pickup and delivery addresses -->
            <!-- Loop Start  -->
            <tr>
              <td class="td" style="vertical-align:top">
                <ol style="list-style: auto;">
                  @foreach ($data['shippers'] as $shipper)
                  <li style="margin-bottom: 10px;">
                    <span style="display: block;">{{
                      $shipper['shipper_name']
                      . ', ' . printAddressHelper(
                        $shipper['address'],
                        $shipper['city'],
                        $shipper['state'],
                        $shipper['zip_code']) }}</span>
                    <span style="display: block;">Date:
                      {{ $shipper['shipping_date'] ?? '' }}
                      @if (!empty($shipper['shipping_time']))
                      {{ $shipper['shipping_time'] }}
                      @endif
                      @if(!empty($shipper['shipping_end_date']) && $shipper['shipping_end_date'] != $shipper['shipping_date'])
                      - {{ $shipper['shipping_end_date'] }} {{ $shipper['shipping_end_time'] ?? '' }}
                      @elseif(!empty($shipper['shipping_end_time']))
                      - {{ $shipper['shipping_end_time'] }}
                      @endif
                    </span>
                    @if (!empty($shipper['contact_number']) ||
                    !empty($shipper['contact_person']))
                    <span style="display: block;">
                      @if (!empty($shipper['contact_person']))
                      Contact: {{ $shipper['contact_person'] }} &nbsp;
                      @endif
                      @if (!empty($shipper['contact_number']))
                      Phone: {{ $shipper['contact_number'] }}
                      @endif
                    </span>
                    @endif
                    @if (!empty($shipper['freight_weight']) ||
                    !empty($shipper['freight_qty']))
                    <span style="display: block;">
                      @if (!empty($shipper['freight_weight']))
                      Weight: {{ round($shipper['freight_weight'], 2) }}
                      @if (!empty($shipper['weight_unit']))
                      {{$shipper['weight_unit']}}
                      @endif
                      &nbsp;
                      @endif
                      @if (!empty($shipper['freight_qty']))
                      Qty: {{ round($shipper['freight_qty']) }}
                      @if (!empty($shipper['qty_unit']))
                      {{$shipper['qty_unit']}}
                      @endif
                      @endif
                    </span>
                    @endif
                    @if(!empty($shipper['freightEquipmentType']) ||
                    !empty($shipper['freight_description']))
                    <span style="display: block;">
                      @if (!empty($shipper['freightEquipmentType']))
                      Equipment #: {{ $shipper['freightEquipmentType'] }} &nbsp;
                      @endif
                      @if (!empty($shipper['freight_description']))
                      Description: {{ $shipper['freight_description'] }} &nbsp;
                      @endif
                    </span>
                    @endif
                    @if (!empty($shipper['additionalFreightDetails']))
                    @if (!empty($shipper['additionalFreightDetails']->a))
                    @foreach ($shipper['additionalFreightDetails']->a as $detail)
                    @if (!empty($detail->e) || !empty($detail->q))
                    <span style="display: block;">
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
                    @if (!empty($detail->u) || !empty($detail->d))
                    <span style="display: block;">
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
                    @if (!empty($shipper['temperature']) || !isNullOrEmptyStr($shipper['container']) ||
                    !empty($shipper['shipper_reference']))
                    <span style="display: block;">
                      @if (!empty($shipper['shipper_reference']))
                      PU#: {{ $shipper['shipper_reference'] }} &nbsp;
                      @endif
                      @if (!isNullOrEmptyStr($shipper['container']))
                      Container #: {{ $shipper['container'] }} &nbsp;
                      @endif
                      @if (!empty($shipper['temperature']))
                      Temperature: {{ $shipper['temperature'] }}
                      @endif
                    </span>
                    @endif
                    @if(!empty($shipper['shipper_note']))
                    <span style="display: block;">Note: {{$shipper['shipper_note']}}</span>
                    @endif
                  </li>
                  @endforeach
                </ol>
              </td>
              <td class="td" style="vertical-align:top">
                <ol style="list-style: auto;">
                  @foreach ($data['receivers'] as $receiver)
                  <li style="margin-bottom: 10px;">
                    <span style="display: block;">{{
                      $receiver['receiver_name']
                      . ', ' . printAddressHelper(
                        $receiver['address'],
                        $receiver['city'],
                        $receiver['state'],
                        $receiver['zip_code'])
                       }}</span>
                    <span style="display: block;">Date:
                      {{ $receiver['delivery_date'] ?? '' }}
                      @if (!empty($receiver['delivery_time']))
                      {{ $receiver['delivery_time'] }}
                      @endif
                      @if(!empty($receiver['delivery_end_date']) && $receiver['delivery_end_date'] != $receiver['delivery_date'])
                      - {{ $receiver['delivery_end_date'] }} {{ $receiver['delivery_end_time'] ?? '' }}
                      @elseif(!empty($receiver['delivery_end_time']))
                      - {{ $receiver['delivery_end_time'] }}
                      @endif
                    </span>
                    @if (!empty($receiver['contact_number']) ||
                    !empty($receiver['contact_person']))
                    <span style="display: block;">
                      @if (!empty($receiver['contact_person']))
                      Contact: {{ $receiver['contact_person'] }} &nbsp;
                      @endif
                      @if (!empty($receiver['contact_number']))
                      Phone: {{ $receiver['contact_number'] }}
                      @endif
                    </span>
                    @endif
                    @if (!isNullOrEmptyStr($receiver['receiver_reference']))
                    Delivery #: {{ $receiver['receiver_reference'] }} &nbsp;
                    @endif
                    @if(!empty($receiver['receiver_note']))
                    <span style="display: block;">Note: {{$receiver['receiver_note']}}</span>
                    @endif
                  </li>
                  @endforeach
                </ol>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Body Block : START  -->
      <!-- Row 1 : 3 Block  -->
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
              <!-- P. O. or P/U Number (s)  -->
              <th width="50%" height="30px" style="border-right: 1px solid #000; text-align: left; padding-left: 10px;">
                <p style="font-size: 16px; font-weight: 600;">P. O. or P/U Number (s)</p>
              </th>
              <!-- Count -->
              <th width="50%" height="30px" style="border-right: 1px solid #000; text-align: left; padding-left: 10px;">
                <p style="font-size: 16px; font-weight: 600;">Count</p>
              </th>
            </tr>
            <tr>
              <!-- P. O. or P/U Number (s)  -->
              <td width="50%" height="30px" style="border-right: 1px solid #000; text-align: center; vertical-align: middle;">
                <p style="text-align: left; padding-left: 12px;">
                  {{$data['pickups']}}
                </p>
              </td>
              <!-- Count -->
              <td width="50%" height="30px" style="border-right: 1px solid #000; text-align: center; vertical-align: middle;">
                <p style="text-align: left; padding-left: 12px;">
                  {{$data['counts']}}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Row 2 : 3 Block  -->
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
              <!-- Loaded Weight  -->
              <th width="50%" height="30px" style="border-right: 1px solid #000; text-align: left; padding-left: 10px;">
                <p style="font-size: 16px; font-weight: 600;">Weight</p>
              </th>
              <!-- Temperature -->
              <th width="50%" height="30px" style="border-right: 1px solid #000; text-align: left; padding-left: 10px;">
                <p style="font-size: 16px; font-weight: 600;">Temperature</p>
              </th>
            </tr>
            <tr>
              <!-- Loaded Weight  -->
              <td width="50%" height="30px" style="border-right: 1px solid #000; text-align: center; vertical-align: middle;">
                <p style="text-align: left; padding-left: 12px;">
                  {{$data['weights']}}
                </p>
              </td>
              <!-- Temperature -->
              <td width="50%" height="30px" style="border-right: 1px solid #000; text-align: center; vertical-align: middle;">
                <p style="text-align: left; padding-left: 12px;">
                  {{$data['temperatures']}}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Row 3 : 4 Block  -->
      <tr>
        <td>
          <table style="
                border: 1px solid #000;
                border-bottom: 0.5px solid #000;
                border-top: 0.5px solid #000;
                color: rgb(0, 0, 0);
                width: 100%;
                " cellpadding="0" cellspacing="0" border="0">
            <tr>
              <!-- Vessel  -->
              <th width="25%" style="border-right: 1px solid #000; padding-left: 10px;">
                <p style="font-size: 16px; font-weight: 600; text-align: left;">Vessel</p>
              </th>
              <!-- Arrival Date -->
              <th width="25%" style="border-right: 1px solid #000; padding-left: 10px">
                <p style="font-size: 16px; font-weight: 600; text-align: left;">Arrival Date</p>
              </th>
              <!-- Last Free Day -->
              <th width="25%" style="border-right: 1px solid #000; padding-left: 10px">
                <p style="font-size: 16px; font-weight: 600; text-align: left;">Last Free Day</p>
              </th>
              <!-- Document Number -->
              <th width="25%" height="30px" style="">
                <p style="font-size: 16px; font-weight: 600; text-align: left; padding-left: 10px">BOL Number</p>
              </th>
            </tr>
            <tr>
              <!-- Vessel  -->
              <td width="25%" height="30px" style="border-right: 1px solid #000; text-align: center; vertical-align: middle;padding-left: 10px">
                <p style=" font-size: 14px;text-align: left">{{$data['vessel']}}</p>
              </td>
              <!-- Arrival Date -->
              <td width="25%" height="30px" style="border-right: 1px solid #000; text-align: center; vertical-align: middle;padding-left: 10px">
                <p style=" font-size: 14px;text-align: left">{{$data['arrivalDate']}}</p>
              </td>
              <!-- Last Free Day -->
              <td width="25%" height="30px" style="border-right: 1px solid #000; text-align: center; vertical-align: middle;padding-left: 10px">
                <p style=" font-size: 14px;text-align: left">{{$data['lastFreeDate']}}</p>
              </td>
              <!-- Document Number -->
              <td width="25%" height="30px" style="text-align: center; vertical-align: middle;padding-left: 10px">
                <p style=" font-size: 14px;text-align: left">{{$data['bolNumber']}}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Row 4 : Picked up and dropped of equipment  -->
      <tr>
        <td>
          <table style="
                border: 1px solid #000;
                border-top: 0.5px solid #000;
                border-bottom: 0.5px solid #000;
                color: rgb(0, 0, 0);
                width: 100%;
                " cellpadding="10 0" cellspacing="0" border="0">
            <tr style="width: 100%">
              <!-- Picked Up Equipment  -->
              <td width="50%" style="border-right: 1px solid #000;">
                <table style="width: 100%;">
                  <tr>
                    <th width="100%" style="font-size: 16px; font-weight: 600; margin-left: 3px; padding-top: 0px; padding-bottom: 0px; text-align: left; padding-left: 10px">
                      Picked Up Equipment
                    </th>
                  </tr>
                </table>
                <table style="width: 100%;">
                  <tr>
                    <th width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 15px; font-weight: 600;">Number</p>
                    </th>
                    <th width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 15px; font-weight: 600;">Size</p>
                    </th>
                    <th width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 15px; font-weight: 600;">Type</p>
                    </th>
                  </tr>
                </table>
                <table style="width: 100%;">
                  <tr>
                    <td width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 14px;">{{$data['pickedUpEquipmentNumber']}}</p>
                    </td>
                    <td width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 14px;">{{$data['pickedUpEquipmentSize']}}</p>
                    </td>
                    <td width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 14px;">{{$data['pickedUpEquipmentType']}}</p>
                    </td>
                  </tr>
                </table>
              </td>
              <!-- Dropped Off Equipment  -->
              <td width="50%" style="border-right: 1px solid #000;">
                <table style="width: 100%;">
                  <tr>
                    <th width="100%" style="font-size: 16px; font-weight: 600; margin-left: 3px; padding-top: 0px; padding-bottom: 0px; text-align: left; padding-left: 10px">
                      Dropped Off Equipment
                    </th>
                  </tr>
                </table>
                <table style="width: 100%;">
                  <tr>
                    <th width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 15px; font-weight: 600;">Number</p>
                    </th>
                    <th width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 15px; font-weight: 600;">Size</p>
                    </th>
                    <th width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 15px; font-weight: 600;">Type</p>
                    </th>
                  </tr>
                </table>
                <table style="width: 100%;">
                  <tr>
                    <td width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 14px;">{{$data['droppedOffEquipmentNumber']}}</p>
                    </td>
                    <td width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 14px;">{{$data['droppedOffEquipmentSize']}}</p>
                    </td>
                    <td width="33.33%" style="text-align: center; vertical-align: middle;">
                      <p style="font-size: 14px;">{{$data['droppedOffEquipmentType']}}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
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
                ${{ $data['charges']['hauling_fee'] }}
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
                ${{ $data['charges']['fuel_surcharge'] }}
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
                ${{ $accessorialFee['rate'] }}
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
                ${{ $accessorialDeduction['rate'] }}
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
                -${{ $data['discount'] }}
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
                  ${{ $data['totalAmount'] }}
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
                        <b>{{ $data['company']['name'] }}</b>.
                      </td>
                      <td width="50%" style="font-size: 13px; font-weight: 400; padding-left: 10px;vertical-align:top;">
                        Invoices must contain: Rate Confirmation, Bill Of Lading, Proof Of Delivery, Equipment Interchange
                        Receipts (if Inter-modal); and proof of any accessorial charge, including but not limited to lumper,
                        chassis, etc, in connection with the shipment and with prior approval by
                        <b>{{ $data['company']['name'] }}</b>.
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
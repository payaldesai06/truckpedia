<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Invoice</title>
  <style>
    @font-face {
        font-family: 'Calibri';
        src: url({{ storage_path("fonts/calibri_bold.ttf") }}) format("truetype");
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Calibri';
        src: url({{ storage_path("fonts/calibri_bold_italic.ttf") }}) format("truetype");
        font-weight: 700;
        font-style: italic;
    }
    @font-face {
        font-family: 'Calibri';
        src: url({{ storage_path("fonts/calibri_regular.ttf") }}) format("truetype");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Calibri';
        src: url({{ storage_path("fonts/calibri_italic.ttf") }}) format("truetype");
        font-weight: 400;
        font-style: italic;
    }

    /*========================================================
        DARK LAYOUT
=========================================================*/
    * {
      box-sizing: border-box;
    }

    html,
    /* Available fonts are defined here. , I also tried 'Arial' and 'Times New Roman', but they don't work. Only 'Calibri' works, so weird. */
    body {
      font-size: 12px !important;
      font-family: 'Calibri', Times-Roman, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: left;
      background-color: #fff;
    }

    .invoice-page {
      padding: 2.2rem;
    }

    .invoice-page .recipient-contact i,
    .invoice-page .company-contact i {
      padding-right: 0.2rem;
      position: relative;
      top: 2px;
    }

    .invoice-page .recipient-info p,
    .invoice-page .company-info p,
    .invoice-page .company-contact p,
    .invoice-page .recipient-contact p {
      line-height: 2;
      margin-bottom: 0;
    }

    .invoice-page .invoice-items-table table,
    .invoice-page .invoice-total-table table {
      border: 0.5px solid #8e8e8e33;
    }

    #invoice-items-details thead {
      border: 0.1px dotted #8e8e8e33;
    }

    #invoice-company-details {
      /*height: 395px;*/
      width: 100%;
    }

    @if($integrationPartner == 1)
    #invoice-company-details .block-1 {
      float: left;
      width: 40%;
      text-align: left;
    }

    #invoice-company-details .block-3 {
      width: 15%;
      float: left;
      text-align: left;
    }

    #invoice-company-details .block-2 {
      float: right;
      width: 45%;
      text-align: right;
    }

    @else
    #invoice-company-details .block-1 {
      float: left;
    }

    #invoice-company-details .block-2 {
      float: right;
      text-align: right;
      width: 60%;
    }
    @endif

    #invoice-total-details td:last-child {
      text-align: right;
    }

    body {
      background-color: #ffffff;
    }

    @media print {

      .content-header,
      .buy-now,
      .btn-print,
      .footer,
      .open,
      .main-menu,
      .invoice-print {
        display: none;
      }

      .app-content,
      #invoice-template,
      .navbar-container,
      .navbar-wrapper,
      .header-navbar,
      .invoice-print,
      .content-wrapper {
        margin: 0 !important;
        padding: 0 !important;
      }

      #invoice-footer {
        position: relative;
        top: -80px !important;
      }

      #invoice-company-details,
      #invoice-footer {
        margin-top: 5rem !important;
      }

      .table-responsive {
        -ms-overflow-style: none;
      }
    }

    @page {
      margin: 10px;
    }

    .address p {
      line-height: 8px;
    }

    .clearfix::after {
      display: block;
      clear: both;
      content: "";
    }

    /**
* shippers
 */
    #shippers {
      width: 100%;
    }

    #shippers .left-side {
      float: left;
    }

    #shippers .right-side {
      float: right;
      text-align: right;
    }

    #shippers .left-side {
      width: 70%;
    }

    #shippers .right-side {
      width: 30%;
    }

    /**
* receivers
 */
    #receivers {
      width: 100%;
    }

    #receivers .left-side {
      float: left;
    }

    #receivers .right-side {
      float: right;
      text-align: right;
    }

    #receivers .left-side {
      width: 70%;
    }

    #receivers .right-side {
      width: 30%;
    }

    .float-right {
      float: right;
    }

    .w-50-percent {
      width: 50%;
    }

    .font-weight-bold {
      font-weight: bold;
    }

    .text-right {
      text-align: right;
    }
  </style>
  <!-- END: Page CSS-->
</head>

<body>
  <div class="content-wrapper">
    <section class="invoice-page" style="padding: 2.2rem; display: block">
      <div id="invoice-template" style="min-height: 1px; padding: 1.25rem;">
        <!-- Invoice Company Details -->
        <div id="invoice-company-details" class="">
          <div style="display: flex; justify-content: space-between; flex-direction: row; width: 100%">
            <div class="block-1">
              <div class="block-1">
                <div style="margin-bottom: 10px;">
                  @if($companyImageUrl)
                  <img src="{{$companyImageUrl}}" style="object-fit: contain; max-height: 75px; max-width: 75px;" />
                  @endif
                </div>
                <div>
                  <table>
                    @if($carrier_name)
                    <tr>
                      <td style="font-weight: 700; font-size: 1.2rem; color: red">
                        Factoring Company:
                      </td>
                    </tr>
                    @endif
                    <tr>
                      <td style="font-weight: 700; font-size: 1.2rem; white-space: nowrap">
                        {{ $business_name }}
                      </td>
                    </tr>
                    <tr>
                      <td style="white-space: nowrap">{{ $address }}</td>
                    </tr>
                    <tr>
                      <td style="white-space: nowrap">{{ $city }}, {{ $state }} {{ $zipcode }}</td>
                    </tr>
                  </table>

                  <div class="mt-50">
                    <div style="margin-top: 10px; white-space: nowrap;display: inline-block;">
                      <img src="assets/images/ico/mail.png" style="vertical-align: middle;display: inline-block;">
                      <span style="margin-left: 5px;vertical-align: middle;display: inline-block;">{{ $business_email }}</span>
                    </div>
                  </div>
                  <div class="mt-50">
                    <div style="margin-top: 0px;margin-bottom: 10px;white-space: nowrap;display: inline-block;">
                      <img src="assets/images/ico/phone.png" style="vertical-align: middle;display: inline-block;">
                      <span style="vertical-align: middle;display: inline-block;">{{ $phone_number }}</span>
                    </div>
                  </div>
                </div>

              </div>
              <!-- <div class="block-2">
              @if($companyImageUrl)
                <img src="{{$companyImageUrl}}" style="object-fit: contain; max-height: 75px; max-width: 75px;" />
              @endif
              </div> -->
              <div class="clearfix"></div>
              <div style="margin-top: 0.5rem !important">
                <table style="margin-top: 0.25rem !important">
                  <td style=" margin-bottom: 0.5rem;
                    font-size: 1.2rem;
                    line-height: 1.2;
                    font-weight: 700;
                    margin-top: 0;">
                    Recipient
                  </td>
                </table>

                <table style="margin-top: 0.25rem !important">
                  <tr>
                    <td style="font-weight: 700; font-size: 1.2rem">
                      {{ $customer->company_name }}
                    </td>
                  </tr>
                </table>

                <div class="mt-50">
                  <div style="margin-top: 10px; white-space: nowrap;display: inline-block;">
                    <img src="assets/images/ico/mail.png" style="vertical-align: middle;display: inline-block;">
                    <span style="vertical-align: middle;display: inline-block;">{{ $customer->billing_email }}</span>
                  </div>

                </div>
                <div class="mt-50">
                  <div style="margin-top: 10px; white-space: nowrap;margin-bottom: 20px; display: inline-block;">
                    <img src="assets/images/ico/phone.png" style="vertical-align: middle;display: inline-block;">
                    <span style="vertical-align: middle;display: inline-block;">{{ $customer->billing_phone_number }}</span>
                  </div>
                </div>
              </div>
            </div>
            {{-- </div> --}}
            @if($integrationPartner == 1)
            <div class="block-3">
              <table>
                <div style="margin-bottom: 10px;">
                  <img src="images/custom/rts.jpg" style="object-fit: contain; max-height: 100px; max-width: 100px;" />
                </div>
              </table>
            </div>
            @endif
            <div class="block-2">
              <table style="margin-left: auto !important">
                @if($carrier_name)
                <tr>
                  <th style="font-weight: bold; font-size: 1.2rem; color: red">
                    Carrier:
                  </th>
                  <td style="white-space: nowrap">
                    {{ $carrier_name }}
                  </td>
                </tr>
                @endif
                <tr>
                  <th>Invoice #:</th>
                  <td style="white-space: nowrap">
                    {{ $loadUniqueId }}
                  </td>
                </tr>
                <tr>
                  <th>Date:</th>
                  <td>{{ formatDateInAmericanDateFormat($invoiceDate) }}</td>
                </tr>
                <tr>
                  <th>Terms:</th>
                  <td>Net {{ $customer->payment_terms_day }} days</td>
                </tr>
                <tr>
                  <th>Ref # (W/O):</th>
                  <td style="white-space: nowrap">
                    {{ $loadReferenceId }}
                  </td>
                </tr>

              </table>
              <div>
                @if(!is_null($remitToCompany))
                @if(!$carrier_name)
                <div style="padding-top: 130px !important;">
                  @else
                  <div style="padding-top: 170px !important;">
                    @endif
                    <div>
                      <div style="text-align: left">
                        <label class="font-weight-bold">Please</label> <br />
                        <label class="font-weight-bold">Remit To:</label>
                        <span>{{$remitToCompany['name']}}</span>
                        <br />
                        <span style="margin-left: 58px"> {{$remitToCompany['addressLine1']}}</span>
                        <br />
                        <span style="margin-left: 58px"> {{$remitToCompany['city']}}, {{$remitToCompany['state']}} {{$remitToCompany['zip']}} </span>

                        @if(!empty($remitToCompany['email']))
                        <br />
                        <label class="font-weight-bold">Email:</label>
                        <span>{{$remitToCompany['email']}}</span>
                        @endif
                        @if(!empty($remitToCompany['phone']))
                        <br />
                        <label class="font-weight-bold">Tel:</label>
                        <span>{{$remitToCompany['phone']}}</span>
                        @endif
                        <br /><br />
                        @if(!is_null($iccRegulations))
                        <label class="font-weight-bold" style="font-size: 10px!important;white-space: nowrap;">
                          {{ $iccRegulations }}
                        </label>
                        @endif
                      </div>
                    </div>
                    {{-- <div class="clearfix"></div> --}}
                    @endif
                  </div>
                  {{--
                    <h1>Invoice</h1>
                    --}} {{--
            <h4>#{{ $loadUniqueId }}</h4>
                  --}} {{--
            <div class="invoice-details mt-2">
              --}} {{--
              <h5 style="font-size: 1.2rem">
                {{ $business_name }}
                  </h5>
                  --}} {{--
              <div class="address mt-2">
                --}} {{--
                <p>{{ $address }}</p>
                  --}} {{--
                <p>{{ $city }}</p>
                  --}} {{--
                <p>{{ $state }}</p>
                  --}} {{--
                <p>{{ $zipcode }}</p>
                  --}} {{--
              </div>
              --}} {{--
            </div>
            --}} {{--
            <div class="company-contact">
              --}} {{--
              <p>
                --}} {{--
                <img
                  src="assets/images/ico/mail.png"
                  style="margin-top: 7px"
                />--}} {{-- {{ $business_email }}--}} {{--
              </p>
              --}} {{--
              <p>
                --}} {{--
                <img
                  src="assets/images/ico/phone.png"
                  style="margin-top: 3px"
                />--}} {{-- {{ $phone_number }}--}} {{--
              </p>
              --}} {{--
            </div>
            --}}
                </div>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

          <!--/ Invoice Company Details -->
          <div>
            <div style="padding-top: 0;
            margin-top: 0">
              @if(!empty($driver))
              <span><strong>Driver:</strong></span>
              <span>{{ $driver }} </span>
              @endif
              @if(!empty($truckNumber))
              <span><strong>Truck #:</strong></span>
              <span>{{ $truckNumber }} </span>
              @endif
              @if(!empty($trailerNumber))
              <span><strong>Trailer #:</strong></span>
              <span>{{ $trailerNumber }} </span>
              @endif
            </div>
            <br />
            {{-- @if(!is_null($remitToCompany) && ($remitToCompany['name'] != "Product Distribution Company") && ($carrier_name))
         <div style="padding-top: 320px;">
          @else --}}
            <div>
              {{-- @endif --}}

              <table style="margin-top: 0.25rem !important">
                <td style=" margin-bottom: 0.5rem;
                    font-size: 1.2rem;
                    line-height: 1.2;
                    font-weight: 700;
                    margin-top: 0;">
                  LOAD # {{ $loadUniqueId }}
                </td>
              </table>
              {{-- Start Shippers --}} @if(count($shippers) > 0)
              <div id="shippers" style="width: 100%">
                @foreach($shippers as $shipper)
                <div class="mt-50 w-100" style="
                width: 100%;
                border-color: #343a40;
                border-top: 1px solid #dee2e6;
                display: inline-block;
              ">
                  <div class="left-side">
                    <table>
                      <tr style="vertical-align: text-top">
                        <td>
                          <strong>Shipper {{$loop->iteration}}:</strong>
                        </td>
                        <td>{{$shipper->shipper_name}}</td>
                      </tr>
                      <tr style="vertical-align: text-top">
                        <td><strong>Address: </strong></td>
                        <td>
                          {{$shipper->address}}, {{$shipper->city}},
                          {{$shipper->state}},
                          {{$shipper->zip_code}}
                        </td>
                      </tr>
                    </table>

                    <table>
                      <tr style="vertical-align: text-top">
                        <td class="">
                          <strong>Quantity:</strong>
                        </td>
                        <td class="">
                          {{floatval($shipper->i_totalQty)}}
                        </td>

                        <td style="margin-left: 0.5rem">
                          <strong>Pick Up#:</strong>
                        </td>
                        <td class="">
                          {{$shipper->shipper_reference}}
                        </td>

                        <td style="margin-left: 0.5rem">
                          <strong>Weight:</strong>
                        </td>
                        <td class="">
                          {{floatval($shipper->i_totalWeight)}}
                        </td>

                        @if(!is_null($shipper->container) && $shipper->container != "")
                        <td style="margin-left: 0.5rem">
                          <strong>Container #:</strong>
                        </td>
                        <td class="">
                          {{$shipper->container}}
                        </td>
                        @endif

                      </tr>
                    </table>
                  </div>

                  <div class="right-side">
                    <table style="margin-left: auto">
                      <tr>
                        <td style="text-align: right !important">
                          <strong>Date:</strong>
                        </td>
                        <td>
                          {{ formatDateInAmericanDateFormat($shipper->shipping_date) }}
                          {{ $shipper->shipping_time ? $shipper->shipping_time->format(config('constant.time_format')) : ''}}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="clearfix"></div>
                @endforeach
              </div>
              @endif {{-- End Shippers --}}
            </div>

            {{-- Start Receivers --}} @if(count($receivers) > 0)
            <div style="width: 100%" id="receivers">
              @foreach($receivers as $receiver)
              <div class="mt-50 w-100" style="
              width: 100%;
              border-color: #343a40;
              border-top: 1px solid #dee2e6;
              display: inline-block;
            ">
                <div class="left-side">
                  <table>
                    <tr style="vertical-align: text-top">
                      <td style="vertical-align: text-top">
                        <strong>Receiver {{$loop->iteration}}:</strong>
                      </td>
                      <td>{{$receiver->receiver_name}}</td>
                    </tr>
                    <tr style="vertical-align: text-top">
                      <td><strong>Address:</strong></td>
                      <td>
                        {{$receiver->address}}, {{$receiver->city}},
                        {{$receiver->state}},
                        {{$receiver->zip_code}}
                      </td>
                    </tr>
                    <tr style="vertical-align: text-top">
                      <td><strong>Delivery #:</strong></td>
                      <td>{{$receiver->receiver_reference}}</td>
                    </tr>
                  </table>
                </div>

                <div class="right-side">
                  <table style="margin-left: auto">
                    <tr>
                      <td><strong>Date:</strong></td>
                      <td>
                        {{ formatDateInAmericanDateFormat($receiver->delivery_date) }}
                        {{$receiver->delivery_time ? $receiver->delivery_time->format(config('constant.time_format')) :''}}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="clearfix"></div>
              @endforeach
            </div>
            @endif
            <!-- -- End Receivers -- -->

            <!-- Invoice Items Details -->
            <div id="invoice-items-details" class="invoice-items-table" style="padding-top: 0.25rem">
              <div style="
              display: flex;
              -ms-flex-wrap: wrap;
              flex-wrap: wrap;
              margin-right: -15px;
              margin-left: -15px;
              width: 100%;
            ">
                <div style="
                display: block;
                width: 100%;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
                position: relative;
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
              ">
                  <table style="
                  border-collapse: collapse;
                  width: 100%;
                  margin-bottom: 1rem;
                  color: #212529;
                  border: 0.5px solid #8e8e8e33;
                ">
                    <thead style="border: 0.1px dotted #8e8e8e33">
                      <tr>
                        <th style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                        text-align: left;
                      ">
                          CHARGES
                        </th>
                        <th style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                        text-align: left;
                      ">
                          DESCRIPTION
                        </th>
                        <th style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                        text-align: left;
                      ">
                          QTY
                        </th>
                        <th style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                        text-align: left;
                      ">
                          RATE
                        </th>

                        <th style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                        text-align: right;
                      ">
                          AMOUNT
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      @if (!empty($charges))
                      @foreach ($charges as $charge)
                      <tr>
                        <td style="border: 0; padding: 0.25rem; vertical-align: top">
                          {{$charge['name']}}
                        </td>
                        <td style="border: 0; padding: 0.25rem; vertical-align: top">
                          {{ $charge['description']}}
                        </td>
                        <td style="border: 0; padding: 0.25rem; vertical-align: top">
                          {{ $charge['qty'] }}
                        </td>
                        <!-- rate charges -->
                        <td style="border: 0; padding: 0.25rem; vertical-align: top">
                          {{ $charge['rate'] }}
                        </td>
                        <td style="
                            border: 0;
                            vertical-align: bottom;
                            padding: 0.25rem;
                            text-align: right;
                          ">
                          <span>{{$charge['amount']}}</span>
                        </td>
                      </tr>
                      @endforeach
                      @endif
                      @if($showDispatcherFeeOnInvoice)
                      <tr>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      ">
                          Dispatcher Fee
                        </td>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      "></td>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      "></td>
                      <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      "></td>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                        text-align: right;
                      ">
                          <span>{{ getCurrencyInNumberFormatWithDollarPrefix(-1 * ($dispactherCommissions ?? 0)) }}</span>
                        </td>
                      </tr>
                      @endif @if($showFactoringFeeOnInvoice)

                      <tr>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      ">
                          Factoring Fee
                        </td>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      "></td>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      "></td>
                      <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                      "></td>
                        <td style="
                        border: 0;
                        vertical-align: bottom;
                        padding: 0.25rem;
                        text-align: right;
                      ">
                          <span>{{ getCurrencyInNumberFormatWithDollarPrefix(-1 * ($factoringFee ?? 0)) }}</span>
                        </td>
                      </tr>
                      @endif
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div id="invoice-total-details">
              <div style="
              display: flex;
              -ms-flex-wrap: wrap;
              flex-wrap: wrap;
              margin-right: -15px;
              margin-left: -15px;
            ">
                <div style="
                position: relative;
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
              ">
                  <div style="
                  display: block;
                  width: 100%;
                  overflow-x: auto;
                  -webkit-overflow-scrolling: touch;
                ">
                    <table style="
                    border-collapse: collapse;
                    width: 100%;
                    margin-bottom: 1rem;
                    color: #212529;
                  ">
                      <tbody>
                        <tr>
                          <td style="
                            border: 0;
                            vertical-align: bottom;
                            padding: 0.25rem;
                            font-weight : bold;
                          ">
                            @if(!empty($laneCode))
                            {{ $laneCode }}
                            @endif
                          </td>
                          <td style="padding: 0.25rem; vertical-align: top;"></td>
                          <td style="padding: 0.25rem; vertical-align: top"></td>
                          <td style="
                            border: 0;
                            padding: 0.25rem;
                            vertical-align: top;
                            text-align: left !important;
                            width : 50px;
                          ">
                            <strong>Total</strong>
                          </td>
                          <td style="
                            border: 0;
                            padding: 0.25rem;
                            vertical-align: top;
                            text-align: right !important;
                          ">
                            <span>{{ getCurrencyInNumberFormatWithDollarPrefix($totalAmount) }}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            @if(!is_null($remitToCompany) && !$carrier_name)
          </div>
          @endif
  @if($melioPayment)
  <div class="clearfix" style="width : 100%; background: #eef1f6; padding-bottom : 0rem;">
      <div style="float:left; width : 70%; ">
        <div>
          <table>
            <tbody>
              <tr>
                <td style="padding-left : 1rem;">
                  @if($melioPayment['qrCode'])
                  <img src="{{$melioPayment['qrCode']}}" style="border: 2px solid #d9dee8; border-radius: 10px; width: 120px !important;" />
                  @endif
                </td>
                <td style="padding-left : 1rem;">
                  <p style="font-size: 24px !important; margin-top: 0px; margin-bottom: 0px; font-weight: 700; line-height: 1;">
                    Pay this invoice online
                  </p>
                  <p style="font-size: 16px !important; line-height: 1;">
                    Effortlessly pay with your card or bank. You can <br /> pay now or schedule a payment for later.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style="float:right; width : 25%; padding-top: 1rem;">
        <div style="
                            background: #7849ff;
                            width: 150px;
                            height: 30px;
                            font-size: 20px !important;
                            border-radius: 10px;
                            padding-bottom: 1rem !important;
                            padding-top: 0.5rem !important;
                          ">
          <a href="{{$melioPayment['url']}}" style="
                                text-decoration: none; 
                                color: #ffffff; 
                                margin-left: auto !important; 
                                margin-right: auto !important; 
                                padding-left : 2.8rem !important;
                              ">
            Pay online
          </a>
        </div>
        <div style="margin-top: 10px;">
          <img src="assets/images/ico/melio-banner-icons-small.png" width="150" />
        </div>
      </div>
  </div>
  </section>
  </div>
  @endif
</body>

</html>
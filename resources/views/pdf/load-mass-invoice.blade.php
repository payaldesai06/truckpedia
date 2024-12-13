<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mass Invoice</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/ico/favicon.ico">
</head>

<style>
  /*========================================================
        DARK LAYOUT
=========================================================*/

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(34, 41, 47, 0);
  }

  html,
  body {
    font-size: 13px;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', Helvetica, Arial, serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.45;
    color: #626262;
    text-align: left;
    background-color: #F8F8F8;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
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

  #invoice-items-details th {
    text-align: left;
  }

  #invoice-items-details td,
  #invoice-total-details td,
  #invoice-items-details th,
  #invoice-total-details th {
    font-size: 11px;
  }

  #invoice-company-details {
    /*height: 395px;*/
  }

  #invoice-company-details .block-1 {
    float: left;
    width: 50%;
  }

  #invoice-company-details .block-2 {
    float: right;
    width: 50%;
    text-align: right;
  }

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
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;

    }
  }

  @page {
    margin: 10px;
  }

  .address p {
    line-height: 8px;
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

  .card-body {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.5rem;
  }

  .font-weight-bold {
    font-weight: 700 !important;
  }

  .mt-50,
  .my-50 {
    margin-top: 0.5rem !important;
  }

  .mt-2,
  .my-2 {
    margin-top: 1.5rem !important;
  }

  .mt-1,
  .my-1 {
    margin-top: 1rem !important;
  }

  .ml-auto,
  .mx-auto {
    margin-left: auto !important;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: '';
  }

  .pt-1,
  .py-1 {
    padding-top: 1rem !important;
  }

  .row {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -14px;
    margin-left: -14px;
  }

  .col-7,
  .col-12 {
    position: relative;
    width: 100%;
    padding-right: 14px;
    padding-left: 14px;
  }

  .col-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #626262;
  }

  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #F8F8F8;
  }

  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #F8F8F8;
  }

  .table tbody+tbody {
    border-top: 2px solid #F8F8F8;
  }

  .table-borderless th,
  .table-borderless td,
  .table-borderless thead th,
  .table-borderless tbody+tbody {
    border: 0;
  }

  .text-right {
    text-align: right !important;
  }

  .offset-5 {
    margin-left: 41.66667%;
  }

  table {
    border-collapse: collapse;
  }

  section {
    display: block;
  }

  @media print {

    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }

    @page {
      size: a3;
    }

    body {
      min-width: 992px !important;
    }

    .table {
      border-collapse: collapse !important;
    }

    .table td,
    .table th {
      background-color: #FFFFFF !important;
    }

    .table-bordered th,
    .table-bordered td {
      border: 1px solid #DAE1E7 !important;
    }
  }
</style>

<body>
  <div class="content-wrapper">
    <section class="invoice-page" style="padding: 2.2rem;">
      <div id="invoice-template" class="card-body">
        <!-- Invoice Company Details -->
        <div id="invoice-company-details" class="">
          <div class="block-1">
            <div>
              <table>
                @if($carrier_name)
                <tr>
                  <td class="font-weight-bold" style="font-size: 1.2rem;color: red">
                    Factoring Company:
                  </td>
                </tr>
                @endif
                <tr>
                  <td class="font-weight-bold" style="font-size: 1.2rem;">
                    {{ $business_name }}
                  </td>
                </tr>
                <tr>
                  <td>{{ $address }}</td>
                </tr>
                <tr>
                  <td>
                    {{ $city }},
                    {{ $state }},
                    {{ $zipcode }}.
                  </td>
                </tr>
              </table>

              <div class="mt-50">
                <p>
                  <img src="assets/images/ico/mail.png" style="margin-top:4px;">
                  {{ $business_email }}
                </p>
                <p>
                  <img src="assets/images/ico/phone.png" style="margin-top:4px;">
                  {{ $phone_number }}
                </p>
              </div>
            </div>

            <div class="mt-2">
              <h3 style="">Recipient</h3>

              <table class="mt-1">
                <tr>
                  <td class="font-weight-bold" style="font-size: 1.2rem;">
                    {{ $customer->company_name }}
                  </td>
                </tr>
              </table>

              <div class="mt-50">
                <p>
                  <img src="assets/images/ico/mail.png" style="margin-top:4px;">
                  {{ $customer->email }}
                </p>
                <p>
                  <img src="assets/images/ico/phone.png">
                  {{ $customer->phone_number }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="block-2">
          <table class="ml-auto">
            @if($carrier_name)
            <tr>
              <th class="font-weight-bold" style="font-size: 1.2rem;color: red">Carrier:</th>
              <td style="white-space: nowrap">{{ $carrier_name }}</td>
            </tr>
            @endif
            <tr>
              <th style="text-align: left">Invoice #:</th>
              <td style="white-space: nowrap">{{ $invoiceNumber }}</td>
            </tr>
            <tr>
              <th style="text-align: left">Date:</th>
              <td>{{ $invoiceDate }}</td>
            </tr>
            <tr>
              <th style="text-align: left">Terms:</th>
              <td>Net {{ $customer->payment_terms_day }} days</td>
            </tr>
          </table>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
      <!--/ Invoice Company Details -->

      <!-- Invoice Items Details -->
      <div id="invoice-items-details" class="pt-1 invoice-items-table">
        <div class="row">
          <div class="table-responsive col-12">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>Load #</th>
                  <th>Reference #</th>
                  <th>Ship Date</th>
                  <th>Weight</th>
                  <th>Quantity</th>
                  <th>Description</th>
                  <th class="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                @foreach($loads as $load)
                <tr>
                  <td>{{$load->load_unique_id??""}}</td>
                  <td>{{$load->refrence_id??""}}</td>
                  <td style="white-space: nowrap">{{$load->loadShippers->first()->shipping_date??""}}</td>
                  <td>{{!empty($load->loadShippers) ? ($load->loadShippers->sum('freight_weight') ?? "") : ""}}</td>
                  <td>{{!empty($load->loadShippers) ? ($load->loadShippers->sum('freight_qty') ?? "") : ""}}</td>
                  <td>{{!empty($load->loadShippers) && !empty($load->loadReceivers)?
                      ($load->loadShippers->first()->city.', '. $load->loadShippers->first()->state.' to '.
                      $load->loadReceivers->last()->city.', '.$load->loadReceivers->last()->state
                       ):""}}</td>
                  <td class="text-right" style="white-space: nowrap;">
                    <span>{{$dollarSign}}</span>
                    <span>{{$load->total_amount}}</span>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="invoice-total-details" class="invoice-total-table">
        <div class="row">
          <div class="col-7 offset-5">
            <div class="table-responsive">
              <table class="table table-borderless text-right" style="border-collapse: collapse;">
                <tbody>
                  <tr>
                    <td style="border-bottom: 1px dotted #8e8e8e33;">
                      <strong>Total</strong>
                    </td>
                    <td style="border-bottom: 1px dotted #8e8e8e33;">
                      <span>{{$dollarSign}}</span>
                      <span>{{$loads->sum('total_amount')}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</body>

</html>
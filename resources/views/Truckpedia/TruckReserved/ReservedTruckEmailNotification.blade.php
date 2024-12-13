<html>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Truck Reserved</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/ico/favicon.ico">
</head>

<body>
  <div class="st-Email" style="border:0!important;margin:0!important;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;min-width:100%;width:100%;outline:0!important;text-decoration:none!important;" override="fix">
    <table class="st-Background" border="0" cellpadding="0" cellspacing="0" width="100%">

      <p>{{$data['carrierCompanyName'] . ","}}</p>
      <p>{{$data['reservingCompany']['business_name']}} has reserved a truck at the price of ${{$data['estimatedPrice']}} USD. Miles: {{$data['totalMiles']}} </p>
      @php
      $shipper = $data['shipper'];
      $receiver = $data['receiver'];
      @endphp
      @if(!empty($shipper))
      <p>Shipper:
        @if($shipper['shipper_name'])
        {{$shipper['shipper_name']}},
        @endif
        @if($shipper['address'])
        {{$shipper['address']}},
        @endif
        @if($shipper['city'])
        {{$shipper['city']}},
        @endif
        @if($shipper['state'])
        {{$shipper['state']}},
        @endif
        @if($shipper['zip_code'])
        {{$shipper['zip_code']}},
        @endif
        @if($shipper['shipping_date']) @ {{$shipper['shipping_date']}} @endif
        @if($shipper['shipping_time']) {{\Carbon\Carbon::parse($shipper['shipping_time'])->format(config('constant.time_format'))}} @endif
        @if($shipper['shipping_end_time'])- {{\Carbon\Carbon::parse($shipper['shipping_end_time'])->format(config('constant.time_format'))}}@endif
      </p>
      @endif
      @if(!empty($receiver))
      <p>Receiver:
        @if($receiver['receiver_name'])
        {{$receiver['receiver_name']}},
        @endif
        @if($receiver['address'])
        {{$receiver['address']}},
        @endif
        @if($receiver['city'])
        {{$receiver['city']}},
        @endif
        @if($receiver['state'])
        {{$receiver['state']}},
        @endif
        @if($receiver['zip_code'])
        {{$receiver['zip_code']}},
        @endif
        @if($receiver['delivery_date']) @ {{$receiver['delivery_date']}} @endif
        @if($receiver['delivery_time']) {{\Carbon\Carbon::parse($receiver['delivery_time'])->format(config('constant.time_format'))}} @endif
        @if($receiver['delivery_end_time'])- {{\Carbon\Carbon::parse($receiver['delivery_end_time'])->format(config('constant.time_format'))}}@endif
      </p>
      @endif
      <p>Carrier load reference: {{$data['carrierLoadReference']}}</p>
    </table>
  </div>
</body>

</html>
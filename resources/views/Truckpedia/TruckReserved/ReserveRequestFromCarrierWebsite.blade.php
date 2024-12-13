<html>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reserve Request From Carrier Website</title>
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/ico/favicon.ico">
  <style>
    p span {
      display: block;
    }
  </style>
</head>

<body>
  <div class="st-Email" style="border:0!important;margin:0!important;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;min-width:100%;width:100%;outline:0!important;text-decoration:none!important;" override="fix">
    <table class="st-Background" border="0" cellpadding="0" cellspacing="0" width="100%">

      <p>{{ $data['companyName'] . ',' }}</p>
      <p>
        @if(!empty($data['estimatedPrice']) || $data['estimatedPrice']===0)
        {{ $data['shipperBrokerDetails']['companyName'] }} wants to book a truck at the price of
        {{ $data['estimatedPrice'] }} USD for {{ $data['additionalInformation']['totalMiles'] }} miles.
        @else
        {{ $data['shipperBrokerDetails']['companyName'] }} wants to book a truck for {{ $data['additionalInformation']['totalMiles'] }} miles, please provide a quote.
        @endif
        @php
        $shipper = $data['pickupDetails'];
        $receiver = $data['deliveryDetails'];
        @endphp
        @if (!empty($shipper))
        <span>Shipper: {{ $shipper['city'] }}, {{ $shipper['state'] }}{{ isset($shipper['zipCode']) ? ' ' . $shipper['zipCode'] : '' }},
          {{ \Carbon\Carbon::parse($shipper['date'])->format(config('constant.shortDateFormat')) }}.
        </span>
        @endif
        @if (!empty($receiver))
        <span>Receiver: {{ $receiver['city'] }}, {{ $receiver['state'] }}{{ isset($receiver['zipCode']) ? ' ' . $receiver['zipCode'] : '' }},
          {{ \Carbon\Carbon::parse($receiver['date'])->format(config('constant.shortDateFormat')) }}.
        </span>
        @endif
        @if (!empty($shipper['weightInLbs']))
        <span>Weight: {{ $shipper['weightInLbs'] }} lbs.
        </span>
        @endif
      </p>
      @php
      $shipperBrokerDetails = $data['shipperBrokerDetails'];
      @endphp
      <p>Truck booked by:

        <span> Name: {{ $shipperBrokerDetails['firstName'] }} {{ $shipperBrokerDetails['lastName'] }}</span>
        <span> Phone: {{ $shipperBrokerDetails['phone'] }}</span>
        <span> Email: {{ $shipperBrokerDetails['email'] }}</span>
      </p>
    </table>
  </div>
</body>

</html>
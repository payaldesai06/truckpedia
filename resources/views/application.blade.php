<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <!-- Local dev only, turn this on for ngrok <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <!-- <link rel="icon" href="{{ asset('images/logo/favicon.ico') }}"> -->

  <!-- <title>{{ config('app.name') }}</title> -->

  @if(\Illuminate\Support\Facades\Request::getHttpHost() === 'dashboard.truckpedia.io')
  <link rel="icon" href="{{ asset('images/logo/truckpedia-intial-logo.svg') }}">
  <title>{{ 'Truckpedia' }}</title>
  @else
  <link rel="icon" href="{{ asset('images/logo/truckpedia-intial-logo.svg') }}">
  <title>{{ config('app.name') }}</title>
  @endif

  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/main.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/iconfont.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/material-icons/material-icons.css')) }}">
  {{-- <link rel="stylesheet" href="{{ asset(mix('css/vuetify.min.css')) }}">--}}
  <link rel="stylesheet" href="{{ asset(mix('css/vuesax.css')) }}">

  <link rel="stylesheet" href="{{ asset(mix('css/primevue.min.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/primeicons.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/theme.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/prism-tomorrow.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/vue-select.css')) }}">
  <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

  <!-- Loader -->
  <link rel="stylesheet" href="{{ asset('css/loader.css') }}">

  <!-- Favicon -->
  <link rel="shortcut icon" href="{{ asset('images/logo/truckpedia-intial-logo.svg') }}">

  <style>
  {{-- Datatable Remove Overlay  --}}
  .p-component-overlay {
  /* background-color: transparent !important; */
  z-index: 100000!important;
  }

  {{-- Google Auto Complete  --}}
  .pac-container {
  z-index: 99999999999999999999;
  }

  {{-- Notifications  --}}
  .vs-notifications {
  /* Large value used to render notification over Intercom widget whose z-index is 2147483003 */
  /* z-index: 400000 !important; */
  z-index: 2200000000 !important;
  }

  {{-- Upload File Overlay  --}}
  .view-upload {
  z-index: 99999;
  }
  </style>
</head>

<body>
  <noscript>
    <strong>We're sorry but {{ config('app.name') }} Dashboard doesn't work properly without
      JavaScript enabled. Please enable it to continue.</strong>
  </noscript>

  <div id=loading-bg>
    <div class=loading>
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>

  <div id="app"></div>

  <!-- <script src="js/app.js"></script> -->
  <script src="{{ asset(mix('js/app.js')) }}"></script>

  <script>
    // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/k24410lm'
    (function() {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i = function() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function(args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/k24410lm';
          var x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    })();
  </script>

</body>

</html>

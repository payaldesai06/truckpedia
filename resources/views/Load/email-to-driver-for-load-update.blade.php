<!doctype html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Load Detail To Driver</title>
  <style>
    /* -------------------------------------
              GLOBAL RESETS
          ------------------------------------- */
    /*All the styling goes here*/
    img {
      border: none;
      -ms-interpolation-mode: bicubic;
      max-width: 100%;
    }

    body {
      background-color: #ECF2F7;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    table {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      width: 100%;
    }

    table td {
      font-family: sans-serif;
      font-size: 14px;
      vertical-align: top;
      color: rgb(113, 128, 150);
      padding: 5px;
      white-space: nowrap;
    }

    /* -------------------------------------
              BODY & CONTAINER
          ------------------------------------- */

    .body {
      background-color: #ECF2F7;
      width: 100%;
    }

    /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
    .container {
      display: block;
      margin: 0 auto !important;
      /* makes it centered */
      /*max-width: 580px;*/
      padding: 10px;
      /*width: 580px;*/
    }

    /* This should also be a block element, so that it will fill 100% of the .container */
    .content {
      box-sizing: border-box;
      display: block;
      margin: 0 auto;
      /*max-width: 580px;*/
      padding: 10px;
    }

    /* -------------------------------------
              HEADER, FOOTER, MAIN
          ------------------------------------- */
    .main {
      background: #ffffff;
      border-radius: 3px;
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
    }

    .wrapper {
      box-sizing: border-box;
      padding: 20px;
    }

    .footer {
      clear: both;
      margin-top: 25px;
      text-align: center;
      width: 100%;
    }

    .footer td,
    .footer p,
    .footer span,
    .footer a {
      color: #999999;
      font-size: 12px;
      text-align: center;
      padding: 0px;
    }

    /* -------------------------------------
              TYPOGRAPHY
          ------------------------------------- */
    h1,
    h2,
    h3,
    h4 {
      color: #000000;
      font-family: sans-serif;
      font-weight: 400;
      line-height: 1.4;
      margin: 0;
      margin-bottom: 30px;
    }

    h1 {
      font-size: 35px;
      font-weight: 300;
      text-align: center;
      text-transform: capitalize;
    }

    p,
    ul,
    ol {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: normal;
      margin: 0;
      margin-bottom: 15px;
      color: rgb(113, 128, 150);
    }

    p li,
    ul li,
    ol li {
      list-style-position: inside;
      margin-left: 5px;
    }

    a {
      color: #3498db;
      text-decoration: underline;
    }

    /* -------------------------------------
              BUTTONS
          ------------------------------------- */
    .btn>tbody>tr>td {
      padding-bottom: 15px;
    }

    .btn table {
      width: auto;
    }

    .btn table td {
      background-color: #ffffff;
      border-radius: 5px;
      text-align: center;
    }

    .preheader {
      color: transparent;
      display: none;
      height: 0;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
      mso-hide: all;
      visibility: hidden;
      width: 0;
    }

    .powered-by a {
      text-decoration: none;
    }

    hr {
      border: 0;
      border-bottom: 1px solid #ECF2F7;
      margin: 20px 0;
    }

    .border-table tr td {
      border: 1px solid;
    }

    /* -------------------------------------
              RESPONSIVE AND MOBILE FRIENDLY STYLES
          ------------------------------------- */
    @media only screen and (max-width: 620px) {
      table.body h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
      }

      table.body p,
      table.body ul,
      table.body ol,
      table.body td,
      table.body span,
      table.body a {
        font-size: 16px !important;
      }

      table.body .wrapper,
      table.body .article {
        padding: 10px !important;
      }

      table.body .content {
        padding: 0 !important;
      }

      table.body .container {
        padding: 0 !important;
        width: 100% !important;
      }

      table.body .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
      }

      table.body .btn table {
        width: 100% !important;
      }

      /*table.body .btn a {*/
      /*    width: 100% !important;*/
      /*}*/
      table.body .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
      }
    }

    /* -------------------------------------
              PRESERVE THESE STYLES IN THE HEAD
          ------------------------------------- */
    @media all {

      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }

      .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
    }
  </style>
</head>

<body>
  <span class="preheader"></span>
  <table role="presentation" class="body">
    <tr>
      <td>&nbsp;</td>
      <td class="container">
        <div class="content">
          <!-- START CENTERED WHITE CONTAINER -->
          <table role="presentation" class="main">

            <!-- START MAIN CONTENT AREA -->
            <tr>
              <td class="wrapper">
                <table role="presentation">
                  <tr>
                    <td>
                      <h3 style="font-weight: bold">Hi,</h3>
                      <p style="margin-bottom:0;">Load {{$data['loadNumber']}} is available.</p>
                      <p style="margin-bottom:0;">Reference: {{$data['loadReference']}}</p>
                      <p style="margin-bottom:0;">Customer: {{$data['customerName']}}</p>
                      <p style="margin-bottom:0;">Truck: {{$data['truckNumber']}}</p>
                      <p style="margin-bottom:0;">Trailer: {{$data['trailerNumber']}}</p>
                      <p style="margin-bottom:0;">Loaded Miles: {{$data['loadedMiles']}}</p>
                      <p style="margin-bottom:0;">Empty Miles: {{$data['emptyMiles']}}</p>
                      <p></p>
                      <p style="margin-bottom:0;"><b>Stops:</b></p>
                      @foreach($data['stops'] as $key => $stop)
                      <p style="margin-bottom:0; font-weight: bold">{{$key+1}}. {{ucfirst($stop['type'])}}:</p>
                      <p style="margin-bottom:0;">Name: {{$stop['name']}}</p>
                      <p style="margin-bottom:0;">Address: {{$stop['address']}}, {{$stop['city']}}, {{$stop['state']}} {{$stop['zipCode']}}</p>
                      <p style="margin-bottom:0;">Start Date & End Time: {{formatDateInAmericanDateFormat($stop['startDate'])}} {{$stop['startTime']}}</p>
                      <p style="margin-bottom:0;">End Date & End Time: {{formatDateInAmericanDateFormat($stop['endDate'])}} {{$stop['endTime']}}</p>
                      <p style="margin-bottom:0;">Contact Person: {{$stop['contactPerson']}} </p>
                      <p style="margin-bottom:0;">Contact Number: {{$stop['contactNumber']}} </p>
                      @if (!empty($stop['extraDetails']))
                      @foreach($stop['extraDetails'] as $value)
                      @if($value['key'] == 'Freight Details')
                      @foreach($value['value'] as $index => $details)
                      <p style="margin-bottom:0;">Equipment Type: {{$details['equipmentType']}}</p>
                      <p style="margin-bottom:0;">Description: {{$details['description']}}</p>
                      <p style="margin-bottom:0;">Weight: {{$details['weight']}}</p>
                      <p style="margin-bottom:0;">Weight Unit: {{$details['weightUnit']}}</p>
                      <p style="margin-bottom:0;">Qty: {{$details['qty']}}</p>
                      <p style="margin-bottom:0;">Qty Unit: {{$details['qtyUnit']}}</p>
                      <p style="margin-bottom:0;">Length: {{$details['length']}}</p>
                      <p style="margin-bottom:0;">Width: {{$details['width']}}</p>
                      <p style="margin-bottom:0;">Height: {{$details['height']}}</p>
                      <!-- Add more fields as needed -->
                      @endforeach
                      @else
                      <p style="margin-bottom:0;">{{$value['key']}}: {{$value['value']}} </p>
                      @endif
                      @endforeach
                      @endif
                      <p style="margin-bottom:0;">Note: {{$stop['note']}} </p>
                      <p>
                        <hr>
                      </p>
                      @endforeach
                      <div style="margin-top: 25px">Thanks,</div>
                      <div>{{$data['fromName']}}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- END MAIN CONTENT AREA -->
          </table>
          <!-- END CENTERED WHITE CONTAINER -->

          <!-- START FOOTER -->
          <div class="footer">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td class="content-block">
                  <p>
                    <span>COPYRIGHT &copy;</span>
                    <span>{{ now()->year }} </span>
                    <a :href="{{ config('app.url') }}" target="_blank" rel="nofollow">{{ config('app.name') }}</a>
                    <span class="hidden sm:inline-block">, All rights Reserved</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td class="content-block powered-by">
                  <p>{{config('app.name')}} - "Capacity solutions platform designed to automate your operations with AI."</p>
                </td>
              </tr>
            </table>
          </div>
          <!-- END FOOTER -->
        </div>
      </td>
      <td>&nbsp;</td>
    </tr>
  </table>
</body>

</html>
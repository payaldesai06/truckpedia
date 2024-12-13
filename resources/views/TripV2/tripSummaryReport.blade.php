<div style="
   color: #000000;
   font-size: 10px;
   line-height: 150%;
   font-weight: 400;
   font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
   border: 0 !important;
   margin: 0 !important;
   outline: 0 !important;
   text-decoration: none !important;
   ">
  <div style="
      margin-left: 40px;
      margin-right: 40px;
      overflow: hidden;
      min-height: 700px;
      ">
    <div class="flex-horizontal flex-align-start mb30 break-word" style="
         word-wrap: break-word;
         word-break: break-word;
         margin-bottom: 30px;
         display: flex;
         justify-content: space-between;
         ">
      <table style="width: 100%;">
        <tbody>
          <tr>
            <td style="vertical-align: baseline;width: 50%;padding: 0;">
              <h2>
                Trip Summary Report
              </h2>
            </td>
            <td style="vertical-align: baseline;width: 50%;padding: 0;">
              @if ($toBusinessName)
              <h4>
                {{$toBusinessName}}
              </h4>
              @endif
            </td>
          </tr>
          <tr>
            <td style="vertical-align: baseline;width: 50%;padding: 0;">
              <div class="width-50">
                <div class="address-merchant-name bold" style="font-weight: 600">
                  From: {{$startDate}} &nbsp; &nbsp;
                  To: {{$endDate}}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    @if(!empty($trips))
    <div class="flex-horizontal flex-align-start mb30 break-word" style="
         word-wrap: break-word;
         word-break: break-word;
         margin-bottom: 30px;
         display: flex;
         justify-content: space-between;
         ">
      <table style="width: 100%;">
        <thead>
          <tr>
            <th style="text-align: left;"> Approved Date </th>
            <th style="text-align: left;"> Driver Name </th>
            <th style="text-align: right;"> Trip Amount </th>
            <th style="text-align: right;"> Federal Tax </th>
            <th style="text-align: right;"> Social Security </th>
            <th style="text-align: right;"> Medicare </th>
          </tr>
        </thead>
        <tbody>
          @foreach($trips as $trip)
          <tr>
            <!-- TODO: need trip number here. -->
            <td style="vertical-align: top;"> {{convertUtcTimestampToLocalCarbonObject($trip['paycheck_approved_utc_datetime'], $timezone)->toDateString()}} </td>
            <td style="vertical-align: top;"> {{userFullName((object) $trip['user'])}} </td>
            <td style="text-align: right;vertical-align: top;"> {{$trip['total_payment']}} </td>
            <td style="text-align: right;vertical-align: top;"> {{$trip['tax_federal']}} </td>
            <td style="text-align: right;vertical-align: top;"> {{$trip['tax_social_security']}} </td>
            <td style="text-align: right;vertical-align: top;"> {{$trip['tax_medicare']}} </td>
            <!-- TODO: need net payment here. -->
          </tr>
          @endforeach
          <tr>
            <td style="text-align: left;" colspan="2">Totals: </td>
            <td style="text-align: right;"> {{array_sum(array_column($trips,'total_payment'))}} </td>
            <td style="text-align: right;"> {{array_sum(array_column($trips,'tax_federal'))}} </td>
            <td style="text-align: right;"> {{array_sum(array_column($trips,'tax_social_security'))}} </td>
            <td style="text-align: right;"> {{array_sum(array_column($trips,'tax_medicare'))}} </td>
          </tr>
        </tbody>
      </table>
    </div>
    @endif
    <div class="pb30 avoid-page-break" style="padding-bottom: 30px; page-break-inside: avoid"></div>
    <div class="fs-10" style="font-size: 10px"></div>
  </div>
</div>

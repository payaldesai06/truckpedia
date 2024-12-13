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
    <div class="mb20 flex-horizontal flex-justify flex-align-start width-100" style="
         width: 100%;
         margin-bottom: 20px;
         ">
      <table style="width: 100%;">
        <tbody>
          <tr>
            <td>
              <div>
                <div class="brand-logo-fallback-container">
                  <div class="h1 logo-gray" style="
                             color: RGB(128, 128, 128);
                             font-weight: 600;
                             font-size: 24px;
                             line-height: 130%;
                             height: 75px;
                             ">
                    @if ($trip->company)
                    <img src="{{getImage($trip->company->company_image, config('constant.s3.admin_company_image'))}}" style="object-fit: contain; height: 75px; width: 125px;">
                    @endif
                  </div>
                </div>
                <div class="h1 mb20" style="
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 130%;
                  width: 100%;
                  text-align: center;
                  position: absolute;
                  top: 20px;
                ">
                  Trip
                </div>
                <div class="mb20" style="margin: 20px 0px;">
                  <table cellpadding="0" cellspacing="0" class="metadata" style="border-collapse: separate">
                    <tbody>
                      <tr>
                        <td style="
                                       white-space: nowrap;
                                       font-weight: 500;
                                       padding-right: 8px;
                                       -webkit-font-smoothing: antialiased !important;
                                       ">
                          Trip number
                        </td>
                        <td style="
                                       white-space: nowrap;
                                       font-weight: 500;
                                       -webkit-font-smoothing: antialiased !important;
                                       ">
                          {{$trip->trip_number}}
                        </td>
                      </tr>
                      <tr>
                        <td style="
                                       white-space: nowrap;
                                       font-weight: 500;
                                       padding-right: 8px;
                                       -webkit-font-smoothing: antialiased !important;
                                       ">
                          Issue date
                        </td>
                        <td style="
                                       white-space: nowrap;
                                       font-weight: 500;
                                       -webkit-font-smoothing: antialiased !important;
                                       ">
                          {{convertUtcTimestampToLocalCarbonObject($trip->paycheck_approved_utc_datetime, $trip->company->timezone)->toDateString()}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
              <div class="width-50">
                @if ($trip->company)
                <div class="address-merchant-name bold" style="font-weight: 600">
                  {{$trip->company->business_name}}
                </div>
                <div class="address-lines">
                  <div>{{$trip->company->address}}</div>
                  <div>{{$trip->company->city}}, {{$trip->company->state}} {{$trip->company->zipcode}}</div>
                </div>
                <div class="address-phone">{{$trip->company->email}}</div>
                <div class="address-phone">{{$trip->company->phone_number}}</div>
                @endif
              </div>
            </td>
            <td style="vertical-align: baseline;padding: 0;">
              <div class="width-50">
                <div class="address-merchant-name bold" style="font-weight: 600">
                  Pay to
                </div>
                @if($truckNumber)
                <div class="address-lines">
                  <div>Truck: {{$truckNumber}}</div>
                </div>
                @endif
                <div class="address-lines">
                  <div>{{$toBusinessName}}</div>
                </div>
                <div class="address-phone">{{$toEmails}}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    @if(!empty($loadDetails))
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
            <th style="text-align: left;"> Load #</th>
            <th style="text-align: left;"> Reference #</th>
            <th style="text-align: left;"> First Stop </th>
            <th style="text-align: left;"> Last Stop </th>
            <th style="text-align: right;"> Miles </th>
          </tr>
        </thead>
        <tbody>
          @foreach($loadDetails as $load)
          <tr>
            <td style="vertical-align: top;"> {{$load['loadNumber']}} </td>
            <td style="vertical-align: top;"> {{$load['loadReference']}} </td>
            <td style="vertical-align: top;">
              @if(!empty($load['pickupCity'])){{$load['pickupCity'] . ','}}@endif
              @if(!empty($load['pickupState'])){{$load['pickupState']}}@endif
              @if(!empty($load['pickupDate']))@ {{$load['pickupDate']}}@endif
            </td>
            <td style="vertical-align: top;">
              @if(!empty($load['deliveryCity'])){{$load['deliveryCity'] . ','}}@endif
              @if(!empty($load['deliveryState'])){{$load['deliveryState']}}@endif
              @if(!empty($load['deliveryDate']))@ {{$load['deliveryDate']}}@endif
            </td>
            <td style="text-align: right;vertical-align: top;"> {{$load['loadMiles']}} </td>
          </tr>
          @endforeach
          @if($totalMiles > 0)
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style="text-align: right;">Total </td>
            <td style="text-align: right;"> {{$totalMiles}} miles </td>
          </tr>
          @endif
        </tbody>
      </table>
    </div>
    @endif

    @if(!empty($templateLoadDetails))
    @foreach($templateLoadDetails as $loadId => $details)
    <table cellpadding="0" cellspacing="0" class="line-item-table mb30" style="
         border-collapse: separate;
         margin-bottom: 30px;
         width: 100%;
         overflow: hidden;
         table-layout: fixed;
         ">
      <tbody>
        @if (!empty($details))
        <tr>
          <td colspan="1">
            @if(!empty($loadDetails[$loadId]['loadTitle']))
            {{$loadDetails[$loadId]['loadTitle']}}
            @endif
          </td>
        </tr>
        <tr class="table-headers">
          <td class="width-80 center-valign" style="
                    width: 70%;
                    vertical-align: center;
                    padding-bottom: 5px;
                    font-weight:600;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            Load {{$details[0]['loadNumber']}}
          </td>
          <td class="width-16point7 center-valign align-right" style="
                    width: 30%;
                    text-align: right;
                    vertical-align: center;
                    padding-bottom: 5px;
                    font-weight:600;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            <div class="line-height-1point3" style="line-height: 1.3">
              Amount
            </div>
          </td>
        </tr>
        @foreach($details as $field => $detail)
        <tr class="line-item-row">
          <td style="-webkit-font-smoothing: antialiased !important">
            <div style="
                word-break: break-word;
                padding-left: 0px;
                padding-right: 5px;
                ">
              <div>{{$detail['description']}}</div>
            </div>
          </td>
          <td style="
              text-align: right;
              padding-top: 5px;
              padding-bottom: 5px;
              -webkit-font-smoothing: antialiased !important">
            ${{$detail['payment']}}
          </td>
        </tr>
        @endforeach
        @endif
      </tbody>
    </table>
    @endforeach
    @endif

    @if(!empty($templateTripDetails))
    <table cellpadding="0" cellspacing="0" class="line-item-table mb30" style="
         border-collapse: separate;
         margin-bottom: 30px;
         width: 100%;
         overflow: hidden;
         table-layout: fixed;
         ">
      <tbody>
        <tr class="table-headers">
          <td class="width-80 center-valign" style="
                  width: 70%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-weight:600;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            Recurring
          </td>
          <td class="width-16point7 center-valign align-right" style="
                  width: 30%;
                  text-align: right;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-weight:600;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            <div class="line-height-1point3" style="line-height: 1.3">
              Amount
            </div>
          </td>
        </tr>
        @foreach($templateTripDetails as $key => $detail)
        <tr class="line-item-row">
          <td style="">
            <div style="
                word-break: break-word;
                padding-left: 0px;
                padding-right: 5px;
                ">
              <div>{{$detail['description']}}</div>
            </div>
          </td>
          <td style="
              text-align: right;
              padding-top: 5px;
              padding-bottom: 5px;">
            ${{$detail['payment']}}
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
    @endif

    @if($trip->driver_pay_type != array_search('template', config('constant.trip.driver_pay_type')))
    @if (!empty($descriptions))
    <table cellpadding="0" cellspacing="0" class="line-item-table mb30" style="
           border-collapse: separate;
           margin-bottom: 30px;
           width: 100%;
           overflow: hidden;
           table-layout: fixed;
           ">
      <tbody>
        <tr class="table-headers">
          <td class="width-80 center-valign" style="
                    width: 70%;
                    vertical-align: center;
                    padding-bottom: 5px;
                    font-weight:600;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            Description
          </td>
          <td class="width-16point7 center-valign align-right" style="
                    width: 30%;
                    text-align: right;
                    vertical-align: center;
                    padding-bottom: 5px;
                    font-weight:600;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            <div class="line-height-1point3" style="line-height: 1.3">
              Amount
            </div>
          </td>
        </tr>

        @foreach($descriptions as $key => $description)
        <tr class="line-item-row">
          <td style="-webkit-font-smoothing: antialiased !important">
            <div style="
                word-break: break-word;
                padding-left: 0px;
                padding-right: 5px;
                ">
              <div>{{$key}}</div>
            </div>
          </td>
          <td style="
              text-align: right;
              padding-top: 5px;
              padding-bottom: 5px;
              -webkit-font-smoothing: antialiased !important">
            ${{$description}}
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
    @endif
    @endif

    <table cellpadding="0" cellspacing="0" class="line-item-table " style="
         border-collapse: separate;
         width: 100%;
         overflow: hidden;
         table-layout: fixed;
         ">
      <tbody>
        <tr class="summary-amount-border">
          <td class="align-left" style="
            width: 30%;
            text-align: left;
            font-weight: 600;
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-font-smoothing: antialiased !important;
            ">
            YTD
          </td>
          <td style="-webkit-font-smoothing: antialiased !important"></td>
          <td class="align-right" style="
                  width: 30%;
                  text-align: right;
                  font-weight: 600;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            This Trip
          </td>
          <td style="-webkit-font-smoothing: antialiased !important"></td>
        </tr>
        <tr class="summary-amount">
          <td class="align-left" style="
                  width: 30%;
                  text-align: left;
                  font-weight: 600;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            Total Amount
          </td>
          <td class="align-left" style="
            width: 40%;
            font-weight: 600;
            text-align: left;
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-font-smoothing: antialiased !important;
            ">
            ${{convertToNumberFormat($driverYTD['total_payment'])}}
          </td>
          <td class="align-right" style="
                  width: 70%;
                  text-align: right;
                  font-weight: 600;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            Total Amount
          </td>
          <td class="align-right" style="
            width: 30%;
            font-weight: 600;
            text-align: right;
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-font-smoothing: antialiased !important;
            ">
            ${{convertToNumberFormat($trip->total_payment)}}
          </td>
        </tr>
        @if(!is_null($trip->tax_federal))
        <tr class="summary-amount">
          <td class="align-left" style="
                        width: 30%;
                        text-align: left;
                        font-weight: 600;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        -webkit-font-smoothing: antialiased !important;
                        ">
            Federal Tax
          </td>
          <td class="align-left" style="
                    width: 40%;
                    font-weight: 600;
                    text-align: left;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            ${{convertToNumberFormat($driverYTD['tax_federal'])}}
          </td>
          <td class="align-right" style="
                        width: 70%;
                        text-align: right;
                        font-weight: 600;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        -webkit-font-smoothing: antialiased !important;
                        ">
            Federal Tax
          </td>
          <td class="align-right" style="
                    width: 30%;
                    font-weight: 600;
                    text-align: right;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            ${{convertToNumberFormat($trip->tax_federal)}}
          </td>
        </tr>
        @endif
        @if(!is_null($trip->tax_social_security))
        <tr class="summary-amount">
          <td class="align-left" style="
                        width: 30%;
                        text-align: left;
                        font-weight: 600;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        -webkit-font-smoothing: antialiased !important;
                        ">
            Social Security
          </td>
          <td class="align-left" style="
                    width: 40%;
                    font-weight: 600;
                    text-align: left;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            ${{convertToNumberFormat($driverYTD['tax_social_security'])}}
          </td>
          <td class="align-right" style="
                        width: 70%;
                        text-align: right;
                        font-weight: 600;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        -webkit-font-smoothing: antialiased !important;
                        ">
            Social Security
          </td>
          <td class="align-right" style="
                    width: 30%;
                    font-weight: 600;
                    text-align: right;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            ${{convertToNumberFormat($trip->tax_social_security)}}
          </td>
        </tr>
        @endif
        @if(!is_null($trip->tax_medicare))
        <tr class="summary-amount">
          <td class="align-left" style="
                        width: 30%;
                        text-align: left;
                        font-weight: 600;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        -webkit-font-smoothing: antialiased !important;
                        ">
            Medicare
          </td>
          <td class="align-left" style="
                    width: 40%;
                    font-weight: 600;
                    text-align: left;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            ${{convertToNumberFormat($driverYTD['tax_medicare'])}}
          </td>
          <td class="align-right" style="
                        width: 70%;
                        text-align: right;
                        font-weight: 600;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        -webkit-font-smoothing: antialiased !important;
                        ">
            Medicare
          </td>
          <td class="align-right" style="
                    width: 30%;
                    font-weight: 600;
                    text-align: right;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            ${{convertToNumberFormat($trip->tax_medicare)}}
          </td>
        </tr>
        @endif
        <tr class="summary-amount">
          <td class="align-left" style="
                    width: 30%;
                    text-align: left;
                    font-weight: 600;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            Net Amount
          </td>
          <td class="align-left" style="
              width: 40%;
              font-weight: 600;
              text-align: left;
              padding-top: 5px;
              padding-bottom: 5px;
              -webkit-font-smoothing: antialiased !important;
              ">
            ${{convertToNumberFormat($driverYTD['net_payment'])}}
          </td>
          <td class="align-right" style="
                    width: 70%;
                    text-align: right;
                    font-weight: 600;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    -webkit-font-smoothing: antialiased !important;
                    ">
            Net Amount
          </td>
          <td class="align-right" style="
                width: 30%;
                font-weight: 600;
                text-align: right;
                padding-top: 5px;
                padding-bottom: 5px;
                -webkit-font-smoothing: antialiased !important;
                ">
            ${{convertToNumberFormat($trip->net_payment)}}
          </td>
        </tr>
      </tbody>
    </table>

    <table cellpadding="0" cellspacing="0" class="line-item-table mb30" style="
         border-collapse: separate;
         margin-bottom: 30px;
         width: 100%;
         overflow: hidden;
         table-layout: fixed;
         ">
      <tbody>
        <!-- DO NOT MODIFY THIS LINE!!! -->
        @if(false && $trip->notes)
        <tr class="table-headers">
          <td class="width-50 center-valign" style="
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-weight:600;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            Notes
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span class="break-all" v-html="invoice.notes">
                {!! $trip->notes !!}
              </span>
            </div>
          </td>
        </tr>
        @endif
      </tbody>
    </table>
    <div class="pb30 avoid-page-break" style="padding-bottom: 30px; page-break-inside: avoid"></div>
    <div class="fs-10" style="font-size: 10px"></div>
  </div>
</div>
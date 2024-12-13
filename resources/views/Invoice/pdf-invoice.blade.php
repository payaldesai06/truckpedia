<div style="
  color: #000000;
  font-size: 12px;
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
      display: flex;
      justify-content: space-between;
      ">
      <table style="width: 100%;">
        <tbody>
          <tr>
            <td>
              <div>
                <div class="h1 mb20" style="
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 130%;
                  margin-bottom: 20px;
                  ">
                  Invoice
                </div>
                <div class="mb20" style="margin-bottom: 20px">
                  <table cellpadding="0" cellspacing="0" class="metadata" style="border-collapse: separate">
                    <tbody>
                      <tr>
                        <td style="
                          white-space: nowrap;
                          font-weight: 500;
                          padding-right: 8px;
                          -webkit-font-smoothing: antialiased !important;
                          ">
                          Invoice number
                        </td>
                        <td style="
                          white-space: nowrap;
                          font-weight: 500;
                          -webkit-font-smoothing: antialiased !important;
                          ">
                          {{$invoice->invoice_number}}
                        </td>
                      </tr>
                      <tr>
                        <td style="
                          white-space: nowrap;
                          font-weight: 500;
                          padding-right: 8px;
                          -webkit-font-smoothing: antialiased !important;
                          ">
                          Date due
                        </td>
                        <td style="
                          white-space: nowrap;
                          font-weight: 500;
                          -webkit-font-smoothing: antialiased !important;
                          ">
                          @if ($invoice->due_date)
                          {{$invoice->due_date->toDateString()}}
                          @endif
                        </td>
                      </tr>
                      @if($paymentLink)
                      <tr>
                        <td style="
                          white-space: nowrap;
                          font-weight: 500;
                          padding-right: 8px;
                          -webkit-font-smoothing: antialiased !important;
                          ">
                          Pay Now
                        </td>
                        <td style="
                          white-space: nowrap;
                          font-weight: 500;
                          -webkit-font-smoothing: antialiased !important;
                          ">
                          <a href="{{ $paymentLink }}">Click Here</a>
                        </td>
                      </tr>
                      @endif
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
            <td style="vertical-align: baseline;">
              <div class="brand-logo-fallback-container">
                <div class="h1 logo-gray" style="
                  color: RGB(128, 128, 128);
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 130%;
                  ">
                  @if ($invoice->company)
                  <img src="{{getImage($invoice->company->company_image, config('constant.s3.admin_company_image'))}}" style="object-fit: contain; max-height: 75px; max-width: 75px;" />
                  @endif
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
                @if ($invoice->company)
                <div class="address-merchant-name bold" style="font-weight: 600">
                  {{$invoice->company->business_name}}
                </div>
                <div class="address-lines">
                  <div>{{$invoice->company->address}}</div>
                  <div>{{$invoice->company->city}}, {{$invoice->company->state}} {{$invoice->company->zipcode}}</div>
                </div>
                <div class="address-phone">{{$invoice->company->email}}</div>
                <div class="address-phone">{{$invoice->company->phone_number}}</div>
                @endif
              </div>
            </td>
            <td style="vertical-align: baseline;padding: 0;">
              <div class="width-50">
                <div class="address-merchant-name bold" style="font-weight: 600">
                  Bill to
                </div>
                @if ($invoice->customer)
                <div class="address-lines">
                  <div>{{$invoice->customer->company_name}}</div>
                  @if ($invoice->customer->billing_contact)
                  <div>{{$invoice->customer->billing_contact}}</div>
                  @endif
                  @if ($invoice->customer->billing_address)
                  <div>{{$invoice->customer->billing_address}}</div>
                  @endif
                  <div>
                    @if ($invoice->customer->billing_city)
                    {{$invoice->customer->billing_city}},
                    @endif
                    @if ($invoice->customer->billing_state)
                    {{$invoice->customer->billing_state}}
                    @endif
                    @if ($invoice->customer->billing_zip_code)
                    {{$invoice->customer->billing_zip_code}}
                    @endif
                  </div>
                </div>
                <div class="address-phone">{{$invoice->customer->billing_email}}</div>
                <div class="address-phone">{{$invoice->customer->billing_phone_number}}</div>
                @if($invoice->customer->sales_rep)
                <div>Sales Rep: {{$invoice->customer->sales_rep}}</div>
                @endif
                @if($invoice->customer->shipping_carrier_acct)
                <div>Shipping Carrier Account: {{$invoice->customer->shipping_carrier_acct}}</div>
                @endif
                @endif
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    @if ($invoice->shipping_address)
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
            <td style="vertical-align: baseline;padding: 0;">
              <div class="width-50">
                <div class="address-merchant-name bold" style="font-weight: 600">
                  Shipping address
                </div>
                <div class="address-lines">
                  <div>{{$invoice->shipping_address}}</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    @endif
    <table cellpadding="0" cellspacing="0" class="line-item-table mb30" style="
      border-collapse: separate;
      margin-bottom: 30px;
      width: 100%;
      overflow: hidden;
      table-layout: fixed;
      ">
      <tbody>
        <tr class="table-headers">
          <td class="width-50 center-valign" style="
            width: 50%;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Product
          </td>
          <td class="width-16point7 center-valign" style="
            width: 16.7%;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Qty
          </td>
          <td class="width-16point7 center-valign" style="
            width: 16.7%;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            <div class="line-height-1point3" style="line-height: 1.3">
              Unit price
            </div>
          </td>
          <td class="width-0 center-valign" style="
                  width: 0%;
                  vertical-align: center;
                  padding-bottom: 5px;
                  font-weight:600;
                  font-size: 12px;
                  -webkit-font-smoothing: antialiased !important;
                  "></td>
          <td class="width-16point7 center-valign align-right" style="
            width: 16.7%;
            text-align: right;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            <div class="line-height-1point3" style="line-height: 1.3">
              Amount
            </div>
          </td>
        </tr>
        <?php
        $subTotal = 0;
        $customPayment = 0;
        ?>
        @if(count($invoice->invoiceItems) > 0)
        @foreach($invoice->invoiceItems as $invoiceItem)
        <tr class="line-item-row">
          <td style="-webkit-font-smoothing: antialiased !important">
            <div style="
              word-break: break-word;
              padding-left: 0px;
              padding-right: 5px;
              ">
              <div>{{$invoiceItem->name}}</div>
            </div>
          </td>
          <td style="-webkit-font-smoothing: antialiased !important">{{convertToNumberFormat($invoiceItem->qty)}}</td>
          <td class="break-word" style="
            word-wrap: break-word;
            word-break: break-word;
            -webkit-font-smoothing: antialiased !important;
            ">
            <div>${{convertToNumberFormatWithDecimals($invoiceItem->rate)}}</div>
          </td>
          <td style="-webkit-font-smoothing: antialiased !important"></td>
          <td style="
            text-align: right;
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-font-smoothing: antialiased !important">
            ${{convertToNumberFormatWithDecimals($invoiceItem->amount)}}
            <?php
            $subTotal += $invoiceItem->amount;
            ?>
          </td>
        </tr>
        @endforeach
        @endif
        <tr>
          <td colspan="5" height="15" style="
            border: 0;
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            height: 15px;
            font-size: 1px;
            line-height: 1px;
            mso-line-height-rule: exactly;
            -webkit-font-smoothing: antialiased !important;
            ">
          </td>
        </tr>
        <tr class="summary-amount-border">
          <td style="-webkit-font-smoothing: antialiased !important"></td>
          <td colspan="4" style="
            border-top: 1px solid #ebebeb;
            -webkit-font-smoothing: antialiased !important;
            "></td>
        </tr>
        <tr class="summary-amount">
          <td style="-webkit-font-smoothing: antialiased !important"></td>
          <td colspan="3" style="
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Subtotal
          </td>
          <td class="align-right" style="
            text-align: right;
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-font-smoothing: antialiased !important;
            ">
            ${{convertToNumberFormatWithDecimals($subTotal)}}
          </td>
        </tr>
        @foreach ($invoice->invoiceAdditionalCustomPayments as $additionalCustomPayment)
        <tr class="summary-amount">
          <td style="-webkit-font-smoothing: antialiased !important"></td>
          @php
          if(!is_null($additionalCustomPayment->percentage_in_fractional)){
          $percentage = $additionalCustomPayment->percentage_in_fractional * 100;
          $name="{$additionalCustomPayment->invoiceCustomPaymentField->name} ({$percentage}% of Subtotal)";
          }else{
          $name=$additionalCustomPayment->invoiceCustomPaymentField->name;
          }
          @endphp
          <td colspan="3" style="
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            {{$name}}
          </td>
          <td class="align-right" style="
                  text-align: right;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            ${{convertToNumberFormatWithDecimals( $additionalCustomPayment->payment)}}
            <?php
            $customPayment += $additionalCustomPayment->payment;
            ?>
          </td>
        </tr>
        @endforeach
        <tr class="summary-amount-border">
          <td style="-webkit-font-smoothing: antialiased !important"></td>
          <td colspan="4" style="
                  border-top: 1px solid #ebebeb;
                  -webkit-font-smoothing: antialiased !important;
                  "></td>
        </tr>
        <tr class="summary-amount">
          <td style="-webkit-font-smoothing: antialiased !important"></td>
          <td colspan="3" style="
                  font-weight: 600;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  -webkit-font-smoothing: antialiased !important;
                  ">
            Amount due
          </td>
          <td class="align-right" style="
            font-weight: 600;
            text-align: right;
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-font-smoothing: antialiased !important;
            ">
            ${{convertToNumberFormatWithDecimals($subTotal+$customPayment)}}
          </td>
        </tr>
      </tbody>
    </table>
    @if(!empty($invoice->notes))
    <table cellpadding="0" cellspacing="0" class="line-item-table mb30" style="
      border-collapse: separate;
      margin-bottom: 30px;
      width: 100%;
      overflow: hidden;
      table-layout: fixed;
      ">
      <tbody>
        <tr class="table-headers">
          <td class="width-50 center-valign" style="
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Notes
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span class="break-all" v-html="invoice.notes">
                {!! $invoice->notes !!}
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    @endif

    @if($invoice->invoicePayments->isNotEmpty())
    <table cellpadding="0" cellspacing="0" class="line-item-table mb30" style="
      border-collapse: separate;
      margin-bottom: 30px;
      width: 100%;
      overflow: hidden;
      table-layout: fixed;
      ">
      <tbody>
        <tr class="table-headers">
          <td class="width-16point7 center-valign" style="
            width: 16.7%;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Transaction #
          </td>
          <td class="width-16point7 center-valign" style="
            width: 16.7%;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Amount Paid
          </td>
          <td class="width-16point7 center-valign" style="
            width: 16.7%;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Status
          </td>
          <td class="width-16point7 center-valign" style="
          width: 16.7%;
          vertical-align: center;
          padding-bottom: 5px;
          font-weight:600;
          font-size: 12px;
          -webkit-font-smoothing: antialiased !important;
          ">
            Card
          </td>
          <td class="width-16point7 center-valign" style="
            width: 16.7%;
            vertical-align: center;
            padding-bottom: 5px;
            font-weight:600;
            font-size: 12px;
            -webkit-font-smoothing: antialiased !important;
            ">
            Date
          </td>
        </tr>
        @foreach($invoice->invoicePayments as $invoicePayment)
        <tr class="line-item-row">
          <td>{{$invoicePayment->transaction_id}}</td>
          <td>
            ${{convertToNumberFormatWithDecimals($invoicePayment->amount_paid)}}
          </td>
          <td>{{$invoicePayment->status ? config('constant.invoices.status.invoicePayments')[$invoicePayment->status] : ''}}</td>
          <td>{{$invoicePayment->card_last_4 ? substr($invoicePayment->card_last_4, -4) : null}}</td>
          <td>
            {{$invoicePayment->created_at ?
            convertUtcTimestampToLocal($invoicePayment->created_at, getCompanyTimezone()) : null}}
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
    @endif
    <div class="pb30 avoid-page-break" style="padding-bottom: 30px; page-break-inside: avoid"></div>
    <div class="fs-10" style="font-size: 10px"></div>
  </div>
</div>
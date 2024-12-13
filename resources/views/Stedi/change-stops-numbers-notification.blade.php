<!DOCTYPE html>
<html lang="en">
<body>
<div style="Margin:0;background-color:#fbfbfb!important;color:#242128;font-family:Arial,sans-serif;font-size:14px;font-weight:normal;line-height:1.3;margin:0!important;padding:0">
  <div style="table-layout:fixed;width:100%;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
      <tbody>
      <tr>
        <td height="40" style="font-size:40px;line-height:40px;padding:0">&nbsp;</td>
      </tr>
      </tbody>
    </table>
    <div style="margin:0 auto;max-width:600px">
      <table style="Margin:0 auto;border-spacing:0;color:#242128;font-family:Arial,sans-serif;max-width:600px;width:100%">
        <tbody>
        <tr>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
              <tbody>
              <tr>
                <td height="45" style="font-size:45px;line-height:45px;padding:0">&nbsp;
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color:#ffffff;border-collapse:separate!important;border-color:#e4e2e2;border-radius:4px;border-spacing:0;border-style:solid;border-width:1px;color:#242128;font-family:Arial,sans-serif">
              <tbody style="text-align: center">
              <tr>
                <td valign="top" style="padding-left: 20px;padding-bottom: 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                    <tbody>
                    <tr>
                      <td height="45" style="font-size:45px;line-height:45px;padding:0">&nbsp;
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <p>Load #<strong>{{$data['referenceId']}}</strong>,
                  </p>
                  @if(isset($data['oldShippersCount']) && $data['oldShippersCount'] != $data['newShippersCount'])
                    <p>
                      Load #{{$data['referenceId']}} previously had {{$data['oldShippersCount']}} shippers:
                    </p>
                    @foreach($data['oldShippers'] as $shipper)
                      <p>
                        shipper {{$shipper['shipper_name']}}, {{$shipper['address']}}, {{$shipper['city']}} {{$shipper['state']}} {{$shipper['zip_code']}}.
                        @if($shipper['shipping_date'])
                          {{$shipper['shipping_date']}}
                        @endif
                        @if($shipper['shipping_time'])
                          {{\Carbon\Carbon::parse($shipper['shipping_time'])->format(config('constant.time_format'))}}
                        @endif
                        @if($shipper['shipping_end_date'])
                          to {{$shipper['shipping_end_date']}}
                        @endif
                        @if($shipper['shipping_end_time'])
                          {{\Carbon\Carbon::parse($shipper['shipping_end_time'])->format(config('constant.time_format'))}}
                        @endif
                      </p>
                    @endforeach
                    <br>
                    <p>
                      Latest EDI has {{$data['newShippersCount']}} shippers:
                    </p>
                    @foreach($data['newShippers'] as $shipper)
                      <p>
                        shipper {{$shipper['shipper_name']}}, {{$shipper['address']}}, {{$shipper['city']}} {{$shipper['state']}} {{$shipper['zip_code']}}.
                        @if($shipper['shipping_date'])
                          {{$shipper['shipping_date']}}
                        @endif
                        @if($shipper['shipping_time'])
                          {{\Carbon\Carbon::parse($shipper['shipping_time'])->format(config('constant.time_format'))}}
                        @endif
                        @if($shipper['shipping_end_date'])
                          to {{$shipper['shipping_end_date']}}
                        @endif
                        @if($shipper['shipping_end_time'])
                          {{\Carbon\Carbon::parse($shipper['shipping_end_time'])->format(config('constant.time_format'))}}
                        @endif
                      </p>
                    @endforeach
                    <br><br>
                  @endif

                  @if(isset($data['oldReceiversCount']) &&  $data['oldReceiversCount'] != $data['newReceiversCount'])
                    <p>
                      Load #{{$data['referenceId']}} previously had {{$data['oldReceiversCount']}} receivers:
                    </p>
                    @foreach($data['oldReceivers'] as $receiver)
                      <p>
                        receiver {{$receiver['receiver_name']}}, {{$receiver['address']}}, {{$receiver['city']}} {{$receiver['state']}} {{$receiver['zip_code']}}.
                        @if($receiver['delivery_date'])
                          {{$receiver['delivery_date']}}
                        @endif
                        @if($receiver['delivery_time'])
                          {{\Carbon\Carbon::parse($receiver['delivery_time'])->format(config('constant.time_format'))}}
                        @endif
                        @if($receiver['delivery_end_date'])
                          to {{$receiver['delivery_end_date']}}
                        @endif
                        @if($receiver['delivery_end_time'])
                          {{\Carbon\Carbon::parse($receiver['delivery_end_time'])->format(config('constant.time_format'))}}
                        @endif
                      </p>
                    @endforeach
                    <br>
                    <p>
                      Latest EDI has {{$data['newReceiversCount']}} receivers:
                    </p>
                    @foreach($data['newReceivers'] as $receiver)
                      <p>
                        receiver {{$receiver['receiver_name']}}, {{$receiver['address']}}, {{$receiver['city']}} {{$receiver['state']}} {{$receiver['zip_code']}}.
                        @if($receiver['delivery_date'])
                          {{$receiver['delivery_date']}}
                        @endif
                        @if($receiver['delivery_time'])
                          {{\Carbon\Carbon::parse($receiver['delivery_time'])->format(config('constant.time_format'))}}
                        @endif
                        @if($receiver['delivery_end_date'])
                          to {{$receiver['delivery_end_date']}}
                        @endif
                        @if($receiver['delivery_end_time'])
                          {{\Carbon\Carbon::parse($receiver['delivery_end_time'])->format(config('constant.time_format'))}}
                        @endif
                      </p>
                    @endforeach
                    <br><br>
                  @endif
                  <p>Please check the load.</p>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0px 10px">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
              <tbody>
              <tr>
                <td align="center" valign="top" style="color:#cccccc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;padding:0px 10px;text-decoration:none">
                  <p>
                    <span>COPYRIGHT &copy;</span>
                    <span>{{ now()->year }} </span>
                    <a :href="{{ config('app.url') }}" target="_blank" rel="nofollow">{{ config('app.name') }}</a>
                    <span class="hidden sm:inline-block">, All rights Reserved</span>
                  </p>
                  <p>{{config('app.name')}} - "Capacity solutions platform designed to automate your operations with AI."</p>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
              <tbody>
              <tr>
                <td height="40" style="font-size:40px;line-height:40px;padding:0">&nbsp;
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
    <tbody>
    <tr>
      <td height="40" style="font-size:40px;line-height:40px;padding:0">&nbsp;</td>
    </tr>
    </tbody>
  </table>
</div>
</body>
</html>

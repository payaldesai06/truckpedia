<!DOCTYPE html>
<html lang="en">

<body>
  <div
    style="Margin:0;background-color:#fbfbfb!important;color:#242128;font-family:Arial,sans-serif;font-size:14px;font-weight:normal;line-height:1.3;margin:0!important;padding:0">
    <div style="table-layout:fixed;width:100%;text-align: center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0"
        style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
        <tbody>
          <tr>
            <td height="40" style="font-size:40px;line-height:40px;padding:0">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <div style="margin:0 auto;max-width:600px">
        <table
          style="text-align: center; Margin:0 auto;border-spacing:0;color:#242128;font-family:Arial,sans-serif;max-width:600px;width:100%">
          <tbody>
            <tr>
              <td style="padding:0px 10px">
                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
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
              <td style="padding:0px 10px">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff"
                  style="background-color:#ffffff;border-collapse:separate!important;border-color:#e4e2e2;border-radius:4px;border-spacing:0;border-style:solid;border-width:1px;color:#242128;font-family:Arial,sans-serif">
                  <tbody>
                    <tr>
                      <td align="center" valign="top" style="padding:0">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td height="45" style="font-size:45px;line-height:45px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td align="center" valign="top" style="padding:0px 20px">
                                @if(!empty($load_url))
                                  <p
                                    style="Margin:0;color:#242128;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:25px;font-weight:normal;line-height:1.3;margin:0!important;padding:0">
                                    Click to view the status and location of Load
                                    #{{ $load_detail->refrence_id }}
                                  </p>
                                @else
                                <p  style="Margin:0;color:#242128;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:25px;font-weight:normal;line-height:1.3;margin:0!important;padding:0">
                                  Load  #{{ $load_detail->refrence_id }}
                                </p>
                                @endif
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td height="65" style="font-size:65px;line-height:65px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>


                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td align="center" valign="top" style="padding:0px 50px">

                                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff"
                                  style="border-collapse:separate!important;border-color:#7b68ee;border-radius:4px;border-spacing:0;border-style:solid;border-width:1px;color:#242128;font-family:Arial,sans-serif">

                                  <tbody>
                                    <tr>

                                      <td align="center" valign="top" style="padding:0">

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td height="40" style="font-size:40px;line-height:40px;padding:0">
                                                &nbsp;</td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table width="65" height="65" cellpadding="0" cellspacing="0" border="0"
                                          bgcolor="#f57c01"
                                          style="background-color:#f57c01;border-radius:50%;border-spacing:0;color:#ffffff!important;font-family:Arial,sans-serif;width:65px;height:65px">
                                          <tbody>
                                            <tr>
                                              <td align="center" valign="middle" height="65"
                                                style="color:#ffffff!important;padding:0">
                                                <span
                                                  style="Margin:0;color:#ffffff!important;display:inline-block;font-family:'Gotham',Helvetica,Arial,sans-serif;font-size:24px;font-weight:500;line-height:65px;margin:0!important;padding:0;text-decoration:none">
                                                  {{ substr($business_name, 0, 1)}}
                                                </span>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td height="16" style="font-size:16px;line-height:16px;padding:0">
                                                &nbsp;</td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td height="25" style="font-size:25px;line-height:25px;padding:0">
                                                &nbsp;</td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td align="center" valign="top" style="padding:0px 20px">
                                                <p
                                                  style="Margin:0;color:#242128;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:normal;line-height:1.3;margin:0!important;padding:0">

                                                  @if ($status == config('constant.status.load_driver.load_started'))
                                                  The driver has
                                                  STARTED this
                                                  load to head to
                                                  the shipper,
                                                  located at
                                                  {{ $load_detail->loadShippers->first()->address }}.
                                                  @elseif($status == config('constant.status.load_driver.from_arrived'))
                                                  The driver has ARRIVED at the shipper at {{$local_time}}.
                                                  @elseif($status == config('constant.status.load_driver.from_loaded'))
                                                  The load has been LOADED at the shipper at {{$local_time}}.
                                                  @elseif($status == config('constant.status.load_driver.to_arrived'))
                                                  The driver has ARRIVED at the receiver at {{$local_time}}.
                                                  @elseif($status == config('constant.status.load_driver.to_unloaded'))
                                                  The load has been UNLOADED at the receiver at {{$local_time}}.
                                                  @elseif($status == config('constant.status.load_driver.end_load'))
                                                  {{-- end load --}}
                                                  The driver has completed the load.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.load_picked_up'))
                                                  The driver has uploaded pick up images.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.load_delivered'))
                                                  The driver has uploaded delivery images.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.load_pod'))
                                                  The driver has uploaded POD.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.bol'))
                                                  The driver has uploaded BOL.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.lumper'))
                                                    The driver has uploaded lumper receipt.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.scale'))
                                                    The driver has uploaded scale ticket.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.fuel'))
                                                    The driver has uploaded fuel receipt.
                                                  @elseif($status == config('constant.status.load_driver.upload') && $purpose == config('constant.load.image.purpose.repair'))
                                                    The driver has uploaded repair receipt.
                                                  @endif
                                                  @isset($shipperReceiver)
                                                  <br>Address: {{ printAddressHelper($shipperReceiver->address, $shipperReceiver->city, $shipperReceiver->state, $shipperReceiver->zip_code) }}
                                                  @endisset
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td height="30" style="font-size:30px;line-height:30px;padding:0">
                                                &nbsp;</td>
                                            </tr>
                                          </tbody>
                                        </table>

                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                              </td>
                            </tr>
                          </tbody>
                        </table>


                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td height="35" style="font-size:35px;line-height:35px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                          @if(!empty($load_url))
                              <table width="190" height="48" cellpadding="0" cellspacing="0" border="0"
                                     bgcolor="#7b68ee"
                                     style="background-color:#7b68ee;border-radius:3px;border-spacing:0;color:#ffffff!important;font-family:Arial,sans-serif;height:48px;max-width:190px;width:190px!important">
                                  <tbody>
                                  <tr>
                                      <td align="center" valign="middle" height="48"
                                          style="color:#ffffff!important;padding:0">
                                          <a href="{{ $load_url }}"
                                             style="Margin:0;color:#ffffff!important;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:20px;font-weight:600;line-height:48px;margin:0!important;max-width:190px;padding:0;text-decoration:none;width:190px!important"
                                             target="_blank">
                                              Click to View
                                          </a>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          @endif
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0">
                          <tbody>
                            <tr>
                              <td height="20" style="font-size:20px;line-height:20px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>


                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td height="45" style="font-size:45px;line-height:45px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </td>
                    </tr>
                  </tbody>
                </table>

              </td>
            </tr>

            <tr>
              <td style="padding:0">
                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                  <tbody>
                    <tr>
                      <td height="40" style="font-size:40px;line-height:40px;padding:0">&nbsp;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0px 10px">
                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                  <tbody>
                    <tr>
                      <td align="center" valign="top"
                        style="color:#cccccc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:300;padding:0px 10px;text-decoration:none">
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
                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                  style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
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
  </div>
</body>

</html>

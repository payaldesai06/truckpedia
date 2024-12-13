<!DOCTYPE html>
<html lang="en">

<body>
  <div style="Margin:0;background-color:#fbfbfb!important;color:#242128;font-family:Arial,sans-serif;font-size:14px;font-weight:normal;line-height:1.3;margin:0!important;padding:0">
    <div style="table-layout:fixed;width:100%;text-align: center">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
        <tbody>
          <tr>
            <td height="40" style="font-size:40px;line-height:40px;padding:0;text-align:center">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <div style="margin:0 auto;max-width:600px">
        <table style="text-align: center; Margin:0 auto;border-spacing:0;color:#242128;font-family:Arial,sans-serif;max-width:600px;width:100%">
          <tbody>
            <tr>
              <td style="padding:0px 10px">
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
              <td style="padding:0px 10px">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="background-color:#ffffff;border-collapse:separate!important;border-color:#e4e2e2;border-radius:4px;border-spacing:0;border-style:solid;border-width:1px;color:#242128;font-family:Arial,sans-serif">
                  <tbody>
                    <tr>
                      <td align="center" valign="top" style="padding:0">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td height="45" style="font-size:45px;line-height:45px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td align="center" valign="top" style="padding:0px 25px">

                                <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="border-collapse:separate!important;border-color:#fff;border-radius:4px;border-spacing:0;border-style:solid;border-width:1px;color:#242128;font-family:Arial,sans-serif">

                                  <tbody>
                                    <tr>
                                      <td align="center" valign="top" style="padding:0">

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td height="25" style="font-size:25px;line-height:25px;padding:0">
                                                &nbsp;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td valign="top">
                                                <p style="Margin:0;color:#242128;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;font-weight:normal;line-height:1.3;margin:0!important;padding:0">
                                                  {!! $content !!}
                                                </p>

                                              </td>

                                            </tr>
                                          </tbody>
                                        </table>

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            <tr>
                                              <td height="30" style="font-size:30px;line-height:30px;padding:0">
                                                &nbsp;
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>


                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                                          <tbody>
                                            @if(!empty($newAssets))
                                            @php
                                            $driverAssets = $newAssets['drivers'] ?? [];
                                            $truckAssets = $newAssets['trucks'] ?? [];
                                            $trailerAssets = $newAssets['trailers'] ?? [];
                                            @endphp
                                            @if(!empty($driverAssets))
                                            <tr>
                                              <th>Driver</th>
                                            </tr>
                                            @foreach($driverAssets as $asset)
                                            <tr style="text-align: center">
                                              <td> {{$asset['name']}}</td>
                                            </tr>
                                            @endforeach
                                            <br>
                                            @endif
                                            @if(!empty($truckAssets))
                                            <tr>
                                              <th>Truck</th>
                                            </tr>
                                            @foreach($truckAssets as $asset)
                                            <tr style="text-align: center">
                                              <td> {{$asset['number']}}</td>
                                            </tr>
                                            @endforeach
                                            <br>
                                            @endif
                                            @if(!empty($trailerAssets))
                                            <tr>
                                              <th>Trailer</th>
                                            </tr>
                                            @foreach($trailerAssets as $asset)
                                            <tr style="text-align: center">
                                              <td> {{$asset['number']}}</td>
                                            </tr>
                                            @endforeach
                                            <br>
                                            @endif
                                            @endif
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

                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;color:#242128;font-family:Arial,sans-serif">
                          <tbody>
                            <tr>
                              <td height="35" style="font-size:35px;line-height:35px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0">
                          <tbody>
                            <tr>
                              <td height="20" style="font-size:20px;line-height:20px;padding:0">&nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>


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
                        <p>{{config('app.name')}} - "Capacity solutions platform designed to automate your operations with
                          AI."</p>
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
  </div>
</body>

</html>

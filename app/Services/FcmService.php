<?php

namespace App\Services;

class FcmService {
  public static function send($tokens, $notification, $data) {
    if (!config('fcm.fcm_server_key') || count($tokens) == 0) {
      return;
    }

    $fields = [
      "registration_ids" => $tokens,
      "priority" => 10,
      'notification' => $notification,
      'data' => $data,
      'vibrate' => 1,
      'sound' => 1
    ];

    $headers = [
      'accept: application/json',
      'Content-Type: application/json',
      'Authorization: key=' . config('fcm.fcm_server_key')
    ];


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, config('fcm.fcm_url'));
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
  }
}

<?php

namespace App\Services;

use App\Mail\WaitingList\WaitingListJoined;
use App\Models\WaitingList;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class WaitingListService {
  public function create() {
    $validatedData = request()->only([
      'company_name',
      'email',
      'phone_number',
      'number_of_trucks',
    ]);

    Log::channel('slack_confidential-prod-data')->critical(
      'New waiting list signup: ' . $validatedData['company_name'] . ', ' .
        $validatedData['email'] . ', ' .
        $validatedData['phone_number'] . ', ' .
        $validatedData['number_of_trucks'] . ' trucks.'
    );

    return tap(WaitingList::create($validatedData), function ($waitingList) {
      Mail::to(config('constant.emails.support'))
        ->queue(new WaitingListJoined($waitingList));
    });
  }
}

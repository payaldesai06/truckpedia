<?php

namespace App\Services;

use App\Mail\LoadCollaborator\AddEmailCollaboratorNotification;
use App\Models\Load;
use App\Models\LoadCollaborator;
use Exception;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class LoadCollaboratorService {
  public function create() {
    try {
//      $loadDetails = Load::where('id', request('load_id'))->with('adminCompanyDetail')->first();

//      Mail::to(trim(request('email')))
//        ->queue(new AddEmailCollaboratorNotification(request()->all(), $loadDetails));
      $loadCollaborator = LoadCollaborator::create(request()->all());

      return $loadCollaborator;
    } catch (Exception $exception) {
      Log::error($exception);
      throw new Exception($exception->getMessage());
    }
  }

  public function update() {
    return LoadCollaborator::where('id', request('id'))->update([
      'name' => request('name'),
      'email' => request('email'),
    ]);
  }

  public function delete() {
    return LoadCollaborator::where('id', request('id'))->delete();
  }

  public function getByLoadId() {
    return LoadCollaborator::where('load_id', request('load_id'))->get();
  }
}

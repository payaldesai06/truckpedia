<?php

namespace App\Http\Controllers;

use App\Http\Requests\SetNewPasswordRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Passport\Token;

class SetNewPassword extends Controller {
  public function update(SetNewPasswordRequest $request) {
    $id = request('id');

    // Set new password via the email link.
    tap(User::findOrFail($id), function ($user) {
      Token::where('user_id', $user->id)->update(['revoked' => true]);
      $user->update(['password' => request('password')]);
    });

    return view('verification.verified');
  }
}

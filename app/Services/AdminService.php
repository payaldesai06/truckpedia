<?php


namespace App\Services;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\Token;

class AdminService {
  public function passwordChange() {
    // User changes his/her own password. Suppose this user is logged in on 3 browsers, A, B, and C. This user changes his/her own password on browser A. Then we revoke the tokens for B and C, but keep the token for A valid.
    DB::transaction(function () {
      Token::where('id', '!=', Auth::user()->token()->id)->where('user_id', Auth::id())->update(['revoked' => true]);
      return Auth::user()->update(['password' => request('new_password')]);
    });
  }

  public function updateProfile() {
    $data = request([
      'first_name', 'last_name', 'profile_image'
    ]);
    $user = Auth::user();
    $user->adminDetail()->update($data);
    return $user;
  }
}

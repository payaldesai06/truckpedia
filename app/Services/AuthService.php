<?php

namespace App\Services;

use App\Models\AdminDetail;
use App\Models\User;
use App\Notifications\SetNewPassword;
use Illuminate\Support\Facades\Auth;

class AuthService {
  private $userRoles;

  public function __construct() {
    $this->userRoles = config('constant.roles');
  }

  public function register() {
    $userData = request([
      'email', 'first_name', 'last_name'
    ]);

    if (!empty(request('password'))) {
      $userData['password'] = request('password');
    }

    $userData['role'] = !empty(request('role')) ? request('role') : config('constant.roles.admin');

    $user = User::create($userData);

    if (empty($user->password)) {
      $this->forgetPassword();
    }

    $adminData = request([
      'first_name', 'last_name',
    ]);

    $user->adminDetail()->create($adminData);
    return $user;
  }

  public function login() {
    $userRoles = config('constant.roles');

    $allowedRoles = collect([
      $userRoles['super_admin'],
      $userRoles['admin'],
      $userRoles['dispatcher'],
      $userRoles['warehouse_operator'],
      $userRoles['tag_operator'],
      $userRoles['maintenance'],
    ]);

    if (
      Auth::attempt(
        ['email' => request('email'), 'password' => request('password')],
        request('remember_me')
      )
      && $allowedRoles->contains(Auth::user()->role)
      // User cannot log in if not in active status.
      && Auth::user()->status == config('constant.status.user.active')
    ) {
      return Auth::user();
    }

    return null;
  }

  public function logout() {
    return request()->user()->token()->revoke();
    // return Auth::user()->tokens->each->delete();
  }

  public function getAuthUserWithToken() {
    $user = Auth::user();

    $user->access_token = $user->createToken('authToken')->accessToken;

    return $user;
  }

  /*
    Alert: this function is not used, check
    AdminCompanyProfileService's setupProfile().
    TODO: delete this function.
    public function setupProfile()
    {
    $data = request([
    'business_name', 'usdot_number', 'address', 'city', 'state', 'zipcode', 'phone_number', 'fax_number', 'timezone'
    ]);
    return Auth::user()->adminCompanyDetail()->create($data);
    }*/

  public function updateProfile() {
    $validatedData = request()->validate([
      'first_name' => ['required', 'max:255'],
      'last_name' => ['required', 'max:255'],
      'profile_image' => '',
    ]);

    return tap(Auth::user(), function ($user) use ($validatedData) {
      $user->update([
        "first_name" => request('first_name'),
        "last_name" => request('last_name')
      ]);
      if ($user->role == $this->userRoles['super_admin']) {
        $user->superAdminDetail()->update($validatedData);
      }

      if ($user->role == $this->userRoles['admin']) {
        $user->adminDetail()->update($validatedData);
      }

      if ($user->role == $this->userRoles['dispatcher']) {
        $user->dispacherDetail()->update($validatedData);
      }
    });
  }

  public function forgetPassword() {
    return tap(User::where('email', request('email'))->firstOrFail(), function ($user) {
      $user->notify(new SetNewPassword());
    });
  }

  /**
   * Generate pre-signed url of s3 to upload profile logo.
   * @param $request
   * @return array
   * @throws Exception
   */
  public function getUserFileUploadUrl($request): array {
    $fileName = 'profile-' . generateUniqueFileName($request->userId, $request->extension);
    return [
      'storageFileName' => $fileName,
      'url' => generatePresignedUrl($fileName, config('constant.s3.admin_profile'))
    ];
  }
}

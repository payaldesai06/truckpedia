<?php

namespace App\Http\Controllers\Api\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Resources\RegisteredUser\RegisteredUserCollection;
use App\Services\SuperAdmin\RegisteredUserService;
use Illuminate\Support\Facades\Log;

class RegisteredUserController extends Controller
{
    private $registeredUserService;

    public function __construct(RegisteredUserService $registeredUserService)
    {
        $this->registeredUserService = $registeredUserService;
    }

    public function datatable()
    {
        try {
            $users =$this->registeredUserService->datatable();
            return $this->respondWithData(new RegisteredUserCollection($users));
        }catch (\Exception $exception){
            Log::error($exception);
            return $this->respondInternalError($exception->getMessage(), [], $exception);
        }
    }
}

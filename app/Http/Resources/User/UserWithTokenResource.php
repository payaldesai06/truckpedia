<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserWithTokenResource extends JsonResource
{
    protected $accessToken;

    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */

    public function __construct($user, $accessToken)
    {
        parent::__construct($user);
        $this->accessToken = $accessToken;
    }

    public function toArray($request)
    {
        return [
            $this->merge(new UserResource($this)),
            'access_token' => $this->accessToken,
        ];
    }
}

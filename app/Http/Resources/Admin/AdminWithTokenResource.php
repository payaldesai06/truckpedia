<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminWithTokenResource extends JsonResource
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
            'access_token' => $this->accessToken,
            $this->merge(new AdminResource($this)),
            'admin_details' => [
                $this->merge(new AdminDetailResource($this->adminDetail)),
            ],
        ];
    }
}

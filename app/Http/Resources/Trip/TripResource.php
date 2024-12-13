<?php

namespace App\Http\Resources\Trip;

use App\Http\Resources\Load\LoadMainResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class TripResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            $this->merge(new TripMainResource($this)),

            $this->mergeWhen(
                ($this->status == config('constant.status.trip_in_progress.payment_request')),
                [
                    'loads' => LoadMainResource::collection($this->loads),

                ]
            ),

            $this->mergeWhen(
                (in_array($this->status, config('constant.status.trip_paid'))),
                [
                    'loads' => TripPlaidLoadResource::collection($this->loads),
                    'payment_details' => new TripPaymentResource($this->tripPayments->first())

                ]
            ),

        ];
    }
}

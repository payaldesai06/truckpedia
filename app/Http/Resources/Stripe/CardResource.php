<?php

namespace App\Http\Resources\Stripe;

use App\Http\Resources\Admin\AdminResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CardResource extends JsonResource
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

            'stripe_payment_method_id' => $this->id ?? "",
            'stripe_customer_id' => $this->customer ?? "",
            'card_type' => $this->card->brand ?? "",
            'card_expiration_month' => $this->card->exp_month ?? "",
            'card_expiration_year' => $this->card->exp_year ?? "",
            'last4' => $this->card->last4 ?? "",
            'address' => [
                'postal_code' => $this->billing_details->address->postal_code ?? "",
            ]
        ];
    }
}

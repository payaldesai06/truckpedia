<?php

namespace App\Http\Resources\Transction;

use Illuminate\Http\Resources\Json\JsonResource;

class TranscationResource extends JsonResource {
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request) {
    if ($this->new_response) {
      $stripeResponse = json_decode($this->new_response);
    } else {
      $stripeResponse = json_decode($this->response);
    }

    return [
      'transcation_id' => $this->id ?? "",
      'admin_company_detail_id' => $this->admin_company_detail_id ?? "",
      'stripe_payment_method_id' => $this->stripe_payment_method_id ?? "",
      'stripe_transaction_id' => $this->stripe_transaction_id ?? "",
      'amount' => formatNumberToCurrency($this->amount) ?? "",
      'status' => $this->status ?? "",
      // 'response' => $this->response ?? "",
      'created_at' => $this->created_at->format('Y-m-d') ?? "",
      'from_date' => $this->from_date ?? "",
      'to_date' => $this->to_date ?? "",
      'receipt_number' => $stripeResponse
        ->charges->data[0]->receipt_number ?? '',
    ];
  }
}

<?php

namespace App\Http\Resources\LanguageLabel;

use Illuminate\Http\Resources\Json\JsonResource;

class LanguageLabelResource extends JsonResource
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
            'label_id' => $this->id ?? "",
            'label_name' => $this->label_name ?? "",
            'label_english' => $this->label_english ?? "",
            'label_chinese' => $this->label_chinese ?? "",
        ];
    }
}

<?php

namespace App\Http\Requests\Api\LanguageLabel;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLanguageLabelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'label_name' => 'required|unique:language_labels,label_name,' . request('languageLabel'),
            'label_english' => 'required',
            'label_chinese' => 'required',
        ];
    }
}

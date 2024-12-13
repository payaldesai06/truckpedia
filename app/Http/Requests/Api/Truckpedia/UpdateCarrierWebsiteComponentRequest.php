<?php

namespace App\Http\Requests\Api\Truckpedia;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCarrierWebsiteComponentRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'websiteHtml' => 'required',
      'websiteHtml.header' => 'required',
      'websiteHtml.header.htmlCode' => 'required|string',
      'websiteHtml.footer' => 'required',
      'websiteHtml.footer.htmlCode' => 'required|string',
      'websiteHtml.tabs' => 'required|array|min:1',
      'websiteHtml.tabs.*.id' => 'nullable|numeric',
      'websiteHtml.tabs.*.name' => 'required|string|max:255|min:3',
      'websiteHtml.tabs.*.path' => 'nullable|string|max:40|min:3',
      'websiteHtml.tabs.*.htmlCode' => 'required|string'
    ];
  }

  public function messages(): array {
    return [
      'websiteHtml.header.required' => 'The WebsiteHtml header is required.',
      'websiteHtml.header.htmlCode.required' => 'The WebsiteHtml header htmlCode is required.',
      'websiteHtml.header.htmlCode.string' => 'The WebsiteHtml header htmlCode only string type allowed.',
      'websiteHtml.footer.required' => 'The websiteHtml footer is required.',
      'websiteHtml.footer.htmlCode.required' => 'The websiteHtml footer htmlCode is required',
      'websiteHtml.footer.htmlCode.string' => 'The websiteHtml footer htmlCode only string type allowed.',
      'websiteHtml.tabs.required' => 'The websiteHtml tabs is required.',
      'websiteHtml.tabs.array' => 'The websiteHtml tabs is an array type.',
      'websiteHtml.tabs.min' => 'The websiteHtml tabs is min 1.',
      'websiteHtml.tabs.*.id.numeric' => 'The websiteHtml tabs id only numeric type allowed.',
      'websiteHtml.tabs.*.name.required.' => 'The websiteHtml tabs name is required.',
      'websiteHtml.tabs.*.path.string' => 'The websiteHtml tabs path only string type allowed.',
      'websiteHtml.tabs.*.htmlCode.required' => 'The websiteHtml tabs htmlCode is required.',
      'websiteHtml.tabs.*.htmlCode.string' => 'The websiteHtml tabs htmlCode only string type allowed.'
    ];
  }
}

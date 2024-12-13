<?php

namespace App\Http\Requests\Api\InvoiceV2;

use Illuminate\Foundation\Http\FormRequest;

class GetListInvoiceV2Request extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize(): bool {
    return true;
  }

  private function getStatuses(): array {
    return [
      'delivered' => config('constant.status.load.delivered'),
      'invoice_created' => config('constant.status.load.invoice_created'),
      'payment_requested' => config('constant.status.load.invoice_sent'),
      'invoice_paid' => config('constant.status.load.invoice_paid')
    ];
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules(): array {
    return [
      'filter.type' => 'nullable|string|in:' . implode(',', config('constant.invoices.type')),
      'filter.status' => 'nullable|string', // |in:' . implode(',', config('constant.status.invoice')) this is wrong.
      'filter.statuses' => 'nullable|array|min:1',
      'filter.statuses.*' => 'distinct|in:' . implode(',',  $this->getStatuses()),
      'filter.invoiceNumber' => 'nullable|string|max:255',
      'filter.customerName' => 'nullable|string|max:255',
      'filter.loadReference' => 'nullable|string|max:255',
      'filter.amount' => 'nullable|numeric|between:-999999.99,999999.99',
      'filter.issueDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filter.dueDate' => 'nullable|date|date_format:' . config('constant.date_format'),
      'filter.firstShipDateRange.startDate' => 'nullable|required_with:filter.firstShipDateRange|date|date_format:' . config('constant.date_format'),
      'filter.firstShipDateRange.endDate' => 'nullable|required_with:filter.firstShipDateRange|date|date_format:' . config('constant.date_format'),
      'filter.lastDelDateRange.startDate' => 'nullable|required_with:filter.lastDelDateRange|date|date_format:' . config('constant.date_format'),
      'filter.lastDelDateRange.endDate' => 'nullable|required_with:filter.lastDelDateRange|date|date_format:' . config('constant.date_format'),
      'filter.issueDateRange.startDate' => 'nullable|required_with:filter.issueDateRange|date|date_format:' . config('constant.date_format'),
      'filter.issueDateRange.endDate' => 'nullable|required_with:filter.issueDateRange|date|date_format:' . config('constant.date_format'),
      'filter.salesRep' => 'nullable|string|max:255',
      'filter.toDownload' => 'nullable|boolean',
      'sortBy.field' => 'required_with:sortBy|nullable|string|in:' . implode(',', array_keys(config('constant.invoices.sortBy.field'))),
      'sortBy.order' => 'required_with:sortBy|nullable|string|in:' . implode(',', config('constant.invoices.sortBy.order')),
      'perPage' => 'nullable|integer|min:1',
    ];
  }

  public function messages(): array {
    return [
      'filter.type.string' => 'The filter type field is supported only ' . implode('|', config('constant.invoices.type')),
      'filter.type.in' => 'The filter type field is supported only ' . implode('|', config('constant.invoices.type')),
      //'filter.status.string' => 'The filter status field is supported only ' . implode('|', config('constant.status.invoice')),
      //'filter.status.in' => 'The filter status field is supported only ' . implode('|', config('constant.status.invoice')),
      'filter.statuses.*.distinct' => 'The filter statuses field must be unique.',
      'filter.statuses.*.in' => 'The filter statuses field is supported only ' . implode('|', $this->getStatuses()),
      'filter.invoiceNumber.string' => 'The filter invoiceNumber field is supported only string type.',
      'filter.customerName.string' => 'The filter customerName field is supported only string type.',
      'filter.loadReference.string' => 'The filter loadReference field is supported only string type.',
      'filter.loadReference.max' => 'The filter loadReference field is supported maximum 255 string.',
      'filter.amount.numeric' => 'The filter amount field is supported only numeric type.',
      'filter.amount.between' => 'The filter amount field should be between -999999.99,999999.99.',
      'filter.issueDate.date' => 'The filter issueDate field must be date.',
      'filter.issueDate.date_format' => 'The filter issueDate is supported date format ' . config('constant.date_format'),
      'filter.dueDate.date' => 'The filter dueDate field must be date.',
      'filter.dueDate.date_format' => 'The filter dueDate is supported date format ' . config('constant.date_format'),
      'filter.salesRep.string' => 'The filter salesRep field is supported only string type.',
      'filter.salesRep.max' => 'The filter salesRep field is supported maximum 255 string.',
      'filter.toDownload.boolean' => 'The filter toDownload field must be boolean.',
      'sortBy.field.required_with' => 'The sortBy field is required when sortBy is present.',
      'sortBy.field.string' => 'The sortBy field is supported only ' . implode('|', array_keys(config('constant.invoices.sortBy.field'))),
      'sortBy.field.in' => 'The sortBy field is supported only ' . implode('|', array_keys(config('constant.invoices.sortBy.field'))),
      'sortBy.order.required_with' => 'The sortBy order is required when sortBy is present.',
      'sortBy.order.string' => 'The sortBy order field is supported only ' . implode('|', config('constant.invoices.sortBy.order')),
      'sortBy.order.in' => 'The sortBy order field is supported only ' . implode('|', config('constant.invoices.sortBy.order')),
      'filter.firstShipDateRange.startDate.date' => 'The filter firstShipDateRange startDate field must be date.',
      'filter.firstShipDateRange.startDate.date_format' => 'The filter firstShipDateRange startDate is supported date format ' . config('constant.date_format'),
      'filter.firstShipDateRange.startDate.required_with' => 'The filter firstShipDateRange startDate field is required when firstShipDateRange present.',
      'filter.firstShipDateRange.endDate.date' => 'The filter firstShipDateRange endDate field must be date.',
      'filter.firstShipDateRange.endDate.date_format' => 'The filter firstShipDateRange endDate is supported date format ' . config('constant.date_format'),
      'filter.firstShipDateRange.endDate.required_with' => 'The filter firstShipDateRange endDate field is required when firstShipDateRange present.',
      'filter.lastDelDateRange.startDate.date' => 'The filter lastDelDateRange startDate field must be date.',
      'filter.lastDelDateRange.startDate.date_format' => 'The filter lastDelDateRange startDate is supported date format ' . config('constant.date_format'),
      'filter.lastDelDateRange.startDate.required_with' => 'The filter lastDelDateRange startDate field is required when lastDelDateRange present.',
      'filter.lastDelDateRange.endDate.date' => 'The filter lastDelDateRange endDate field must be date.',
      'filter.lastDelDateRange.endDate.date_format' => 'The filter lastDelDateRange endDate is supported date format ' . config('constant.date_format'),
      'filter.lastDelDateRange.endDate.required_with' => 'The filter lastDelDateRange endDate field is required when lastDelDateRange present.',
      'filter.issueDateRange.startDate.date' => 'The filter issueDateRange startDate field must be date.',
      'filter.issueDateRange.startDate.date_format' => 'The filter issueDateRange startDate is supported date format ' . config('constant.date_format'),
      'filter.issueDateRange.startDate.required_with' => 'The filter issueDateRange startDate field is required when issueDateRange present.',
      'filter.issueDateRange.endDate.date' => 'The filter issueDateRange endDate field must be date.',
      'filter.issueDateRange.endDate.date_format' => 'The filter issueDateRange endDate is supported date format ' . config('constant.date_format'),
      'filter.issueDateRange.endDate.required_with' => 'The filter issueDateRange endDate field is required when issueDateRange present.',
    ];
  }
}

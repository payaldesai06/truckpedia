<?php

namespace App\Services\AuthorizeNet;

use App\Http\Requests\Api\AuthorizeNet\ProcessPaymentRequest;
use App\Models\Invoice;
use App\Models\AuthorizeNet\AuthorizeNetKey;
use net\authorize\api\contract\v1 as AnetAPI;
use net\authorize\api\contract\v1\AnetApiResponseType;
use net\authorize\api\controller as AnetController;

// Testing credit cards: https://developer.authorize.net/hello_world/testing_guide.html

class AuthorizeNetService {
  private $url;

  public function __construct() {
    if (app()->environment('production')) {
      $this->url = config('services.authorizeNet.prod.baseUri');
    } else {
      $this->url = config('services.authorizeNet.dev.baseUri');
    }
  }

  public function getClientKeyByInvoice(int $invoiceId, $refreshPublicClientKey = false) {
    $invoice = Invoice::select(['id', 'company_id'])->findOrFail($invoiceId);

    $authorizeNetKey = $this->checkIfCompanyHasAuthorizeNetAccount($invoice->company_id);
    if (!$authorizeNetKey) {
      throw new \Exception(config('response.authorizeNet.keyNotFound'));
    }

    $publicClientKey = $authorizeNetKey->public_client_key;

    if (!$authorizeNetKey->public_client_key || $refreshPublicClientKey) {
      $publicClientKey = $this->getPublicClientKey($authorizeNetKey);
    }

    return [
      'publicClientKey' => $publicClientKey,
      'loginId' => $authorizeNetKey->login_id,
    ];
  }

  public function checkIfCompanyHasAuthorizeNetAccount($companyId) {
    $key = AuthorizeNetKey::where('company_id', $companyId)->first();

    /*if (!$key) {
      throw new \Exception(config('response.authorizeNet.keyNotFound'));
    }*/

    return $key;
  }

  /**
   * This function gives us the public Ezpapel URL for making payments.
   * @param $invoiceId
   * @return string
   */
  public function getPaymentLink(int $invoiceId): string {
    $encryptedInvoiceId = encrypt($invoiceId);
    $baseUrl = config('app.url');
    return "{$baseUrl}/pay-invoice/authorize-net/{$encryptedInvoiceId}";
  }


  /**
   * This function gets the public client key
   * @param AuthorizeNetKey $authorizeNetKey
   * @return mixed
   * @throws \Exception
   */
  private function getPublicClientKey(AuthorizeNetKey $authorizeNetKey): string {
    $merchantAuthentication = new AnetAPI\MerchantAuthenticationType();
    $merchantAuthentication->setName($authorizeNetKey->login_id);
    $merchantAuthentication->setTransactionKey($authorizeNetKey->transaction_key);

    $request = new AnetAPI\GetMerchantDetailsRequest();
    $request->setMerchantAuthentication($merchantAuthentication);
    $controller = new AnetController\GetMerchantDetailsController($request);
    $response = $controller->executeWithApiResponse($this->url);

    if (($response != null) && ($response->getMessages()->getResultCode() == "Ok")) {
      $publicKey = $response->getPublicClientKey();
      $authorizeNetKey->update(['public_client_key' => $publicKey]);
      return $publicKey;
    }

    throw new \Exception("Can't get public client key");
  }

  /**
   * This function processes the payment and calls the necessary functions to create the transaction.
   * @param ProcessPaymentRequest $request
   * @return array
   * @throws \Exception
   */
  public function processPayment(ProcessPaymentRequest $request): array {
    $invoice = Invoice::select(['id', 'company_id', 'customer_id', 'invoice_number'])
      ->with([
        'customer:id,company_name,billing_address,billing_city,billing_state,billing_zip_code',
      ])
      ->findOrFail($request->invoiceId);

    $authorizeNetKey = AuthorizeNetKey::select(['id', 'login_id', 'transaction_key'])
      ->where('company_id', $invoice->company_id)
      ->firstOrfail();

    $response = $this->createAnAcceptPaymentTransaction(
      $authorizeNetKey,
      // To avoid collision with existing ids. Cannot use ezpapel due to string
      // length limit.
      $refId = 'ez-' . $invoice->id . '-' . time(),
      $request->paymentAmount,
      $request->paymentNonce,
      $invoice
    );

    $paymentData = [
      'amount_paid' => $request->paymentAmount,
      'payment_service_provider' => array_search(
        'authorize.net',
        config('constant.invoices.paymentServiceProvider')
      ),
      'reference_id' => $refId,
      'transaction_id' => null,
      'error_messages' => null,
      'user_id' => auth()->user() ? auth()->user()->id : null,
    ];

    if (!$response) {
      $paymentData['status'] = array_search('failed', config('constant.invoices.status.invoicePayments'));
      $paymentData['error_messages'] = 'Did not receive response from payment gateway.';
      // $this->createInvoicePayments($invoice, $paymentData);
      throw new \Exception("Payment failed: did not receive response from payment gateway.");
    }

    if ($response->getMessages()->getResultCode() != "Ok") {
      $paymentData['status'] = array_search('failed', config('constant.invoices.status.invoicePayments'));
      $paymentData['error_messages'] = $response->getMessages()->getMessage()[0]->getText();
      // We can turn this on later.
      // $this->createInvoicePayments($invoice, $paymentData);
      throw new \Exception($response->getMessages()->getMessage()[0]->getText());
    }

    $transactionDetails = $response->getTransactionResponse();
    $paymentData['transaction_id'] = optional($transactionDetails)->getTransId();
    $paymentData['status'] = array_search('success', config('constant.invoices.status.invoicePayments'));
    $paymentData['card_issuing_bank'] = optional($transactionDetails)->getAccountType();
    $paymentData['card_last_4'] = optional($transactionDetails)->getAccountNumber();
    $this->createInvoicePayments($invoice, $paymentData);

    return [
      'transactionId' => $transactionDetails->getTransId(),
    ];
  }

  /**
   * @param Invoice $invoice
   * @param $data
   * @return mixed
   */
  private function createInvoicePayments(Invoice $invoice, array $data) {
    return $invoice->invoicePayments()->create($data);
  }

  /**
   * This function creates an accept payment transaction
   * @param AuthorizeNetKey$authorizeNetKey
   * @param string $refId
   * @param float $amount
   * @param string $paymentNonce
   * @param $invoice
   * @return AnetApiResponseType|null
   */
  private function createAnAcceptPaymentTransaction(
    AuthorizeNetKey $authorizeNetKey,
    string $refId,
    float $amount,
    string $paymentNonce,
    $invoice
  ) {
    $merchantAuthentication = new AnetAPI\MerchantAuthenticationType();
    $merchantAuthentication->setName($authorizeNetKey->login_id);
    $merchantAuthentication->setTransactionKey($authorizeNetKey->transaction_key);

    // Create the payment object for a payment nonce
    $opaqueData = new AnetAPI\OpaqueDataType();
    $opaqueData->setDataDescriptor("COMMON.ACCEPT.INAPP.PAYMENT");
    $opaqueData->setDataValue($paymentNonce);

    // Add the payment data to a paymentType object
    $paymentOne = new AnetAPI\PaymentType();
    $paymentOne->setOpaqueData($opaqueData);

    // Create order information
    $order = new AnetAPI\OrderType();
    $order->setInvoiceNumber($invoice->invoice_number);
    $order->setDescription($invoice->notes);

    $customer = $invoice->customer;
    // Set the customer's Bill To address
    $customerAddress = new AnetAPI\CustomerAddressType();
    // These are wrong.
    // $customerAddress->setFirstName($user->first_name);
    // $customerAddress->setLastName($user->last_name);
    $customerAddress->setCompany($customer->company_name);
    $customerAddress->setAddress($customer->billing_address);
    $customerAddress->setCity($customer->billing_city);
    $customerAddress->setState($customer->billing_state);
    $customerAddress->setZip($customer->billing_zip_code);

    // Set the customer's identifying information
    $customerData = new AnetAPI\CustomerDataType();
    $customerData->setType("business");
    // To avoid collision with existing ids.
    $customerData->setId("ezpapel-" . $customer->id);
    $customerData->setEmail($customer->billing_email);

    // Add values for transaction settings
    $duplicateWindowSetting = new AnetAPI\SettingType();
    $duplicateWindowSetting->setSettingName("duplicateWindow");
    $duplicateWindowSetting->setSettingValue("60");

    // Create a TransactionRequestType object and add the previous objects to it
    $transactionRequestType = new AnetAPI\TransactionRequestType();
    $transactionRequestType->setTransactionType("authCaptureTransaction");
    $transactionRequestType->setAmount($amount);
    $transactionRequestType->setOrder($order);
    $transactionRequestType->setPayment($paymentOne);
    $transactionRequestType->setBillTo($customerAddress);
    $transactionRequestType->setCustomer($customerData);
    $transactionRequestType->addToTransactionSettings($duplicateWindowSetting);

    // Assemble the complete transaction request
    $request = new AnetAPI\CreateTransactionRequest();
    $request->setMerchantAuthentication($merchantAuthentication);
    $request->setRefId($refId);
    $request->setTransactionRequest($transactionRequestType);

    // Create the controller and get the response
    $controller = new AnetController\CreateTransactionController($request);
    return $controller->executeWithApiResponse($this->url);
  }

  /**
   * @description This function is used to create or update the authorize.net key on table authorize_net_keys
   * @param string $loginId
   * @param string $transactionKey
   * @param string $publicClientKey
   */
  public function createOrUpdateKey(
    string $loginId,
    string $transactionKey,
    string $publicClientKey
  ): void {
    AuthorizeNetKey::updateOrCreate(
      [
        'company_id' => getAuthAdminCompanyId(),
      ],
      [
        'login_id' => $loginId,
        'transaction_key' => $transactionKey,
        'public_client_key' => $publicClientKey
      ]
    );
  }

  /**
   * Get AuthorizeNet account connection status.
   * @return string
   */
  public function getConnectionStatus(): string {
    $authorizeNetAccount = AuthorizeNetKey::select('company_id', 'login_id', 'transaction_key', 'public_client_key')
      ->where('company_id', getAuthAdminCompanyId())->first();

    if (
      !$authorizeNetAccount
      || !$authorizeNetAccount->login_id
      || !$authorizeNetAccount->transaction_key
      || !$authorizeNetAccount->public_client_key
    ) {
      return 'No valid AuthorizeNet account.';
    }
    return 'Connected';
  }

  /**
   * Get AuthorizeNet keys by user’s company id
   * @return AuthorizeNetKey|null
   */
  public function getKey() {
    return AuthorizeNetKey::where('company_id', getAuthAdminCompanyId())
      ->select(
        'login_id as loginId',
        'transaction_key as transactionKey',
        'public_client_key as publicClientKey'
      )
      ->first();
  }
}

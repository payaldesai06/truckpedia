<?php

namespace App\Services\OpenAi;

use Exception;
use GuzzleHttp\Client;

class OpenAiService {

  /**
   * Make a request to OpenAI API to get completions.
   * @return string
   * @throws Exception
   */
  public function makeCompletionRequest(string $prompt, ?array $requestConfigurations): string {

    if (empty($requestConfigurations)) {
      $requestConfigurations = config('openai.requestConfigurations.default');
    }

    $requestConfigurations['messages'][0]['content'] = $prompt;

    $client = new Client();

    $response = $client->post(config('openai.urls.completions'), [
      'headers' => [
        'Content-Type' => 'application/json',
        'Authorization' => 'Bearer ' . config('services.openAiApiKey'),
      ],
      'json' => $requestConfigurations,
    ]);

    $result = json_decode($response->getBody(), true);

    if ($response->getStatusCode() !== 200 || empty($result['choices'][0]['message']['content'])) {
        throw new \Exception('OpenAI request failed.');
    }

    return $result['choices'][0]['message']['content'];
  }

  /**
   * Fix Json response of OpenAi and convert it to array
   * @return array
   * @throws Exception
   */
  public function convertJsonResponseToArray(string $originalJsonResponse): array {
    try {
      $fixedJsonResponse = str_replace(array('\r', '\r\n', '\n', '\t'), ' ', $originalJsonResponse);
      $fixedJsonResponse = str_replace(array(PHP_EOL, "\r", "\r\n", "\n", "\t"), '', $fixedJsonResponse);
      $fixedJsonResponse = trim($fixedJsonResponse);
      return json_decode($fixedJsonResponse, true);
    } catch (Exception $e) {
      throw new \Exception('Failed to convert OpenAI response to array.');
    }
  }
}

<?php
return [
  'urls' => [
    'completions' => 'https://api.openai.com/v1/chat/completions'
  ],
  'requestConfigurations' => [
    'loads' => [
      'convertLoadTenderDataFromTxtToJson' => [
        'model' => "gpt-3.5-turbo",
        'messages' => [
          [
              "role" => "user",
          ],
        ],
        'temperature' => 0,
        'max_tokens' => 512,
        'top_p' => 0,
      ]
    ],
    'default' => [
       'model' => "gpt-3.5-turbo",
       'messages' => [
         [
           "role" => "user"
         ]
       ],
       'temperature' => 0,
       "max_tokens" => 512,
       "top_p" => 0
    ]
  ]
];

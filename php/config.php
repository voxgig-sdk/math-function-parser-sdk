<?php
declare(strict_types=1);

// MathFunctionParser SDK configuration

class MathFunctionParserConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "MathFunctionParser",
                "slug" => "math-function-parser",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://math.oglimmer.de",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "ast" => [],
                    "calc" => [],
                    "resolve" => [],
                    "tokenize" => [],
                ],
            ],
            "entity" => [
        'ast' => [
          'fields' => [
            [
              'name' => 'data',
              'title' => 'Data',
              'type' => '`$STRING`',
              'short' => 'Token data',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Token type',
            ],
          ],
          'name' => 'ast',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/ast',
                  'segments' => [
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'ast',
                    ],
                  ],
                  'parts' => [
                    'v1',
                    'ast',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tokens`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'expression',
                        'orig' => 'expression',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'calc' => [
          'fields' => [
            [
              'name' => 'data',
              'title' => 'Data',
              'type' => '`$STRING`',
              'short' => 'Token data',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Token type',
            ],
          ],
          'name' => 'calc',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/calc',
                  'segments' => [
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'calc',
                    ],
                  ],
                  'parts' => [
                    'v1',
                    'calc',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'expression',
                        'orig' => 'expression',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'resolve' => [
          'fields' => [],
          'name' => 'resolve',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/resolve',
                  'segments' => [
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'resolve',
                    ],
                  ],
                  'parts' => [
                    'v1',
                    'resolve',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'expression',
                        'orig' => 'expression',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'tokenize' => [
          'fields' => [
            [
              'name' => 'data',
              'title' => 'Data',
              'type' => '`$STRING`',
              'short' => 'Token data',
            ],
            [
              'name' => 'type',
              'title' => 'Type',
              'type' => '`$STRING`',
              'short' => 'Token type',
            ],
          ],
          'name' => 'tokenize',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/tokenize',
                  'segments' => [
                    [
                      'lit' => 'v1',
                    ],
                    [
                      'lit' => 'tokenize',
                    ],
                  ],
                  'parts' => [
                    'v1',
                    'tokenize',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tokens`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'expression',
                        'orig' => 'expression',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MathFunctionParserFeatures::make_feature($name);
    }
}

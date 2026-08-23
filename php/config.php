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
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://math.oglimmer.de",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "calc" => [],
                    "resolve" => [],
                    "tokenize" => [],
                ],
            ],
            "entity" => [
        'calc' => [
          'fields' => [
            [
              'name' => 'data',
              'short' => 'Token data',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Token type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'calc',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'expression',
                        'orig' => 'expression',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/calc',
                  'parts' => [
                    'v1',
                    'calc',
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'expression',
                        'orig' => 'expression',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/resolve',
                  'parts' => [
                    'v1',
                    'resolve',
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
              'short' => 'Token data',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Token type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'tokenize',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'expression',
                        'orig' => 'expression',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/ast',
                  'parts' => [
                    'v1',
                    'ast',
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tokens`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'expression',
                        'orig' => 'expression',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'x',
                        'orig' => 'x',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/v1/tokenize',
                  'parts' => [
                    'v1',
                    'tokenize',
                  ],
                  'select' => [
                    'exist' => [
                      'expression',
                      'x',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.tokens`',
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

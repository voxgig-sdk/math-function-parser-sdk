# MathFunctionParser SDK configuration

module MathFunctionParserConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "MathFunctionParser",
        "slug" => "math-function-parser",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://math.oglimmer.de",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "ast" => {},
          "calc" => {},
          "resolve" => {},
          "tokenize" => {},
        },
      },
      "entity" => {
        "ast" => {
          "fields" => [
            {
              "name" => "data",
              "title" => "Data",
              "type" => "`$STRING`",
              "short" => "Token data",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Token type",
            },
          ],
          "name" => "ast",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/ast",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "ast",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "ast",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.tokens`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "expression",
                        "orig" => "expression",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "calc" => {
          "fields" => [
            {
              "name" => "data",
              "title" => "Data",
              "type" => "`$STRING`",
              "short" => "Token data",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Token type",
            },
          ],
          "name" => "calc",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/calc",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "calc",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "calc",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "expression",
                        "orig" => "expression",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "resolve" => {
          "fields" => [],
          "name" => "resolve",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/resolve",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "resolve",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "resolve",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "expression",
                        "orig" => "expression",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "tokenize" => {
          "fields" => [
            {
              "name" => "data",
              "title" => "Data",
              "type" => "`$STRING`",
              "short" => "Token data",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Token type",
            },
          ],
          "name" => "tokenize",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/v1/tokenize",
                  "segments" => [
                    {
                      "lit" => "v1",
                    },
                    {
                      "lit" => "tokenize",
                    },
                  ],
                  "parts" => [
                    "v1",
                    "tokenize",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.tokens`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "expression",
                        "orig" => "expression",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MathFunctionParserFeatures.make_feature(name)
  end
end

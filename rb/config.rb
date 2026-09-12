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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://math.oglimmer.de",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "calc" => {},
          "resolve" => {},
          "tokenize" => {},
        },
      },
      "entity" => {
        "calc" => {
          "fields" => [
            {
              "name" => "data",
              "short" => "Token data",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Token type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "calc",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "expression",
                        "orig" => "expression",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
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
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "v1",
                    "calc",
                  ],
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
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "expression",
                        "orig" => "expression",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
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
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "v1",
                    "resolve",
                  ],
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
              "short" => "Token data",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Token type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "tokenize",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "expression",
                        "orig" => "expression",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
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
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.tokens`",
                  },
                  "parts" => [
                    "v1",
                    "ast",
                  ],
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "expression",
                        "orig" => "expression",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "x",
                        "orig" => "x",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
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
                  "select" => {
                    "exist" => [
                      "expression",
                      "x",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.tokens`",
                  },
                  "parts" => [
                    "v1",
                    "tokenize",
                  ],
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

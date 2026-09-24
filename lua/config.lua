-- MathFunctionParser SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "MathFunctionParser",
      slug = "math-function-parser",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://math.oglimmer.de",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["ast"] = {},
        ["calc"] = {},
        ["resolve"] = {},
        ["tokenize"] = {},
      },
    },
    entity = {
      ["ast"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$STRING`",
            ["short"] = "Token data",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["short"] = "Token type",
          },
        },
        ["name"] = "ast",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ast",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "ast",
                  },
                },
                ["parts"] = {
                  "v1",
                  "ast",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.tokens`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["calc"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$STRING`",
            ["short"] = "Token data",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["short"] = "Token type",
          },
        },
        ["name"] = "calc",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/calc",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "calc",
                  },
                },
                ["parts"] = {
                  "v1",
                  "calc",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["resolve"] = {
        ["fields"] = {},
        ["name"] = "resolve",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/resolve",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "resolve",
                  },
                },
                ["parts"] = {
                  "v1",
                  "resolve",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tokenize"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$STRING`",
            ["short"] = "Token data",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["short"] = "Token type",
          },
        },
        ["name"] = "tokenize",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/tokenize",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "tokenize",
                  },
                },
                ["parts"] = {
                  "v1",
                  "tokenize",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.tokens`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

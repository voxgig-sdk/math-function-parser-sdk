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
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://math.oglimmer.de",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["calc"] = {},
        ["resolve"] = {},
        ["tokenize"] = {},
      },
    },
    entity = {
      ["calc"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["short"] = "Token data",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Token type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "calc",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/calc",
                ["parts"] = {
                  "v1",
                  "calc",
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/resolve",
                ["parts"] = {
                  "v1",
                  "resolve",
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
            ["short"] = "Token data",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Token type",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "tokenize",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/ast",
                ["parts"] = {
                  "v1",
                  "ast",
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.tokens`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "expression",
                      ["orig"] = "expression",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "x",
                      ["orig"] = "x",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/tokenize",
                ["parts"] = {
                  "v1",
                  "tokenize",
                },
                ["select"] = {
                  ["exist"] = {
                    "expression",
                    "x",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.tokens`",
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

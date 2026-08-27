# MathFunctionParser SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "MathFunctionParser",
            "slug": "math-function-parser",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://math.oglimmer.de",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "calc": {},
                "resolve": {},
                "tokenize": {},
            },
        },
        "entity": {
      "calc": {
        "fields": [
          {
            "name": "data",
            "short": "Token data",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Token type",
            "type": "`$STRING`",
          },
        ],
        "name": "calc",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "expression",
                      "orig": "expression",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/calc",
                "parts": [
                  "v1",
                  "calc",
                ],
                "select": {
                  "exist": [
                    "expression",
                    "x",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "resolve": {
        "fields": [],
        "name": "resolve",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "expression",
                      "orig": "expression",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/resolve",
                "parts": [
                  "v1",
                  "resolve",
                ],
                "select": {
                  "exist": [
                    "expression",
                    "x",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tokenize": {
        "fields": [
          {
            "name": "data",
            "short": "Token data",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "Token type",
            "type": "`$STRING`",
          },
        ],
        "name": "tokenize",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "expression",
                      "orig": "expression",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/ast",
                "parts": [
                  "v1",
                  "ast",
                ],
                "select": {
                  "exist": [
                    "expression",
                    "x",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.tokens`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "expression",
                      "orig": "expression",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "x",
                      "orig": "x",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/tokenize",
                "parts": [
                  "v1",
                  "tokenize",
                ],
                "select": {
                  "exist": [
                    "expression",
                    "x",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.tokens`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

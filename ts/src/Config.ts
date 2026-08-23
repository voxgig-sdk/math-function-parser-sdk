
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'MathFunctionParser',
        slug: "math-function-parser",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://math.oglimmer.de",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      calc: {
      },

      resolve: {
      },

      tokenize: {
      },

    }
  }


  entity = {
    "calc": {
      "fields": [
        {
          "name": "data",
          "short": "Token data",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Token type",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/calc",
              "parts": [
                "v1",
                "calc"
              ],
              "select": {
                "exist": [
                  "expression",
                  "x"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/resolve",
              "parts": [
                "v1",
                "resolve"
              ],
              "select": {
                "exist": [
                  "expression",
                  "x"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "tokenize": {
      "fields": [
        {
          "name": "data",
          "short": "Token data",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "Token type",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/ast",
              "parts": [
                "v1",
                "ast"
              ],
              "select": {
                "exist": [
                  "expression",
                  "x"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.tokens`"
              }
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "expression",
                    "orig": "expression",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/tokenize",
              "parts": [
                "v1",
                "tokenize"
              ],
              "select": {
                "exist": [
                  "expression",
                  "x"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.tokens`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}


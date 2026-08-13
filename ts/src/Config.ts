
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


  main = {
    name: 'MathFunctionParser',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://math.oglimmer.de',

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
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "calc",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "expression",
                    "orig": "expression",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "reqd": false,
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
              },
              "index$": 0
            }
          ],
          "key$": "list"
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
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "expression",
                    "orig": "expression",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "reqd": false,
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
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "tokenize": {
      "fields": [
        {
          "active": true,
          "name": "data",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "type",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "tokenize",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "expression",
                    "orig": "expression",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "reqd": false,
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
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "expression",
                    "orig": "expression",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "x",
                    "orig": "x",
                    "reqd": false,
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
              },
              "index$": 1
            }
          ],
          "key$": "list"
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


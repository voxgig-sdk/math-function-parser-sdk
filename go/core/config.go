package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "MathFunctionParser",
			"slug": "math-function-parser",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://math.oglimmer.de",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"calc": map[string]any{},
				"resolve": map[string]any{},
				"tokenize": map[string]any{},
			},
		},
		"entity": map[string]any{
			"calc": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "Token data",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Token type",
						"type": "`$STRING`",
					},
				},
				"name": "calc",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "expression",
											"orig": "expression",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "x",
											"orig": "x",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/calc",
								"parts": []any{
									"v1",
									"calc",
								},
								"select": map[string]any{
									"exist": []any{
										"expression",
										"x",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"resolve": map[string]any{
				"fields": []any{},
				"name": "resolve",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "expression",
											"orig": "expression",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "x",
											"orig": "x",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/resolve",
								"parts": []any{
									"v1",
									"resolve",
								},
								"select": map[string]any{
									"exist": []any{
										"expression",
										"x",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tokenize": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "Token data",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Token type",
						"type": "`$STRING`",
					},
				},
				"name": "tokenize",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "expression",
											"orig": "expression",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "x",
											"orig": "x",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/ast",
								"parts": []any{
									"v1",
									"ast",
								},
								"select": map[string]any{
									"exist": []any{
										"expression",
										"x",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tokens`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "expression",
											"orig": "expression",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "x",
											"orig": "x",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/tokenize",
								"parts": []any{
									"v1",
									"tokenize",
								},
								"select": map[string]any{
									"exist": []any{
										"expression",
										"x",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.tokens`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

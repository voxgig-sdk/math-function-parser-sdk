# MathFunctionParser SDK

Parse, tokenize, and evaluate math expressions with variable support via a REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Mathematical Function Parser Service

The Mathematical Function Parser Service is a small REST API by [Oli Zimpasser](https://math.oglimmer.de) that parses and evaluates mathematical expressions. It is written in C++ on top of the [oat++](https://oatpp.io) framework and exposes its OpenAPI 3.0 contract through a [Swagger UI](https://math.oglimmer.de/swagger/ui).

What you get from the API:
- Evaluate an expression to a numeric result (e.g. `3+4`).
- Tokenize an expression into typed tokens.
- Return the abstract syntax tree (AST) for an expression.
- A combined endpoint that returns the result, parsed expression, tokens, AST, and processing time in a single response.
- Optional variable binding via the `x` query parameter, so expressions like `2*x+1` can be resolved against a supplied value.

Operational notes: all endpoints are simple `GET` calls under `/v1/` and take the formula via the `expression` query parameter. CORS is enabled, so the service can be called directly from a browser. The community catalogue reports an average response time around 162 ms and a 100% reliability score, but no formal SLA, authentication, or rate-limit policy is documented.

## Try it

**TypeScript**
```bash
npm install math-function-parser
```

**Python**
```bash
pip install math-function-parser-sdk
```

**PHP**
```bash
composer require voxgig/math-function-parser-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/math-function-parser-sdk/go
```

**Ruby**
```bash
gem install math-function-parser-sdk
```

**Lua**
```bash
luarocks install math-function-parser-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { MathFunctionParserSDK } from 'math-function-parser'

const client = new MathFunctionParserSDK({})

// List all calcs
const calcs = await client.Calc().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o math-function-parser-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "math-function-parser": {
      "command": "/abs/path/to/math-function-parser-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Calc** | Combined endpoint that tokenizes, parses, and resolves an expression, returning the result together with the parsed form, AST, tokens, and processing time at `GET /v1/calc`. | `/v1/calc` |
| **Resolve** | Evaluates a math expression (with optional variable `x`) and returns the numeric result as plain text at `GET /v1/resolve`. | `/v1/resolve` |
| **Tokenize** | Breaks an expression into its typed tokens (type and data fields) at `GET /v1/tokenize`. | `/v1/ast` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from mathfunctionparser_sdk import MathFunctionParserSDK

client = MathFunctionParserSDK({})

# List all calcs
calcs, err = client.Calc(None).list(None, None)
```

### PHP

```php
<?php
require_once 'mathfunctionparser_sdk.php';

$client = new MathFunctionParserSDK([]);

// List all calcs
[$calcs, $err] = $client->Calc(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/math-function-parser-sdk/go"

client := sdk.NewMathFunctionParserSDK(map[string]any{})

// List all calcs
calcs, err := client.Calc(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "MathFunctionParser_sdk"

client = MathFunctionParserSDK.new({})

# List all calcs
calcs, err = client.Calc(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("math-function-parser_sdk")

local client = sdk.new({})

-- List all calcs
local calcs, err = client:Calc(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = MathFunctionParserSDK.test()
const result = await client.Calc().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = MathFunctionParserSDK.test(None, None)
result, err = client.Calc(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = MathFunctionParserSDK::test(null, null);
[$result, $err] = $client->Calc(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Calc(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = MathFunctionParserSDK.test(nil, nil)
result, err = client.Calc(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Calc(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Mathematical Function Parser Service

- Upstream: [https://math.oglimmer.de](https://math.oglimmer.de)
- API docs: [https://math.oglimmer.de/swagger/ui](https://math.oglimmer.de/swagger/ui)

- API is published under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
- Service authored by Oli Zimpasser; attribute the upstream service when redistributing results.
- No explicit terms-of-use are published on the API homepage; treat usage as best-effort and check the Swagger UI for the most current details.

---

Generated from the Mathematical Function Parser Service OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

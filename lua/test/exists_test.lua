-- MathFunctionParser SDK exists test

local sdk = require("math-function-parser_sdk")

describe("MathFunctionParserSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

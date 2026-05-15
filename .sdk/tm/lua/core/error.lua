-- MathFunctionParser SDK error

local MathFunctionParserError = {}
MathFunctionParserError.__index = MathFunctionParserError


function MathFunctionParserError.new(code, msg, ctx)
  local self = setmetatable({}, MathFunctionParserError)
  self.is_sdk_error = true
  self.sdk = "MathFunctionParser"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MathFunctionParserError:error()
  return self.msg
end


function MathFunctionParserError:__tostring()
  return self.msg
end


return MathFunctionParserError

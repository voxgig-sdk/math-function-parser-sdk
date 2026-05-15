# MathFunctionParser SDK utility: make_context
require_relative '../core/context'
module MathFunctionParserUtilities
  MakeContext = ->(ctxmap, basectx) {
    MathFunctionParserContext.new(ctxmap, basectx)
  }
end

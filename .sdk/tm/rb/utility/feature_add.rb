# MathFunctionParser SDK utility: feature_add
module MathFunctionParserUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

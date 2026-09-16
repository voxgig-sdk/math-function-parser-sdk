# MathFunctionParser SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MathFunctionParserFeatures
  def self.make_feature(name)
    case name
    when "base"
      MathFunctionParserBaseFeature.new
    when "ratelimit"
      MathFunctionParserRatelimitFeature.new
    when "retry"
      MathFunctionParserRetryFeature.new
    when "test"
      MathFunctionParserTestFeature.new
    when "timeout"
      MathFunctionParserTimeoutFeature.new
    else
      MathFunctionParserBaseFeature.new
    end
  end
end

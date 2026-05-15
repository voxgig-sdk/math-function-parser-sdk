# MathFunctionParser SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MathFunctionParserFeatures
  def self.make_feature(name)
    case name
    when "base"
      MathFunctionParserBaseFeature.new
    when "test"
      MathFunctionParserTestFeature.new
    else
      MathFunctionParserBaseFeature.new
    end
  end
end

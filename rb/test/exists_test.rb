# MathFunctionParser SDK exists test

require "minitest/autorun"
require_relative "../MathFunctionParser_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MathFunctionParserSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

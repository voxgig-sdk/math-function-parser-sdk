# MathFunctionParser SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MathFunctionParserUtility.registrar = ->(u) {
  u.clean = MathFunctionParserUtilities::Clean
  u.done = MathFunctionParserUtilities::Done
  u.make_error = MathFunctionParserUtilities::MakeError
  u.feature_add = MathFunctionParserUtilities::FeatureAdd
  u.feature_hook = MathFunctionParserUtilities::FeatureHook
  u.feature_init = MathFunctionParserUtilities::FeatureInit
  u.fetcher = MathFunctionParserUtilities::Fetcher
  u.make_fetch_def = MathFunctionParserUtilities::MakeFetchDef
  u.make_context = MathFunctionParserUtilities::MakeContext
  u.make_options = MathFunctionParserUtilities::MakeOptions
  u.make_request = MathFunctionParserUtilities::MakeRequest
  u.make_response = MathFunctionParserUtilities::MakeResponse
  u.make_result = MathFunctionParserUtilities::MakeResult
  u.make_point = MathFunctionParserUtilities::MakePoint
  u.make_spec = MathFunctionParserUtilities::MakeSpec
  u.make_url = MathFunctionParserUtilities::MakeUrl
  u.param = MathFunctionParserUtilities::Param
  u.prepare_auth = MathFunctionParserUtilities::PrepareAuth
  u.prepare_body = MathFunctionParserUtilities::PrepareBody
  u.prepare_headers = MathFunctionParserUtilities::PrepareHeaders
  u.prepare_method = MathFunctionParserUtilities::PrepareMethod
  u.prepare_params = MathFunctionParserUtilities::PrepareParams
  u.prepare_path = MathFunctionParserUtilities::PreparePath
  u.prepare_query = MathFunctionParserUtilities::PrepareQuery
  u.graphql_body = MathFunctionParserUtilities::GraphqlBody
  u.graphql_errors = MathFunctionParserUtilities::GraphqlErrors
  u.result_basic = MathFunctionParserUtilities::ResultBasic
  u.result_body = MathFunctionParserUtilities::ResultBody
  u.result_headers = MathFunctionParserUtilities::ResultHeaders
  u.transform_request = MathFunctionParserUtilities::TransformRequest
  u.transform_response = MathFunctionParserUtilities::TransformResponse
}

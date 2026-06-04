# Calc entity test

require "minitest/autorun"
require "json"
require_relative "../MathFunctionParser_sdk"
require_relative "runner"

class CalcEntityTest < Minitest::Test
  def test_create_instance
    testsdk = MathFunctionParserSDK.test(nil, nil)
    ent = testsdk.Calc(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = calc_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "calc." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set MATHFUNCTIONPARSER_TEST_CALC_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    calc_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.calc")))
    calc_ref01_data = nil
    if calc_ref01_data_raw.length > 0
      calc_ref01_data = Helpers.to_map(calc_ref01_data_raw[0][1])
    end

    # LIST
    calc_ref01_ent = client.Calc(nil)
    calc_ref01_match = {}

    calc_ref01_list_result, err = calc_ref01_ent.list(calc_ref01_match, nil)
    assert_nil err
    assert calc_ref01_list_result.is_a?(Array)

  end
end

def calc_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "calc", "CalcTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = MathFunctionParserSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["calc01", "calc02", "calc03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["MATHFUNCTIONPARSER_TEST_CALC_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "MATHFUNCTIONPARSER_TEST_CALC_ENTID" => idmap,
    "MATHFUNCTIONPARSER_TEST_LIVE" => "FALSE",
    "MATHFUNCTIONPARSER_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["MATHFUNCTIONPARSER_TEST_CALC_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["MATHFUNCTIONPARSER_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = MathFunctionParserSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["MATHFUNCTIONPARSER_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["MATHFUNCTIONPARSER_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end

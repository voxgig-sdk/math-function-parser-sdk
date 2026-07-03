<?php
declare(strict_types=1);

// Calc entity test

require_once __DIR__ . '/../mathfunctionparser_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CalcEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = MathFunctionParserSDK::test(null, null);
        $ent = $testsdk->Calc(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = calc_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "calc." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set MATHFUNCTIONPARSER_TEST_CALC_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $calc_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.calc")));
        $calc_ref01_data = null;
        if (count($calc_ref01_data_raw) > 0) {
            $calc_ref01_data = Helpers::to_map($calc_ref01_data_raw[0][1]);
        }

        // LIST
        $calc_ref01_ent = $client->Calc(null);
        $calc_ref01_match = [];

        [$calc_ref01_list_result, $err] = $calc_ref01_ent->list($calc_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($calc_ref01_list_result);

    }
}

function calc_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/calc/CalcTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = MathFunctionParserSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["calc01", "calc02", "calc03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("MATHFUNCTIONPARSER_TEST_CALC_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "MATHFUNCTIONPARSER_TEST_CALC_ENTID" => $idmap,
        "MATHFUNCTIONPARSER_TEST_LIVE" => "FALSE",
        "MATHFUNCTIONPARSER_TEST_EXPLAIN" => "FALSE",
        "MATHFUNCTIONPARSER_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["MATHFUNCTIONPARSER_TEST_CALC_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["MATHFUNCTIONPARSER_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["MATHFUNCTIONPARSER_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new MathFunctionParserSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["MATHFUNCTIONPARSER_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["MATHFUNCTIONPARSER_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}

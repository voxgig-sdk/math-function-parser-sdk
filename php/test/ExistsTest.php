<?php
declare(strict_types=1);

// MathFunctionParser SDK exists test

require_once __DIR__ . '/../mathfunctionparser_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MathFunctionParserSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}

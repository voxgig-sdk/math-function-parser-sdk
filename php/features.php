<?php
declare(strict_types=1);

// MathFunctionParser SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MathFunctionParserFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MathFunctionParserBaseFeature();
            case "test":
                return new MathFunctionParserTestFeature();
            default:
                return new MathFunctionParserBaseFeature();
        }
    }
}

<?php
declare(strict_types=1);

// MathFunctionParser SDK utility: feature_add

class MathFunctionParserFeatureAdd
{
    public static function call(MathFunctionParserContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

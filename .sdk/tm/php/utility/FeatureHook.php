<?php
declare(strict_types=1);

// MathFunctionParser SDK utility: feature_hook

class MathFunctionParserFeatureHook
{
    public static function call(MathFunctionParserContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}

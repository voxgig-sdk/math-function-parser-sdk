<?php
declare(strict_types=1);

// MathFunctionParser SDK utility: prepare_headers

class MathFunctionParserPrepareHeaders
{
    public static function call(MathFunctionParserContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}

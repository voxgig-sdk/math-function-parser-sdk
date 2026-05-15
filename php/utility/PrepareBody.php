<?php
declare(strict_types=1);

// MathFunctionParser SDK utility: prepare_body

class MathFunctionParserPrepareBody
{
    public static function call(MathFunctionParserContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

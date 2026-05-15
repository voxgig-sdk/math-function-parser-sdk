<?php
declare(strict_types=1);

// MathFunctionParser SDK utility: result_body

class MathFunctionParserResultBody
{
    public static function call(MathFunctionParserContext $ctx): ?MathFunctionParserResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

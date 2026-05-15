<?php
declare(strict_types=1);

// MathFunctionParser SDK utility: result_headers

class MathFunctionParserResultHeaders
{
    public static function call(MathFunctionParserContext $ctx): ?MathFunctionParserResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

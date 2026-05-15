<?php
declare(strict_types=1);

// MathFunctionParser SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MathFunctionParserMakeContext
{
    public static function call(array $ctxmap, ?MathFunctionParserContext $basectx): MathFunctionParserContext
    {
        return new MathFunctionParserContext($ctxmap, $basectx);
    }
}

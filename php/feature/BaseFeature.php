<?php
declare(strict_types=1);

// MathFunctionParser SDK base feature

class MathFunctionParserBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MathFunctionParserContext $ctx, array $options): void {}
    public function PostConstruct(MathFunctionParserContext $ctx): void {}
    public function PostConstructEntity(MathFunctionParserContext $ctx): void {}
    public function SetData(MathFunctionParserContext $ctx): void {}
    public function GetData(MathFunctionParserContext $ctx): void {}
    public function GetMatch(MathFunctionParserContext $ctx): void {}
    public function SetMatch(MathFunctionParserContext $ctx): void {}
    public function PrePoint(MathFunctionParserContext $ctx): void {}
    public function PreSpec(MathFunctionParserContext $ctx): void {}
    public function PreRequest(MathFunctionParserContext $ctx): void {}
    public function PreResponse(MathFunctionParserContext $ctx): void {}
    public function PreResult(MathFunctionParserContext $ctx): void {}
    public function PreDone(MathFunctionParserContext $ctx): void {}
    public function PreUnexpected(MathFunctionParserContext $ctx): void {}
}

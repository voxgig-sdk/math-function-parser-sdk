<?php
declare(strict_types=1);

// Typed models for the MathFunctionParser SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Calc entity data model. */
class Calc
{
    public ?string $data = null;
    public ?string $type = null;
}

/** Request payload for Calc#list. */
class CalcListMatch
{
    public ?string $data = null;
    public ?string $type = null;
}

/** Resolve entity data model. */
class Resolve
{
}

/** Request payload for Resolve#load. */
class ResolveLoadMatch
{
}

/** Tokenize entity data model. */
class Tokenize
{
    public ?string $data = null;
    public ?string $type = null;
}

/** Request payload for Tokenize#list. */
class TokenizeListMatch
{
    public ?string $data = null;
    public ?string $type = null;
}


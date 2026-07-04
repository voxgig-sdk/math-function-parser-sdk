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

/** Match filter for Calc#list (any subset of Calc fields). */
class CalcListMatch
{
    public ?string $data = null;
    public ?string $type = null;
}

/** Resolve entity data model. */
class Resolve
{
}

/** Match filter for Resolve#load (any subset of Resolve fields). */
class ResolveLoadMatch
{
}

/** Tokenize entity data model. */
class Tokenize
{
    public ?string $data = null;
    public ?string $type = null;
}

/** Match filter for Tokenize#list (any subset of Tokenize fields). */
class TokenizeListMatch
{
    public ?string $data = null;
    public ?string $type = null;
}


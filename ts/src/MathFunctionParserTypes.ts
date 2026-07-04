// Typed models for the MathFunctionParser SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Calc {
  data?: string
  type?: string
}

export type CalcListMatch = Partial<Calc>

export interface Resolve {
}

export type ResolveLoadMatch = Partial<Resolve>

export interface Tokenize {
  data?: string
  type?: string
}

export type TokenizeListMatch = Partial<Tokenize>


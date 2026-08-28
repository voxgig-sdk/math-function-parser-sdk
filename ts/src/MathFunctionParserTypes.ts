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

export interface CalcListMatch {
  expression: string
  x?: string
}

export interface Resolve {
}

export interface ResolveLoadMatch {
  expression: string
  x?: string
}

export interface Tokenize {
  data?: string
  type?: string
}

export interface TokenizeListMatch {
  expression: string
  x?: string
}


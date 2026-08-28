-- Typed models for the MathFunctionParser SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Calc
---@field data? string
---@field type? string

---@class CalcListMatch
---@field expression string
---@field x? string

---@class Resolve

---@class ResolveLoadMatch
---@field expression string
---@field x? string

---@class Tokenize
---@field data? string
---@field type? string

---@class TokenizeListMatch
---@field expression string
---@field x? string

local M = {}

return M

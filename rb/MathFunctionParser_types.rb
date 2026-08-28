# frozen_string_literal: true

# Typed models for the MathFunctionParser SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Calc entity data model.
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Calc = Struct.new(
  :data,
  :type,
  keyword_init: true
)

# Request payload for Calc#list.
#
# @!attribute [rw] expression
#   @return [String]
#
# @!attribute [rw] x
#   @return [String, nil]
CalcListMatch = Struct.new(
  :expression,
  :x,
  keyword_init: true
)

# Resolve entity data model.
class Resolve
end

# Request payload for Resolve#load.
#
# @!attribute [rw] expression
#   @return [String]
#
# @!attribute [rw] x
#   @return [String, nil]
ResolveLoadMatch = Struct.new(
  :expression,
  :x,
  keyword_init: true
)

# Tokenize entity data model.
#
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Tokenize = Struct.new(
  :data,
  :type,
  keyword_init: true
)

# Request payload for Tokenize#list.
#
# @!attribute [rw] expression
#   @return [String]
#
# @!attribute [rw] x
#   @return [String, nil]
TokenizeListMatch = Struct.new(
  :expression,
  :x,
  keyword_init: true
)


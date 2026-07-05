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
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
CalcListMatch = Struct.new(
  :data,
  :type,
  keyword_init: true
)

# Resolve entity data model.
class Resolve
end

# Request payload for Resolve#load.
class ResolveLoadMatch
end

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
# @!attribute [rw] data
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
TokenizeListMatch = Struct.new(
  :data,
  :type,
  keyword_init: true
)


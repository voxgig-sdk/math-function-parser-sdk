# Typed models for the MathFunctionParser SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Calc:
    data: Optional[str] = None
    type: Optional[str] = None


@dataclass
class CalcListMatch:
    data: Optional[str] = None
    type: Optional[str] = None


@dataclass
class Resolve:
    pass


@dataclass
class ResolveLoadMatch:
    pass


@dataclass
class Tokenize:
    data: Optional[str] = None
    type: Optional[str] = None


@dataclass
class TokenizeListMatch:
    data: Optional[str] = None
    type: Optional[str] = None


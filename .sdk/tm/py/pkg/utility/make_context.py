# MathFunctionParser SDK utility: make_context

from projectname_sdk.core.context import MathFunctionParserContext


def make_context_util(ctxmap, basectx):
    return MathFunctionParserContext(ctxmap, basectx)

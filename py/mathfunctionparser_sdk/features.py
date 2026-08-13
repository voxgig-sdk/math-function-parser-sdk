# MathFunctionParser SDK feature factory

from mathfunctionparser_sdk.feature.base_feature import MathFunctionParserBaseFeature
from mathfunctionparser_sdk.feature.test_feature import MathFunctionParserTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MathFunctionParserBaseFeature(),
        "test": lambda: MathFunctionParserTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

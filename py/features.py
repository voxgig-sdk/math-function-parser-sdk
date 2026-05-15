# MathFunctionParser SDK feature factory

from feature.base_feature import MathFunctionParserBaseFeature
from feature.test_feature import MathFunctionParserTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MathFunctionParserBaseFeature(),
        "test": lambda: MathFunctionParserTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

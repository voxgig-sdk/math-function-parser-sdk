# MathFunctionParser SDK feature factory

from mathfunctionparser_sdk.feature.base_feature import MathFunctionParserBaseFeature
from mathfunctionparser_sdk.feature.ratelimit_feature import MathFunctionParserRatelimitFeature
from mathfunctionparser_sdk.feature.retry_feature import MathFunctionParserRetryFeature
from mathfunctionparser_sdk.feature.test_feature import MathFunctionParserTestFeature
from mathfunctionparser_sdk.feature.timeout_feature import MathFunctionParserTimeoutFeature


_FEATURES = {
    "base": lambda: MathFunctionParserBaseFeature(),
    "ratelimit": lambda: MathFunctionParserRatelimitFeature(),
    "retry": lambda: MathFunctionParserRetryFeature(),
    "test": lambda: MathFunctionParserTestFeature(),
    "timeout": lambda: MathFunctionParserTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

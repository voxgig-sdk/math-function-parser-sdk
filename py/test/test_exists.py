# MathFunctionParser SDK exists test

import pytest
from mathfunctionparser_sdk import MathFunctionParserSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MathFunctionParserSDK.test(None, None)
        assert testsdk is not None

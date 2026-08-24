# Bud SDK exists test

import pytest
from bud_sdk import BudSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BudSDK.test(None, None)
        assert testsdk is not None

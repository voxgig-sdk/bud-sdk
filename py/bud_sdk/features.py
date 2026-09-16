# Bud SDK feature factory

from bud_sdk.feature.base_feature import BudBaseFeature
from bud_sdk.feature.debug_feature import BudDebugFeature
from bud_sdk.feature.idempotency_feature import BudIdempotencyFeature
from bud_sdk.feature.metrics_feature import BudMetricsFeature
from bud_sdk.feature.paging_feature import BudPagingFeature
from bud_sdk.feature.ratelimit_feature import BudRatelimitFeature
from bud_sdk.feature.retry_feature import BudRetryFeature
from bud_sdk.feature.test_feature import BudTestFeature
from bud_sdk.feature.timeout_feature import BudTimeoutFeature


_FEATURES = {
    "base": lambda: BudBaseFeature(),
    "debug": lambda: BudDebugFeature(),
    "idempotency": lambda: BudIdempotencyFeature(),
    "metrics": lambda: BudMetricsFeature(),
    "paging": lambda: BudPagingFeature(),
    "ratelimit": lambda: BudRatelimitFeature(),
    "retry": lambda: BudRetryFeature(),
    "test": lambda: BudTestFeature(),
    "timeout": lambda: BudTimeoutFeature(),
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

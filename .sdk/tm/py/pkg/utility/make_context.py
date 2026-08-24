# Bud SDK utility: make_context

from projectname_sdk.core.context import BudContext


def make_context_util(ctxmap, basectx):
    return BudContext(ctxmap, basectx)

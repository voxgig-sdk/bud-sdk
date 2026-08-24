<?php
declare(strict_types=1);

// Bud SDK utility: prepare_body

class BudPrepareBody
{
    public static function call(BudContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

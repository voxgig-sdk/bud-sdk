<?php
declare(strict_types=1);

// Bud SDK utility: result_body

class BudResultBody
{
    public static function call(BudContext $ctx): ?BudResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

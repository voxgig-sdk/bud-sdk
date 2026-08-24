<?php
declare(strict_types=1);

// Bud SDK utility: result_headers

class BudResultHeaders
{
    public static function call(BudContext $ctx): ?BudResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

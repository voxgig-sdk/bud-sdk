<?php
declare(strict_types=1);

// Bud SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BudMakeContext
{
    public static function call(array $ctxmap, ?BudContext $basectx): BudContext
    {
        return new BudContext($ctxmap, $basectx);
    }
}

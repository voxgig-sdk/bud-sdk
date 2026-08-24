<?php
declare(strict_types=1);

// Bud SDK base feature

class BudBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BudContext $ctx, array $options): void {}
    public function PostConstruct(BudContext $ctx): void {}
    public function PostConstructEntity(BudContext $ctx): void {}
    public function SetData(BudContext $ctx): void {}
    public function GetData(BudContext $ctx): void {}
    public function GetMatch(BudContext $ctx): void {}
    public function SetMatch(BudContext $ctx): void {}
    public function PrePoint(BudContext $ctx): void {}
    public function PreSpec(BudContext $ctx): void {}
    public function PreRequest(BudContext $ctx): void {}
    public function PreResponse(BudContext $ctx): void {}
    public function PreResult(BudContext $ctx): void {}
    public function PreDone(BudContext $ctx): void {}
    public function PreUnexpected(BudContext $ctx): void {}
}

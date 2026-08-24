<?php
declare(strict_types=1);

// Typed models for the Bud SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Account entity data model. */
class Account
{
    public ?string $account_type = null;
    public ?float $balance = null;
    public ?string $currency = null;
    public ?string $display_name = null;
    public ?string $id = null;
    public ?string $provider = null;
}

/** Request payload for Account#load. */
class AccountLoadMatch
{
    public string $id;
}

/** Request payload for Account#list. */
class AccountListMatch
{
    public ?string $account_type = null;
    public ?float $balance = null;
    public ?string $currency = null;
    public ?string $display_name = null;
    public ?string $id = null;
    public ?string $provider = null;
}


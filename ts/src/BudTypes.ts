// Typed models for the Bud SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Account {
  account_type?: string
  balance?: number
  currency?: string
  display_name?: string
  id?: string
  provider?: string
}

export interface AccountLoadMatch {
  id: string
}

export interface AccountListMatch {
  account_type?: string
  balance?: number
  currency?: string
  display_name?: string
  id?: string
  provider?: string
}


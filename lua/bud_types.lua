-- Typed models for the Bud SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Account
---@field account_type? string
---@field balance? number
---@field currency? string
---@field display_name? string
---@field id? string
---@field provider? string

---@class AccountLoadMatch
---@field id string

---@class AccountListMatch
---@field account_type? string
---@field balance? number
---@field currency? string
---@field display_name? string
---@field id? string
---@field provider? string

local M = {}

return M

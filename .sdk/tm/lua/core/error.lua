-- Bud SDK error

local BudError = {}
BudError.__index = BudError


function BudError.new(code, msg, ctx)
  local self = setmetatable({}, BudError)
  self.is_sdk_error = true
  self.sdk = "Bud"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BudError:error()
  return self.msg
end


function BudError:__tostring()
  return self.msg
end


return BudError

package voxgigbudsdk

import (
	"github.com/voxgig-sdk/bud-sdk/go/core"
	"github.com/voxgig-sdk/bud-sdk/go/entity"
	"github.com/voxgig-sdk/bud-sdk/go/feature"
	_ "github.com/voxgig-sdk/bud-sdk/go/utility"
)

// Type aliases preserve external API.
type BudSDK = core.BudSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BudEntity = core.BudEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BudError = core.BudError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccountEntityFunc = func(client *core.BudSDK, entopts map[string]any) core.BudEntity {
		return entity.NewAccountEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBudSDK = core.NewBudSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewBudSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *BudSDK  { return NewBudSDK(nil) }
func Test() *BudSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

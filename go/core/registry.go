package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAccountEntityFunc func(client *BudSDK, entopts map[string]any) BudEntity


package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCalcEntityFunc func(client *MathFunctionParserSDK, entopts map[string]any) MathFunctionParserEntity

var NewResolveEntityFunc func(client *MathFunctionParserSDK, entopts map[string]any) MathFunctionParserEntity

var NewTokenizeEntityFunc func(client *MathFunctionParserSDK, entopts map[string]any) MathFunctionParserEntity


package voxgigmathfunctionparsersdk

import (
	"github.com/voxgig-sdk/math-function-parser-sdk/core"
	"github.com/voxgig-sdk/math-function-parser-sdk/entity"
	"github.com/voxgig-sdk/math-function-parser-sdk/feature"
	_ "github.com/voxgig-sdk/math-function-parser-sdk/utility"
)

// Type aliases preserve external API.
type MathFunctionParserSDK = core.MathFunctionParserSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MathFunctionParserEntity = core.MathFunctionParserEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MathFunctionParserError = core.MathFunctionParserError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCalcEntityFunc = func(client *core.MathFunctionParserSDK, entopts map[string]any) core.MathFunctionParserEntity {
		return entity.NewCalcEntity(client, entopts)
	}
	core.NewResolveEntityFunc = func(client *core.MathFunctionParserSDK, entopts map[string]any) core.MathFunctionParserEntity {
		return entity.NewResolveEntity(client, entopts)
	}
	core.NewTokenizeEntityFunc = func(client *core.MathFunctionParserSDK, entopts map[string]any) core.MathFunctionParserEntity {
		return entity.NewTokenizeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMathFunctionParserSDK = core.NewMathFunctionParserSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

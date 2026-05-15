package = "voxgig-sdk-math-function-parser"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/math-function-parser-sdk.git"
}
description = {
  summary = "MathFunctionParser SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["math-function-parser_sdk"] = "math-function-parser_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

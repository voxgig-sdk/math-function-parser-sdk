

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MathFunctionParserSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('TokenizeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MATH_FUNCTION_PARSER_TEST_LIVE=TRUE.
  afterEach(liveDelay('MATH_FUNCTION_PARSER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MathFunctionParserSDK.test()
    const ent = testsdk.Tokenize()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MATH_FUNCTION_PARSER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tokenize.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"Token data","type":"`$STRING`","index$":0},{"active":true,"name":"type","req":false,"short":"Token type","type":"`$STRING`","index$":1}],"name":"tokenize","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"expression","orig":"expression","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"x","orig":"x","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/ast","json":"{\"operationId\":\"ast\",\"parameters\":[{\"deprecated\":false,\"description\":\"The math function to parse, e.g. 3+4\",\"in\":\"query\",\"name\":\"expression\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"deprecated\":false,\"description\":\"Variable x\",\"in\":\"query\",\"name\":\"x\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"tokens\":{\"description\":\"Tokenized input expression\",\"items\":{\"properties\":{\"data\":{\"description\":\"Token data\",\"type\":\"string\"},\"type\":{\"description\":\"Token type\",\"type\":\"string\"}},\"required\":[],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/ast","segments":[{"lit":"v1"},{"lit":"ast"}],"select":{"exist":["expression","x"]},"transform":{"req":"`reqdata`","res":"`body.tokens`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"expression","orig":"expression","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"x","orig":"x","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /v1/tokenize","json":"{\"operationId\":\"tokenize\",\"parameters\":[{\"deprecated\":false,\"description\":\"The math function to parse and resolve, e.g. 3+4\",\"in\":\"query\",\"name\":\"expression\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"deprecated\":false,\"description\":\"Variable x\",\"in\":\"query\",\"name\":\"x\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"tokens\":{\"description\":\"Tokenized input expression\",\"items\":{\"properties\":{\"data\":{\"description\":\"Token data\",\"type\":\"string\"},\"type\":{\"description\":\"Token type\",\"type\":\"string\"}},\"required\":[],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[],\"type\":\"object\"}}},\"description\":\"OK\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/tokenize","segments":[{"lit":"v1"},{"lit":"tokenize"}],"select":{"exist":["expression","x"]},"transform":{"req":"`reqdata`","res":"`body.tokens`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tokenize","name__orig":"tokenize","Name":"Tokenize","name_":"tokenize","name-":"tokenize","NAME":"TOKENIZE","index$":2}, {"active":true,"entity":"tokenize","key$":"BasicTokenizeFlow","kind":"basic","name":"BasicTokenizeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"tokenize_ref01"}}],"index$":0}]}, 'Tokenize')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tokenize_ref01_data = Object.values(setup.data.existing.tokenize)[0] as any

    // LIST
    const tokenize_ref01_ent = client.Tokenize()
    const tokenize_ref01_match: any = {}

    const tokenize_ref01_list = (await tokenize_ref01_ent.list(tokenize_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tokenize/TokenizeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MathFunctionParserSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['tokenize01','tokenize02','tokenize03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MATH_FUNCTION_PARSER_TEST_TOKENIZE_ENTID': idmap,
    'MATH_FUNCTION_PARSER_TEST_LIVE': 'FALSE',
    'MATH_FUNCTION_PARSER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MATH_FUNCTION_PARSER_TEST_TOKENIZE_ENTID']

  const live = 'TRUE' === env.MATH_FUNCTION_PARSER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MATH_FUNCTION_PARSER_TEST_TOKENIZE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MathFunctionParserSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.MATH_FUNCTION_PARSER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

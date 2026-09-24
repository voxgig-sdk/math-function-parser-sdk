

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CalcEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MATH_FUNCTION_PARSER_TEST_LIVE=TRUE.
  afterEach(liveDelay('MATH_FUNCTION_PARSER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MathFunctionParserSDK.test()
    const ent = testsdk.Calc()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MATH_FUNCTION_PARSER_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'calc.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"sh":"Token data","t":"`$STRING`","key$":"data","index$":0},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Token type","t":"`$STRING`","key$":"type","index$":1}},"name":"calc","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/calc","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"expression","or":"expression","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"x","or":"x","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/calc","q":{"exist":["expression","x"]},"r":{},"s":[{"lit":"v1"},{"lit":"calc"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"calc","name__orig":"calc","Name":"Calc","name_":"calc","name-":"calc","NAME":"CALC","index$":1}, {"active":true,"entity":"calc","key$":"BasicCalcFlow","kind":"basic","name":"BasicCalcFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"calc_ref01"}}],"index$":0}]}, 'Calc', {"GET /v1/calc":{"protocol":"http","operationId":"calc","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"object","properties":{"result":{"description":"The result of the input expression","format":"double","key$":"result","type":"number"},"parsedExpression":{"description":"An internal representation of the parsed input expression","key$":"parsedExpression","type":"string"},"ast":{"description":"Abstract Syntax Tree for the parsed input expression","key$":"ast","properties":{"rootExpression":{"additionalProperties":{"type":"Any"},"description":"Abstract Syntax Tree for the parsed input expression","type":"object"}},"required":[],"type":"object","x-ref":"#/components/schemas/ASTResponse"},"tokens":{"description":"Tokenized input expression","items":{"properties":{"data":{"description":"Token data","type":"string","key$":"data"},"type":{"description":"Token type","type":"string","key$":"type"}},"required":[],"type":"object","x-ref":"#/components/schemas/TokenElement","index$":0},"key$":"tokens","type":"array"},"processingTimeInMicros":{"description":"Internal processing time in microseconds","key$":"processingTimeInMicros","maximum":2147483647,"minimum":-2147483648,"type":"integer"}},"required":[],"x-ref":"#/components/schemas/CalcResponse"}}}}},"parameters":[{"name":"expression","description":"The math function to parse and resolve, e.g. 3+4","in":"query","required":true,"deprecated":false,"schema":{"type":"string"},"index$":0},{"name":"x","description":"Variable x","in":"query","required":false,"deprecated":false,"schema":{"type":"string"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let calc_ref01_data = Object.values(setup.data.existing.calc)[0] as any

    // LIST
    const calc_ref01_ent = client.Calc()
    const calc_ref01_match: any = {}

    const calc_ref01_list = (await calc_ref01_ent.list(calc_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/calc/CalcTestData.json')

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
    ['calc01','calc02','calc03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MATH_FUNCTION_PARSER_TEST_CALC_ENTID': idmap,
    'MATH_FUNCTION_PARSER_TEST_LIVE': 'FALSE',
    'MATH_FUNCTION_PARSER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MATH_FUNCTION_PARSER_TEST_CALC_ENTID']

  const live = 'TRUE' === env.MATH_FUNCTION_PARSER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MATH_FUNCTION_PARSER_TEST_CALC_ENTID']
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
  



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


describe('ResolveEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MATH_FUNCTION_PARSER_TEST_LIVE=TRUE.
  afterEach(liveDelay('MATH_FUNCTION_PARSER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MathFunctionParserSDK.test()
    const ent = testsdk.Resolve()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MATH_FUNCTION_PARSER_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'resolve.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"resolve","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/resolve","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"expression","or":"expression","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"x","or":"x","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/resolve","q":{"exist":["expression","x"]},"r":{},"s":[{"lit":"v1"},{"lit":"resolve"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"resolve","name__orig":"resolve","Name":"Resolve","name_":"resolve","name-":"resolve","NAME":"RESOLVE","index$":2}, {"active":true,"entity":"resolve","key$":"BasicResolveFlow","kind":"basic","name":"BasicResolveFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"resolve_ref01","srcdatavar":"resolve_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-resolve_ref01"}}],"index$":0}]}, 'Resolve', {"GET /v1/resolve":{"protocol":"http","operationId":"resolve","responses":{"200":{"description":"OK","content":{"text/plain":{"schema":{"type":"number","format":"double"}}}}},"parameters":[{"name":"expression","description":"The math function to parse and resolve, e.g. 3+4","in":"query","required":true,"deprecated":false,"schema":{"type":"string"},"index$":0},{"name":"x","description":"Variable x","in":"query","required":false,"deprecated":false,"schema":{"type":"string"},"index$":1}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let resolve_ref01_data = Object.values(setup.data.existing.resolve)[0] as any

    // LOAD
    const resolve_ref01_ent = client.Resolve()
    const resolve_ref01_match_dt0: any = {}
    const resolve_ref01_data_dt0 = (await resolve_ref01_ent.load(resolve_ref01_match_dt0)).data()
    assert(null != resolve_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/resolve/ResolveTestData.json')

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
    ['resolve01','resolve02','resolve03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MATH_FUNCTION_PARSER_TEST_RESOLVE_ENTID': idmap,
    'MATH_FUNCTION_PARSER_TEST_LIVE': 'FALSE',
    'MATH_FUNCTION_PARSER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MATH_FUNCTION_PARSER_TEST_RESOLVE_ENTID']

  const live = 'TRUE' === env.MATH_FUNCTION_PARSER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MATH_FUNCTION_PARSER_TEST_RESOLVE_ENTID']
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
  

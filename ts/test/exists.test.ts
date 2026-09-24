
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MathFunctionParserSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MathFunctionParserSDK.test()
    equal(testsdk instanceof MathFunctionParserSDK, true,
      'MathFunctionParserSDK.test() must return a client synchronously')
  })

})


import { Context } from './Context'


class MathFunctionParserError extends Error {

  isMathFunctionParserError = true

  sdk = 'MathFunctionParser'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MathFunctionParserError
}


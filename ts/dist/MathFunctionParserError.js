"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathFunctionParserError = void 0;
class MathFunctionParserError extends Error {
    isMathFunctionParserError = true;
    sdk = 'MathFunctionParser';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MathFunctionParserError = MathFunctionParserError;
//# sourceMappingURL=MathFunctionParserError.js.map
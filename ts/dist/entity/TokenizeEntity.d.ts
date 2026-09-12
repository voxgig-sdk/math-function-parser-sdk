import { MathFunctionParserEntityBase } from '../MathFunctionParserEntityBase';
import type { MathFunctionParserSDK } from '../MathFunctionParserSDK';
import type { Control } from '../types';
import type { Tokenize, TokenizeListMatch } from '../MathFunctionParserTypes';
declare class TokenizeEntity extends MathFunctionParserEntityBase<Tokenize> {
    constructor(client: MathFunctionParserSDK, entopts: any);
    make(this: TokenizeEntity): TokenizeEntity;
    list(this: any, reqmatch?: TokenizeListMatch, ctrl?: Control): Promise<TokenizeEntity[]>;
}
export { TokenizeEntity };

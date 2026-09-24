import { MathFunctionParserEntityBase } from '../MathFunctionParserEntityBase';
import type { MathFunctionParserSDK } from '../MathFunctionParserSDK';
import type { Control } from '../types';
import type { Ast, AstListMatch } from '../MathFunctionParserTypes';
declare class AstEntity extends MathFunctionParserEntityBase<Ast> {
    constructor(client: MathFunctionParserSDK, entopts: any);
    make(this: AstEntity): AstEntity;
    list(this: any, reqmatch?: AstListMatch, ctrl?: Control): Promise<AstEntity[]>;
}
export { AstEntity };

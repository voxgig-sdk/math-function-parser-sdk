import { MathFunctionParserEntityBase } from '../MathFunctionParserEntityBase';
import type { MathFunctionParserSDK } from '../MathFunctionParserSDK';
import type { Control } from '../types';
import type { Calc, CalcListMatch } from '../MathFunctionParserTypes';
declare class CalcEntity extends MathFunctionParserEntityBase<Calc> {
    constructor(client: MathFunctionParserSDK, entopts: any);
    make(this: CalcEntity): CalcEntity;
    list(this: any, reqmatch?: CalcListMatch, ctrl?: Control): Promise<CalcEntity[]>;
}
export { CalcEntity };

import { MathFunctionParserEntityBase } from '../MathFunctionParserEntityBase';
import type { MathFunctionParserSDK } from '../MathFunctionParserSDK';
import type { Control } from '../types';
import type { Resolve, ResolveLoadMatch } from '../MathFunctionParserTypes';
declare class ResolveEntity extends MathFunctionParserEntityBase<Resolve> {
    constructor(client: MathFunctionParserSDK, entopts: any);
    make(this: ResolveEntity): ResolveEntity;
    load(this: any, reqmatch?: ResolveLoadMatch, ctrl?: Control): Promise<ResolveEntity>;
}
export { ResolveEntity };

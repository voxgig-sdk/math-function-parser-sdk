import { CalcEntity } from './entity/CalcEntity';
import { ResolveEntity } from './entity/ResolveEntity';
import { TokenizeEntity } from './entity/TokenizeEntity';
export type * from './MathFunctionParserTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { MathFunctionParserEntityBase } from './MathFunctionParserEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class MathFunctionParserSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Calc(entopts?: Record<string, any>): CalcEntity;
    Resolve(entopts?: Record<string, any>): ResolveEntity;
    Tokenize(entopts?: Record<string, any>): TokenizeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): MathFunctionParserSDK;
    tester(testopts?: any, sdkopts?: any): MathFunctionParserSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof MathFunctionParserSDK;
export { stdutil, config, BaseFeature, MathFunctionParserEntityBase, MathFunctionParserSDK, SDK, };

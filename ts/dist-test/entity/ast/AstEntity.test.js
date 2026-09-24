"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('AstEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MATH_FUNCTION_PARSER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MATH_FUNCTION_PARSER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MathFunctionParserSDK.test();
        const ent = testsdk.Ast();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MATH_FUNCTION_PARSER_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ast.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "Token data", "t": "`$STRING`", "key$": "data", "index$": 0 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "Token type", "t": "`$STRING`", "key$": "type", "index$": 1 } }, "name": "ast", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/ast", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "expression", "or": "expression", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "x", "or": "x", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/ast", "q": { "exist": ["expression", "x"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "ast" }], "t": { "req": "`reqdata`", "res": "`body.tokens`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "ast", "name__orig": "ast", "Name": "Ast", "name_": "ast", "name-": "ast", "NAME": "AST", "index$": 0 }, { "active": true, "entity": "ast", "key$": "BasicAstFlow", "kind": "basic", "name": "BasicAstFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ast_ref01" } }], "index$": 0 }] }, 'Ast', { "GET /v1/ast": { "protocol": "http", "operationId": "ast", "responses": { "200": { "description": "OK", "content": { "application/json": { "schema": { "type": "object", "properties": { "tokens": { "description": "Tokenized input expression", "items": { "properties": { "data": { "description": "Token data", "type": "string", "key$": "data" }, "type": { "description": "Token type", "type": "string", "key$": "type" } }, "required": [], "type": "object", "x-ref": "#/components/schemas/TokenElement", "index$": 0 }, "key$": "tokens", "type": "array" } }, "required": [], "x-ref": "#/components/schemas/TokenizeResponse" } } } } }, "parameters": [{ "name": "expression", "description": "The math function to parse, e.g. 3+4", "in": "query", "required": true, "deprecated": false, "schema": { "type": "string" }, "index$": 0 }, { "name": "x", "description": "Variable x", "in": "query", "required": false, "deprecated": false, "schema": { "type": "string" }, "index$": 1 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ast_ref01_data = Object.values(setup.data.existing.ast)[0];
        // LIST
        const ast_ref01_ent = client.Ast();
        const ast_ref01_match = {};
        const ast_ref01_list = (await ast_ref01_ent.list(ast_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ast/AstTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MathFunctionParserSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ast01', 'ast02', 'ast03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MATH_FUNCTION_PARSER_TEST_AST_ENTID': idmap,
        'MATH_FUNCTION_PARSER_TEST_LIVE': 'FALSE',
        'MATH_FUNCTION_PARSER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MATH_FUNCTION_PARSER_TEST_AST_ENTID'];
    const live = 'TRUE' === env.MATH_FUNCTION_PARSER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MATH_FUNCTION_PARSER_TEST_AST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MathFunctionParserSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=AstEntity.test.js.map
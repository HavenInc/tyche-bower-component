"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const gqlConfig = config.get('gql');
exports.graphQLConfig = {
    autoSchemaFile: gqlConfig.autoSchemaFile,
    context: ({ req }) => ({ headers: req.headers })
};
//# sourceMappingURL=gql.config.js.map
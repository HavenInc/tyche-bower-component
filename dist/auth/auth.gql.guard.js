"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt = require("jsonwebtoken");
const config = require("config");
const security = config.get('security');
class GQLAuthGuard {
    async canActivate(context) {
        const gqlctx = graphql_1.GqlExecutionContext.create(context).getContext();
        if (!gqlctx.headers.authorization) {
            return false;
        }
        const authInput = await this.validateToken(gqlctx.headers.authorization);
        gqlctx.userAffiliation = { orgId: authInput['orgId'] };
        return true;
    }
    async validateToken(auth) {
        const secret = process.env.TYCHE_SECRET || security.secret;
        if (!auth) {
            throw new common_1.HttpException('Invalid Token', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            return await jwt.verify(auth, secret);
        }
        catch (err) {
            throw new common_1.HttpException('Invalid Token', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
}
exports.GQLAuthGuard = GQLAuthGuard;
//# sourceMappingURL=auth.gql.guard.js.map
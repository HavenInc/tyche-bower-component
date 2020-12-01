"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const config = require("config");
const security = config.get('security');
class RESTAuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            return false;
        }
        if (isNaN(request.params.orgId)) {
            return false;
        }
        const authInput = await this.validateToken(request.headers.authorization);
        return authInput['orgId'] === parseInt(request.params.orgId);
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
exports.RESTAuthGuard = RESTAuthGuard;
//# sourceMappingURL=auth.rest.guard.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config = require("config");
const jwt = require("jsonwebtoken");
const security = config.get('security');
const logger = new common_1.Logger('AuthService');
let AuthService = class AuthService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createToken({ key, proteusToken, orgId, authHost }) {
        const apiKey = process.env.TYCHE_API_KEY || security.apiKey;
        const secret = process.env.TYCHE_SECRET || security.secret;
        const environment = process.env.NODE_ENV;
        if (key !== apiKey || !proteusToken || !orgId || !authHost) {
            throw new common_1.HttpException('Invalid Request', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (environment !== 'development' && !await this.validProteusToken(authHost, proteusToken)) {
            logger.warn(`Invalid Proteus Token trying to access ${orgId}`);
            throw new common_1.HttpException('Bad Request', common_1.HttpStatus.BAD_REQUEST);
        }
        return {
            jwt: jwt.sign({ key, proteusToken, orgId }, secret, {
                expiresIn: process.env.TYCHE_TOKEN_EXPIRY || security.tokenExpiry,
            }),
        };
    }
    async validProteusToken(authHost, proteusToken) {
        const tokenCheckRoute = process.env.TYCHE_VALIDATION_ROUTE || security.validationRoute;
        try {
            const headersRequest = {
                'Content-Type': 'application/json',
                'Authorization': `${proteusToken}`,
            };
            const value = await this.httpService
                .get(`${authHost}${tokenCheckRoute}`, { headers: headersRequest })
                .toPromise();
            return value.status === 200;
        }
        catch (err) {
            logger.warn(`Attempt to validate Proteus Token ${err.message}`);
            return false;
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
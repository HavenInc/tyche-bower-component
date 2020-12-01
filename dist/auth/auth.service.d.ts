import { HttpService } from '@nestjs/common';
import { AuthInput } from './auth-input.type';
export declare class AuthService {
    private httpService;
    constructor(httpService: HttpService);
    createToken({ key, proteusToken, orgId, authHost }: AuthInput): Promise<{
        jwt: string;
    }>;
    private validProteusToken;
}

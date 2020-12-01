import { AuthService } from './auth.service';
import { AuthInput } from './auth-input.type';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    token(authInput: AuthInput): Promise<{
        jwt: string;
    }>;
}

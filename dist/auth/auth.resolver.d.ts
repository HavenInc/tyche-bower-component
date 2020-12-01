import { AuthService } from 'src/auth/auth.service';
import { Token } from './token.type';
import { AuthInput } from './auth-input.type';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    token(authInput: AuthInput): Promise<Token>;
}

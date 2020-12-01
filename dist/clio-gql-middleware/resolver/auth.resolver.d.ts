import { AuthService } from 'src/auth/auth.service';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    token(): Promise<string>;
}

import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class GQLAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
    validateToken(auth: string): Promise<string | object>;
}

import { Repository } from 'typeorm';
import { ExceptionCode } from './exception-code.clio.entity';
export declare class ExceptionCodeRepository extends Repository<ExceptionCode> {
    getExceptionCodeById(id: number): Promise<ExceptionCode>;
}

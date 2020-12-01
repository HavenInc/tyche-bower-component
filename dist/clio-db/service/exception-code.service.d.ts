import { ExceptionCodeRepository } from '../models/exception-code.repository';
import { ExceptionCode } from '../models/exception-code.clio.entity';
export declare class ExceptionCodeService {
    private exceptionCodeRepository;
    constructor(exceptionCodeRepository: ExceptionCodeRepository);
    getExceptionCodeById(id: number): Promise<ExceptionCode>;
    getExceptionCodes(): Promise<ExceptionCode[]>;
}

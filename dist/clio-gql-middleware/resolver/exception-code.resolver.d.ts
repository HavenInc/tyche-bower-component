import { ExceptionCodeService } from '../../clio-db/service/exception-code.service';
import { ExceptionCode } from 'src/clio-db/models/exception-code.clio.entity';
export declare class ExceptionCodeResolver {
    private exceptionCodeService;
    constructor(exceptionCodeService: ExceptionCodeService);
    exceptionCodes(): Promise<ExceptionCode[]>;
    exceptionCode(id: number): Promise<ExceptionCode>;
}

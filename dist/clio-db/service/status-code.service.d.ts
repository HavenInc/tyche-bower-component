import { StatusCodeRepository } from '../models/status-code.repository';
import { StatusCode } from '../models/status-code.clio.entity';
export declare class StatusCodeService {
    private statusCodeRepository;
    constructor(statusCodeRepository: StatusCodeRepository);
    getStatusCodeById(id: number): Promise<StatusCode>;
}

import { Repository } from 'typeorm';
import { StatusCode } from './status-code.clio.entity';
export declare class StatusCodeRepository extends Repository<StatusCode> {
    getStatusCodeById(id: number): Promise<StatusCode>;
}

import { Repository } from 'typeorm';
import { SequenceCode } from './sequence-code.clio.entity';
export declare class SequenceCodeRepository extends Repository<SequenceCode> {
    getSequenceCodeById(id: number): Promise<SequenceCode>;
}

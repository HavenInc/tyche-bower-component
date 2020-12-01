import { SequenceCodeRepository } from '../models/sequence-code.repository';
import { SequenceCode } from '../models/sequence-code.clio.entity';
export declare class SequenceCodeService {
    private sequenceCodeRepository;
    constructor(sequenceCodeRepository: SequenceCodeRepository);
    getSequenceCodeById(id: number): Promise<SequenceCode>;
}

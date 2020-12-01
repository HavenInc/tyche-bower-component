import { StatusCode } from 'src/clio-db/models/status-code.clio.entity';
import { SequenceCodeService } from 'src/clio-db/service/sequence-code.service';
export declare class StatusCodeResolver {
    private sequenceCodeService;
    constructor(sequenceCodeService: SequenceCodeService);
    sequenceCode(statusCode: StatusCode): Promise<import("../../clio-db/models/sequence-code.clio.entity").SequenceCode>;
}

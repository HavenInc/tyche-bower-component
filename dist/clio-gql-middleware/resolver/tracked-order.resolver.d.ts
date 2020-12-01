import { TrackedOrder } from 'src/clio-db/models/tracked-order.clio.entity';
import { CarrierCodeService } from 'src/clio-db/service/carrier-code.service';
import { UserAffiliationDto } from 'src/clio-db/dto/user-affiliation.dto';
import { TrackedOrderService } from 'src/clio-db/service/tracked-order.service';
export declare class TrackedOrderResolver {
    private carrierCodeService;
    private trackedOrderService;
    constructor(carrierCodeService: CarrierCodeService, trackedOrderService: TrackedOrderService);
    orderIdsWithRisk(affiliation: UserAffiliationDto): Promise<number[]>;
    orderIds(affiliation: UserAffiliationDto): Promise<number[]>;
    trackedOrderContainers(trackedOrder: TrackedOrder): Promise<import("../../clio-db/models/tracked-order-container.clio.entity").TrackedOrderContainer[]>;
    carrier(trackedOrder: TrackedOrder): Promise<import("../../clio-db/models/carrier-code.clio.entity").CarrierCode>;
}

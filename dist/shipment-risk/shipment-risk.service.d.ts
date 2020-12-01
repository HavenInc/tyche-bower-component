import { TrackedOrderService } from '../clio-db/service/tracked-order.service';
import { TrackedOrderContainerService } from '../clio-db/service/tracked-order-container.service';
import { FilterOrderWithExceptionDto } from '../clio-db/dto/filter-order-with-exception.dto';
import { TrackedOrder } from 'src/clio-db/models/tracked-order.clio.entity';
import { TrackedOrderContainer } from 'src/clio-db/models/tracked-order-container.clio.entity';
import { FilterContainerWithExceptionDto } from 'src/clio-db/dto/filter-container-with-exception.dto';
import { DynamicRiskDto } from 'src/clio-db/dto/dynamic-risk.dto';
import { UserAffiliationDto } from 'src/clio-db/dto/user-affiliation.dto';
export declare class ShipmentRiskService {
    private trackedOrderService;
    private trackedOrderContainerService;
    constructor(trackedOrderService: TrackedOrderService, trackedOrderContainerService: TrackedOrderContainerService);
    getShipmentRisks(filter: FilterOrderWithExceptionDto, dynamicRisks: DynamicRiskDto, affiliation: UserAffiliationDto): Promise<{
        count: number;
        shipmentRisks: TrackedOrder[];
    }>;
    getContainerRisks(filter: FilterContainerWithExceptionDto, dynamicRisks: DynamicRiskDto, affiliation: UserAffiliationDto): Promise<{
        count: number;
        containerRisks: TrackedOrderContainer[];
    }>;
    runDynamicFilters(dynamicRisks: DynamicRiskDto, orderIds: number[]): Promise<number[]>;
    private isValidDays;
    private compoundedETDPassedFilter;
    handleCompoundedETAPassed(affiliation: UserAffiliationDto, orderIds: number[]): Promise<number[]>;
}

import { TrackedOrderRepository } from '../models/tracked-order.repository';
import { TrackedOrder } from '../models/tracked-order.clio.entity';
import { FilterOrderWithExceptionDto } from '../dto/filter-order-with-exception.dto';
import { UserAffiliationDto } from '../dto/user-affiliation.dto';
export declare class TrackedOrderService {
    private trackedOrderRepository;
    constructor(trackedOrderRepository: TrackedOrderRepository);
    getTrackedOrdersWithEvents(filter: FilterOrderWithExceptionDto, affiliation: UserAffiliationDto): Promise<[TrackedOrder[], number]>;
    filterWithoutEmptyReturnMilestone(orderIds: number[], days: number): Promise<number[]>;
    filterETDPassedNotLoaded(orderIds: number[], days: number): Promise<number[]>;
    filterNoGateOut(orderIds: number[], days: number): Promise<number[]>;
    filterShipmentsOnArrival(orderIds: number[], days: number): Promise<number[]>;
    getHavenOrderIdsWithRisk(customerOrgId: number): Promise<number[]>;
    getHavenOrderIds(customerOrgId: number): Promise<number[]>;
    getTrackedOrderWithExceptionCode(affiliation: UserAffiliationDto, exceptionCode: number, orderIds: number[]): Promise<number[]>;
    private extractOrderIds;
    private findLastGateEvent;
}

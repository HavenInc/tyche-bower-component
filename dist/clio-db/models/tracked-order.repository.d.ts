import { Repository } from 'typeorm';
import { TrackedOrder } from './tracked-order.clio.entity';
import { FilterOrderWithExceptionDto } from '../dto/filter-order-with-exception.dto';
import { UserAffiliationDto } from '../dto/user-affiliation.dto';
export declare class TrackedOrderRepository extends Repository<TrackedOrder> {
    getTrackedOrdersWithEvents(filter: FilterOrderWithExceptionDto, affiliation: UserAffiliationDto): Promise<[TrackedOrder[], number]>;
    private getColumnToOrderBy;
    private getQueryForTrackedOrdersWithEvents;
    findWithEmptyReturnMilestone(orderIds: number[]): Promise<TrackedOrder[]>;
    findPassedArrival(orderIds: number[], days: number): Promise<TrackedOrder[]>;
    findOrderIdsWithRiskForCustomerOrgId(customerOrgId: number): Promise<TrackedOrder[]>;
    findOrderIdsForCustomerOrgId(customerOrgId: number): Promise<TrackedOrder[]>;
    filterArrival(orderIds: number[], days: number): Promise<TrackedOrder[]>;
    getTrackedOrderWithExceptionCode(affiliation: UserAffiliationDto, exceptionCode: number, orderIds: number[]): Promise<TrackedOrder[]>;
    findPassedDeparture(orderIds: number[], days: number): Promise<TrackedOrder[]>;
    findWithLoadedMilestone(orderIds: number[]): Promise<TrackedOrder[]>;
    findGateInGateOutEvent(orderIds: number[]): Promise<TrackedOrder[]>;
    private getMilestoneQuery;
}

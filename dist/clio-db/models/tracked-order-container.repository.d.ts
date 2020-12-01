import { Repository } from 'typeorm';
import { TrackedOrderContainer } from './tracked-order-container.clio.entity';
import { FilterContainerWithExceptionDto } from '../dto/filter-container-with-exception.dto';
import { UserAffiliationDto } from '../dto/user-affiliation.dto';
export declare class TrackedOrderContainerRepository extends Repository<TrackedOrderContainer> {
    getTrackedOrderContainerByTrackedOrder(trackedOrder: number): Promise<TrackedOrderContainer[]>;
    getContainersWithEvents(filter: FilterContainerWithExceptionDto, affiliation: UserAffiliationDto): Promise<[TrackedOrderContainer[], number]>;
    private getColumnToOrderBy;
    private getQueryForContainersWithEvents;
}

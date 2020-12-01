import { TrackedOrderContainerRepository } from '../models/tracked-order-container.repository';
import { TrackedOrderContainer } from '../models/tracked-order-container.clio.entity';
import { FilterContainerWithExceptionDto } from '../dto/filter-container-with-exception.dto';
import { UserAffiliationDto } from '../dto/user-affiliation.dto';
export declare class TrackedOrderContainerService {
    private trackedOrderContainerRepository;
    constructor(trackedOrderContainerRepository: TrackedOrderContainerRepository);
    getTrackedOrderContainerByTrackedOrder(trackedOrder: number): Promise<TrackedOrderContainer[]>;
    getTrackedOrderContainerById(id: number): Promise<TrackedOrderContainer>;
    getContainersWithEvents(filter: FilterContainerWithExceptionDto, affiliation: UserAffiliationDto): Promise<[TrackedOrderContainer[], number]>;
}

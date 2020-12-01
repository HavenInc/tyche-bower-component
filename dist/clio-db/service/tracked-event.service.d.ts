import { TrackedEventRepository } from '../models/tracked-event.repository';
import { TrackedEvent } from '../models/tracked-event.clio.entity';
export declare class TrackedEventService {
    private trackedEventRepository;
    constructor(trackedEventRepository: TrackedEventRepository);
    getEventsByTrackedContainer(trackedContainer: number): Promise<TrackedEvent[]>;
    getArrivalOfContainers(orgId: number, days: number, orderIds: number[]): Promise<TrackedEvent[]>;
}

import { TrackedContainer } from 'src/clio-db/models/tracked-container.clio.entity';
import { TrackedEventService } from 'src/clio-db/service/tracked-event.service';
export declare class TrackedContainerResolver {
    private trackedEventService;
    constructor(trackedEventService: TrackedEventService);
    trackedEvents(trackedContainer: TrackedContainer): Promise<import("../../clio-db/models/tracked-event.clio.entity").TrackedEvent[]>;
}

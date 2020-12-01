import { TrackedOrderContainer } from 'src/clio-db/models/tracked-order-container.clio.entity';
import { TrackedContainerService } from 'src/clio-db/service/tracked-container.service';
export declare class TrackedOrderContainerResolver {
    private trackedContainerService;
    constructor(trackedContainerService: TrackedContainerService);
    container(trackedOrderContainer: TrackedOrderContainer): Promise<import("../../clio-db/models/tracked-container.clio.entity").TrackedContainer>;
    order(trackedOrderContainer: TrackedOrderContainer): Promise<import("../../clio-db/models/tracked-order.clio.entity").TrackedOrder>;
    trackedEvents(trackedOrderContainer: TrackedOrderContainer): Promise<import("../../clio-db/models/tracked-event.clio.entity").TrackedEvent[]>;
}

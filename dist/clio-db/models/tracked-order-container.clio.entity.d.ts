import { TrackedOrder } from './tracked-order.clio.entity';
import { TrackedContainer } from './tracked-container.clio.entity';
import { TrackedEvent } from './tracked-event.clio.entity';
export declare class TrackedOrderContainer {
    id: number;
    trackedContainer: number;
    trackedOrder: number;
    visibility: boolean;
    container: TrackedContainer;
    order: TrackedOrder;
    trackedEvents: TrackedEvent[];
}

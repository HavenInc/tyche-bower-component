import { TrackedOrderContainer } from './tracked-order-container.clio.entity';
import { TrackedEvent } from './tracked-event.clio.entity';
export declare class TrackedContainer {
    id: number;
    containerId: string;
    type: string;
    trackedOrderContainer: TrackedOrderContainer;
    trackedEvents: TrackedEvent[];
}

import { TrackedContainerType } from './tracked-container.type';
import { TrackedOrderType } from './tracked-order.type';
import { TrackedEventType } from './tracked-event.type';
export declare class TrackedOrderContainerType {
    id: number;
    trackedOrder: number;
    trackedContainer: number;
    order: TrackedOrderType;
    container: TrackedContainerType;
    trackedEvents: TrackedEventType[];
    visibility: boolean;
}

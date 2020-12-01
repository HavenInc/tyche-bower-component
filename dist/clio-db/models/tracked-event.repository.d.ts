import { Repository } from 'typeorm';
import { TrackedEvent } from './tracked-event.clio.entity';
export declare class TrackedEventRepository extends Repository<TrackedEvent> {
    getArrivalOfContainers(orgId: number, days: number, orderIds: number[]): Promise<TrackedEvent[]>;
}

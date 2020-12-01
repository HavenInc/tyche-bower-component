import { Repository } from 'typeorm';
import { TrackedContainer } from './tracked-container.clio.entity';
export declare class TrackedContainerRepository extends Repository<TrackedContainer> {
    getTrackedContainerById(id: number): Promise<TrackedContainer>;
}

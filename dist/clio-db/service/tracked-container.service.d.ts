import { TrackedContainer } from 'src/clio-db/models/tracked-container.clio.entity';
import { TrackedContainerRepository } from '../models/tracked-container.repository';
export declare class TrackedContainerService {
    private trackedContainerRepository;
    constructor(trackedContainerRepository: TrackedContainerRepository);
    getTrackedContainerById(id: number): Promise<TrackedContainer>;
}

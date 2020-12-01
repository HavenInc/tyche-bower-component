import { TrackedEvent } from 'src/clio-db/models/tracked-event.clio.entity';
import { TrackedOrderContainerService } from 'src/clio-db/service/tracked-order-container.service';
import { TrackedContainerService } from 'src/clio-db/service/tracked-container.service';
import { ExceptionCodeService } from 'src/clio-db/service/exception-code.service';
import { StatusCodeService } from 'src/clio-db/service/status-code.service';
export declare class TrackedEventResolver {
    private trackedOrderContainerService;
    private trackedContainerService;
    private exceptionCodeServicerService;
    private statusCodeService;
    constructor(trackedOrderContainerService: TrackedOrderContainerService, trackedContainerService: TrackedContainerService, exceptionCodeServicerService: ExceptionCodeService, statusCodeService: StatusCodeService);
    exception(trackedEvent: TrackedEvent): Promise<import("../../clio-db/models/exception-code.clio.entity").ExceptionCode>;
    trackedOrderContainer(trackedEvent: TrackedEvent): Promise<import("../../clio-db/models/tracked-order-container.clio.entity").TrackedOrderContainer>;
    container(trackedEvent: TrackedEvent): Promise<import("../../clio-db/models/tracked-container.clio.entity").TrackedContainer>;
    status(trackedEvent: TrackedEvent): Promise<import("../../clio-db/models/status-code.clio.entity").StatusCode>;
}

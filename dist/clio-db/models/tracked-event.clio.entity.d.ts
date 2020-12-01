import { TrackedContainer } from './tracked-container.clio.entity';
import { TrackedOrderContainer } from './tracked-order-container.clio.entity';
import { ExceptionCode } from './exception-code.clio.entity';
import { StatusCode } from './status-code.clio.entity';
export declare class TrackedEvent {
    id: number;
    trackedContainer: number;
    updatedAt: string;
    actual: Date;
    planned: Date;
    providerLocation: string;
    providerVessel: string;
    providerVoyage: string;
    providerStatus: string;
    providerContents: string;
    exceptionCode: number;
    statusCode: number;
    sourceCode: number;
    notes: string;
    orderContainer: number;
    visibility: boolean;
    timezone: string;
    havenPortId: number;
    container: TrackedContainer;
    trackedOrderContainer: TrackedOrderContainer;
    status: StatusCode;
    exception: ExceptionCode;
}

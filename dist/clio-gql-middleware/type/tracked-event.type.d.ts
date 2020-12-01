import { TrackedOrderContainerType } from './tracked-order-container.type';
import { TrackedContainerType } from './tracked-container.type';
import { ExceptionCodeType } from './exception-code.type';
import { StatusCodeType } from './status-code.type';
export declare class TrackedEventType {
    id: number;
    trackedContainer: number;
    container: TrackedContainerType;
    updatedAt: string;
    actual: string;
    planned: string;
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
    trackedOrderContainer: TrackedOrderContainerType;
    visibility: boolean;
    timezone: string;
    havenPortId: number;
    exception: ExceptionCodeType;
    status: StatusCodeType;
}

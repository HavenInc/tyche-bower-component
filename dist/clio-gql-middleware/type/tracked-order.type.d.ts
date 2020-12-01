import { TrackedOrderContainerType } from './tracked-order-container.type';
import { CarrierCode } from 'src/clio-db/models/carrier-code.clio.entity';
export declare class TrackedOrderType {
    id: number;
    havenOrderId: number;
    carrierCode: number;
    carrierBookingNum: string;
    billOfLadingNum: string;
    nextMove: Date;
    departure: Date;
    arrival: Date;
    updatedAt: string;
    customerOrgId: number;
    havenStatus: string;
    trackedOrderContainers: TrackedOrderContainerType[];
    carrier: CarrierCode;
}

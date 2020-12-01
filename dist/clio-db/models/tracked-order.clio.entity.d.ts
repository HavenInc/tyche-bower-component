import { TrackedOrderContainer } from './tracked-order-container.clio.entity';
import { CarrierCode } from './carrier-code.clio.entity';
export declare class TrackedOrder {
    id: number;
    havenOrderId: number;
    carrierCode: number;
    havenStatus: string;
    carrierBookingNum: string;
    billOfLadingNum: string;
    nextMove: Date;
    departure: Date;
    arrival: Date;
    updatedAt: string;
    customerOrgId: number;
    trackedOrderContainers: TrackedOrderContainer[];
    carrier: CarrierCode;
}

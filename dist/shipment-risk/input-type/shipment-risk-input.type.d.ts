import { ShipmentSortColumn } from 'src/clio-db/dto/filter-order-with-exception.dto';
export declare class ShipmentSortBy {
    column: ShipmentSortColumn;
    asc: boolean;
}
export declare class ShipmentRiskInputType {
    exceptionCodes: number[];
    skip: number;
    take: number;
    orderIds: number[];
    search: string;
    shipmentSortBy: ShipmentSortBy;
    arrival: Date;
    departure: Date;
}

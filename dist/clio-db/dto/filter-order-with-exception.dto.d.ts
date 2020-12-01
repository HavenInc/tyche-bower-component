import { FilterWithExceptionDto } from './filter-with-exception.dto';
export declare enum ShipmentSortColumn {
    ORDER = 0,
    STATUS = 1,
    BL = 2,
    BOOKING = 3,
    CARRIER = 4,
    ARRIVAL = 5,
    DEPARTURE = 6
}
export declare class ShipmentSortBy {
    column: ShipmentSortColumn;
    asc: boolean;
}
export declare class FilterOrderWithExceptionDto extends FilterWithExceptionDto {
    shipmentSortBy: ShipmentSortBy;
}

import { FilterWithExceptionDto } from './filter-with-exception.dto';
export declare enum ContainerSortColumn {
    ORDER = 0,
    CARRIER = 1,
    BL = 2,
    BOOKING = 3,
    CONTAINER = 4,
    EQUIPMENT = 5,
    LAST_UPDATED = 6,
    ARRIVAL = 7,
    DEPARTURE = 8
}
export declare class ContainerSortBy {
    column: ContainerSortColumn;
    asc: boolean;
}
export declare class FilterContainerWithExceptionDto extends FilterWithExceptionDto {
    containerSortBy: ContainerSortBy;
    containerIds: number[];
}

import { ContainerSortColumn } from 'src/clio-db/dto/filter-container-with-exception.dto';
export declare class ContainerSortBy {
    column: ContainerSortColumn;
    asc: boolean;
}
export declare class ContainerRiskInputType {
    orgId: number;
    exceptionCodes: number[];
    skip: number;
    take: number;
    orderIds: number[];
    search: string;
    containerSortBy: ContainerSortBy;
}

import { ShipmentRiskService } from './shipment-risk.service';
import { FilterOrderWithExceptionDto } from 'src/clio-db/dto/filter-order-with-exception.dto';
import { TrackedOrder } from 'src/clio-db/models/tracked-order.clio.entity';
import { TrackedOrderContainer } from 'src/clio-db/models/tracked-order-container.clio.entity';
import { FilterContainerWithExceptionDto } from 'src/clio-db/dto/filter-container-with-exception.dto';
import { DynamicRiskDto } from 'src/clio-db/dto/dynamic-risk.dto';
export declare class ShipmentRiskController {
    private shipmentRiskService;
    constructor(shipmentRiskService: ShipmentRiskService);
    healthCheck(): string;
    getShipmentRisks(filter: FilterOrderWithExceptionDto, risks: DynamicRiskDto, params: any): Promise<{
        count: number;
        shipmentRisks: TrackedOrder[];
    }>;
    getContainerRisks(filter: FilterContainerWithExceptionDto, risks: DynamicRiskDto, params: any): Promise<{
        count: number;
        containerRisks: TrackedOrderContainer[];
    }>;
}

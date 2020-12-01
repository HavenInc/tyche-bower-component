import { ShipmentRiskType } from './output-type/shipment-risk.type';
import { ShipmentRiskService } from './shipment-risk.service';
import { ContainerRiskType } from './output-type/container-risk.type';
import { UserAffiliationDto } from 'src/clio-db/dto/user-affiliation.dto';
import { FilterContainerWithExceptionDto } from 'src/clio-db/dto/filter-container-with-exception.dto';
import { FilterOrderWithExceptionDto } from 'src/clio-db/dto/filter-order-with-exception.dto';
import { DynamicRiskDto } from 'src/clio-db/dto/dynamic-risk.dto';
export declare class ShipmentRiskResolver {
    private shipmentRiskService;
    constructor(shipmentRiskService: ShipmentRiskService);
    shipmentRisks(affiliation: UserAffiliationDto, filter: FilterOrderWithExceptionDto, risks?: DynamicRiskDto): Promise<ShipmentRiskType>;
    containerRisks(affiliation: UserAffiliationDto, filter: FilterContainerWithExceptionDto, risks?: DynamicRiskDto): Promise<ContainerRiskType>;
}

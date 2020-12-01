import { CarrierCodeRepository } from '../models/carrier-code.repository';
import { CarrierCode } from '../models/carrier-code.clio.entity';
export declare class CarrierCodeService {
    private carrierCodeRepository;
    constructor(carrierCodeRepository: CarrierCodeRepository);
    getCarrierCodeById(id: number): Promise<CarrierCode>;
}

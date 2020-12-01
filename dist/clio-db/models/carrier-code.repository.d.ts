import { Repository } from 'typeorm';
import { CarrierCode } from './carrier-code.clio.entity';
export declare class CarrierCodeRepository extends Repository<CarrierCode> {
    getCarrierCodeById(id: number): Promise<CarrierCode>;
}

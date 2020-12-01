import { SequenceCode } from './sequence-code.clio.entity';
export declare class StatusCode {
    id: number;
    value: string;
    edi_code: string;
    loaded_status: number;
    sequenceCode: number;
    sequence: SequenceCode;
}

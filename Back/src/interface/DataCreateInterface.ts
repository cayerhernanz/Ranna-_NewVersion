import { Data, DataType } from "../entity/Data";

export interface DataCreateInterface extends Data {
    name: string,
    type: DataType,
    value: string,
    creator_id: number
}
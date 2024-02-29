import { Group } from "../entity/Group";

export interface GroupInterface extends Group {
    name: string,
    description: string,
    owner_id: number,
    limited_at: Date | null
}
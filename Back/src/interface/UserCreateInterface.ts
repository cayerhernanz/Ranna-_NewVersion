import { User } from "../entity/User";
export interface UsercreateInterface extends User {
    nickname: string,
    password: string,
    email: string
}
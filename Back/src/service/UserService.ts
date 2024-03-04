import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { UserDisplayInterface } from "../interface/UserDisplayInterface";

export class UserService {
    private UserRepository = AppDataSource.getRepository(User)

    //Find one user by a determinated field
    async find(field: string, value: number | string, populate: boolean): Promise<User> {
        if (populate === true){
            return await this.UserRepository.findOne({
                where: {[field]: value},
                relations: ['groups']
            })
        }
        else{
            return await this.UserRepository.findOne({
                where: {[field]: value}
            })
        }
    }

    //Get usernickname with his id (for fromat)
    async getNickname(id: number): Promise<UserDisplayInterface> {
        const userData = await this.UserRepository.findOne({where: {id: id}})
        const user = {id: id, nickname: userData.nickname};
        return user;
    }
   
}
import { AppDataSource } from "../data-source";
import { Request } from "../entity/Request";
import { UserService } from "./UserService";

export class RequestService {
    private  RequestRepository = AppDataSource.getRepository(Request);
    private userService = new UserService();

    //Request creation between 2 users
    async create(activeUserId: number, targetUserId: number): Promise<Request> {
        const newRequest = await this.RequestRepository.create({
            activeUser_id: activeUserId,
            targetUser_id: targetUserId
        });
        return await this.RequestRepository.save(newRequest);
    }

    //Retrieve one request between 2 users with users id
    async oneByUsers(userId: number, otherUserId: number): Promise<Request> {
        return await this.RequestRepository.findOne({
            where:[{
                activeUser_id: userId,
                targetUser_id: otherUserId
            },
            {
                activeUser_id: otherUserId,
                targetUser_id: userId
            }]
        })
    }

    //Retrieve one request between 2 users with request id
    async oneById(id: number): Promise<Request> {
        return await this.RequestRepository.findOneBy({id})
    }

    //Retrieve all requests of the user with his role in the request and his user id
    async allByUserRole(role: string, id: number): Promise<Request[]> {
        return await this.RequestRepository.find({where: {[role]: id}})
    }

    //Format user object in a request
    returnRequestList(list: Request[], otherUserId: number, otherUserRole: string){ //userId && otherUserId = "activeUser_id" or "targetUser_id"
        const returnList = Promise.all(list.map(async(element) => {
            const targetUser = await this.userService.getNickname(otherUserId);
            const otherUser = {[otherUserId]: targetUser.id, nickname: targetUser.nickname}
            const request = {
                id: element.id,
                [otherUserRole]: otherUser
            }
            return request
        }))
        return returnList
    }

    //Delete a request
    async remove(request: Request){
        await this.RequestRepository.remove(request)
    }
}
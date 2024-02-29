import { AppDataSource } from "../data-source";
import { Request } from "../entity/Request";

export class RequestService {
    private  RequestRepository = AppDataSource.getRepository(Request)

    //Request creation between 2 users
    async create(activeUserId: number, targetUserId: number): Promise<Request> {
        const newRequest = this.RequestRepository.create({
            activeUser_id: activeUserId,
            targetUser_id: targetUserId
        });
        return await this.RequestRepository.save(newRequest);
    }

    //Retrieve one request between 2 users with users id
    async oneByUsers(userId: number, otherUserId: number): Promise<Request> {
        return this.RequestRepository.findOne({
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
        return this.RequestRepository.findOneBy({id})
    }

    //Retrieve all requests of the user with his role in the request and his user id
    async allByUserRole(role: string, id: number): Promise<Request[]> {
        return this.RequestRepository.find({where: {[role]: id}})
    }
}
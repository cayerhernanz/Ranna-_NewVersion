import { AppDataSource } from "../data-source";
import { Contact } from "../entity/Contact";
import { UserService } from "./UserService";

export class ContactService {
    private ContactRepository = AppDataSource.getRepository(Contact);
    private userService = new UserService();

    //Create a contact objet between 2 users
    async create(userId: number, otherUserId: number): Promise<Contact> {
        const newContact = await this.ContactRepository.create({
            user_id: userId,
            otherUser_id: otherUserId
        });
        return await this.ContactRepository.save(newContact);
    }

    //Retrieve a contact between 2 users with users id
    async oneByUsers(userId: number, otherUserId: number): Promise<Contact> {
        return await this.ContactRepository.findOne({
            where:[{
                user_id: userId,
                otherUser_id: otherUserId
            },
            {
                user_id: otherUserId,
                otherUser_id: userId
            }
        ]
        })
    }

    //Retrieve a contact between 2 users with contact id
    async oneById(id: number): Promise<Contact> {
        return await this.ContactRepository.findOneBy({id})
    }

    //Retrieve all contacts of the user with his role and user id
    async allByUserRole(role: string, id: number): Promise<Contact[]> {
        return await this.ContactRepository.find({where: {[role]: id}})
    }

    //Format user object in a contact
    returnContactList(list: Contact[], otherUserRole: string, otherUserId: number){ //userId && otherUserId = "user_id" or "otherUser_id"
        const returnList = Promise.all(list.map(async(element) => {
            const targetUser = await this.userService.getNickname(otherUserId);
            const otherUser = {[otherUserid]}
        }))
    }

    //Delete contact
    async remove(contact: Contact){
        await this.ContactRepository.remove(contact)
    }
}
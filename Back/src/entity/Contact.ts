import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE"})
    @JoinColumn({name: "user_id"})
    user: User

    @Column()
    user_id: number

    @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE"})
    @JoinColumn({name: "otherUser_id"})
    otherUser: User

    @Column()
    otherUser_id: number
}
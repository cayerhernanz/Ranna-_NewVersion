import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Request {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE"})
    @JoinColumn({name: "activeUser_id"})
    activeUser: User

    @Column()
    activeUser_id: number

    @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE"})
    @JoinColumn({name: "targetUser_id"})
    targetUser: User

    @Column()
    targetUser_id: number
}
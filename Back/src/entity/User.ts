import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Contact } from "./Contact"
import { Request } from "./Request"
import { Group } from "./Group"
import { Data } from "./Data"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 45, default: "", unique: true})
    nickname: string

    @Column({type: "varchar", length: 70, default: ""})
    password: string

    @Column({type: "varchar", length: 254, default: "", unique: true})
    email: string

    @Column({type: "number", default: 0})
    avatar_id: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Contact, (contact) => contact.user)
    users: User[]

    @OneToMany(() => Contact, (contact) => contact.otherUser)
    otherUsers: User[]

    @OneToMany(() => Request, (request) => request.activeUser)
    activeUsers: User[]

    @OneToMany(() => Request, (request) => request.targetUser)
    targetUsers: User[]

    @OneToMany(() => Data, (data) => data.user)
    datas: Data[]

    @OneToMany(() => Group, (group) => group.owner)
    createdGroups: Group[]

    @ManyToMany(() => Group)
    @JoinTable({
        name: "user_has_group",
        joinColumn: { name: "user_id" },
        inverseJoinColumn: { name: "group_id" }
    })
    groups: Group[]

}

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { User } from "./User"

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 45})
    name: string

    @Column({type: "varchar", length: 245, default: ""})
    description: string

    @Column({nullable: true, default: null})
    limited_at: Date | null

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, (user) => user.createdGroups, { onDelete: "CASCADE"})
    @JoinColumn({name: "owner_id"})
    owner: User

    @Column()
    owner_id: number

    @ManyToMany( () => User)
    @JoinTable({
        name: "user_has_group",
        joinColumn: { name: "group_id" },
        inverseJoinColumn: { name: "user_id" }
    })
    users: User[]
}
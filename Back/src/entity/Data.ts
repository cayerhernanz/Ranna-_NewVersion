import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm"
import { User } from "./User"
import { Share } from "./Share"
export enum DataType {
    ADDRESS = "address",
    PHONE = "phone",
    EMAIL = "email",
    URL = "url",
    TEXT = "text"
}

@Entity()
export class Data {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length: 45, default: ""})
    name: string

    @Column({ type: "enum", enum: DataType})
    type: DataType

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, (user) => user.datas, {onDelete: "CASCADE"})
    @JoinColumn({name: "user_id"})
    user: User

    @ManyToMany(() => Share)
    @JoinTable({
        name: "data_has_share",
        joinColumn: { name: "data_id" },
        inverseJoinColumn: { name: "share_id" }
    })
    shares: Share[]
    
}
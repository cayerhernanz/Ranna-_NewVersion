import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Data } from "./Data"

export enum ShareTarget {
    GROUP = "group",
    USER = "user"
}

@Entity()
export class Share {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "enum", enum: ShareTarget})
    target: ShareTarget

    @Column({type: "number"})
    creator_id: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToMany(() => Data)
    @JoinTable({
        name: "data_has_share",
        joinColumn: { name: "share_id" },
        inverseJoinColumn: { name: "data_id" }
    })
    datas: Data[]

}
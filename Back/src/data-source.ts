import "reflect-metadata"
import { DataSource } from "typeorm"
import * as dotenv from "dotenv"
dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST_DB,
    port: +process.env.PORT_DB,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    synchronize: true,
    logging: false,
    entities: ["./src/entity/*{.ts,.js}"],
    migrations: [],
    subscribers: [],
})

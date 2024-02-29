import { AppDataSource } from "./data-source"
import * as dotenv from "dotenv"
dotenv.config()
import { startServer } from "./app"

AppDataSource.initialize().then(async () => {
    const app = await startServer();
    app.listen(process.env.PORT)
    console.log(`Express server initialized on http://localhost:${process.env.PORT}.`)
}).catch(error => console.log(error))
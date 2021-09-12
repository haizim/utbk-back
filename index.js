import express from "express";
import cors from "cors";
import db from "./config/database.js";
import utbkRoutes from "./routes/index.js"

const app = express()

try{
    db.authenticate();
    console.log("atabase Connected")
}catch (error){
    console.error('Connection Error : ', error);
}

app.use(cors());
app.use(express.json());
app.use('/', utbkRoutes)


app.listen(5000, () => console.log("Server running at port 5000"));
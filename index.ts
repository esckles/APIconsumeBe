import express, { Application } from "express";
import env from "dotenv";
import cors from "cors";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";
env.config();

const app: Application = express();
app.use(express.json());
app.use(cors());
mainApp(app);

app.listen(parseInt(process.env.PORT as string), () => {
  dbConfig();
});

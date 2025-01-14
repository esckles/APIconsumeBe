import express, { Application } from "express";
import env from "dotenv";
import cors from "cors";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";
env.config();

const app: Application = express();
app.use(express.json());
mainApp(app);
app.use(
  cors({
    origin: "https://e-samstore.onrender.com",
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.listen(parseInt(process.env.PORT as string), () => {
  dbConfig();
});

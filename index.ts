import express from "express";
import { Request, Response } from "express";
import dbConnection from "./src/config/dbConnection";
import userRouter from "./src/routers/userRouter";
import dotenv from "dotenv";
dotenv.config();

const app = express();

dbConnection();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("Hello World!");
});

app.use("/user", userRouter);

app.listen(process.env.PORT || 3000, async () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 3000}`
  );
});

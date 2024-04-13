import { Elysia } from "elysia";
import { userController } from "./src/controller/userController";
import dbConnection from "./src/config/dbConnection";

dbConnection();

export const app = new Elysia()
  .group("/user", (app) => app.use(userController))
  .listen(Bun.env.PORT || 3001);
console.log(`Listening on http://localhost:${app.server?.port} ...`);

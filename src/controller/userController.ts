import { Elysia } from "elysia";
import userService from "../service/userService";

export const userController = (app: Elysia) =>
  app.decorate("UserService", userService).get("/", async ({ UserService }) => {
    const startTiem = Date.now();
    const users = await UserService.sendNotificationToUser();
    let notifications = users.map((user) => user.socketId);
    return `BUN JS: Notifications sent to: ${
      notifications.length
    } users successfully! Time taken: ${Date.now() - startTiem}ms`;
  });

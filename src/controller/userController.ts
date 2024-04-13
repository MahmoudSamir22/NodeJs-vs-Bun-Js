import userService from "../services/userService";
import { Request, Response } from "express";

class UserController {
  async sendNotificationToUser(req: Request, res: Response) {
    try {
      const startTiem = Date.now();
      const users = await userService.sendNotificationToUser();
      let notifications = users.map((user) => user.socketId);
      res
        .status(200)
        .json(
          `NODE JS: Notifications sent to: ${
            notifications.length
          } users successfully! Time taken: ${Date.now() - startTiem}ms`
        );
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

const userController = new UserController();
export default userController;

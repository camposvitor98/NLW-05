import { Request, Response } from "express";
import { UserService } from "../services/UsersServices";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const userService = new UserService();

    try {
      const user = await userService.create(email);
      return response.json(user);
    } catch (err) {
      return response.status(500).json({
        message: err.message,
      });
    }
  }
}

export { UsersController };

import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesServices";

class MessagesController {
  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;

    const messagesService = new MessagesService();

    try {
      const messages = await messagesService.create({
        admin_id,
        text,
        user_id,
      });

      return response.json(messages);
    } catch (err) {
      return response.status(500).json({
        message: err.message,
      });
    }
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    const messagesService = new MessagesService();

    try {
      const list = await messagesService.listByUser(id);

      return response.json(list);
    } catch (err) {
      return response.status(500).json({
        message: err.message,
      });
    }
  }
}

export { MessagesController };

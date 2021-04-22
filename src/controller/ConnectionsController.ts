import { Request, Response } from "express";
import { ConnectionsService } from "../services/ConnectionsServices";

class ConnectionsController {
  async create(request: Request, response: Response) {
    const { admin_id, user_id } = request.body;

    const connectionsService = new ConnectionsService();

    try {
      const connections = await connectionsService.create({
        admin_id,
        user_id,
      });

      return response.json(connections);
    } catch (err) {
      return response.status(500).json({
        message: err.message,
      });
    }
  }
}

export { ConnectionsController };

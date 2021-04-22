import { Router } from "express";
import { ConnectionsController } from "./controller/ConnectionsController";
import { MessagesController } from "./controller/MessagesController";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UserController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
const connectionsController = new ConnectionsController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

routes.post("/connections", connectionsController.create);

export { routes };

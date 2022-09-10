import { Router } from "express";
import UserController from "./controllers/UserController";

const router = Router();

const userController = new UserController();

router.get("/", userController.handleListUser);

router.get("/add", (request, response) => {
  response.render("add");
});

router.post("/add-user", userController.handleCreateUser);

router.get("/search", userController.handleSearchUser);

router.get("/edit", userController.handleGetUser);

router.post("/edit-user", userController.handleUpdateUser);

router.post("/delete-user", userController.handleDeleteUser);

export { router };

/**
 * This file will define all the endpoits for the api
 */

import { Router } from "express";
import type { ToDoController } from "../controllers/ToDoController.js";

/**
 * Notice that we are not creating the
 * TodoController inside this file. Instead,
 * we're passing it in as an argument to the
 * createTodoRouter function.
 *
 * This continues our Dependency Injection
 * pattern. The router doesn't know how to
 * create a controller; it only knows how to
 * use one. This keeps our code decoupled and
 * easy to test.
 */

export function createToDoRouter(toDoController: ToDoController): Router {
  const router = Router();

  router.post("/todos", (req, res) => toDoController.create(req, res));
  router.get("/todos", (req, res) => toDoController.getAll(req, res));
  router.get("/todos/:toDoId", (req, res) => toDoController.getById(req, res));
  router.delete("/todos/:toDoId", (req, res) =>
    toDoController.delete(req, res)
  );
  router.put("/todos", (req, res) => toDoController.update(req, res));

  return router;
}

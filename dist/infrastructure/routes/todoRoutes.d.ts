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
export declare function createToDoRouter(toDoController: ToDoController): Router;
//# sourceMappingURL=todoRoutes.d.ts.map
"use strict";
/**
 * This file will define all the endpoits for the api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDoRouter = createToDoRouter;
var express_1 = require("express");
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
function createToDoRouter(toDoController) {
    var router = (0, express_1.Router)();
    router.post("/todos", function (req, res) { return toDoController.create(req, res); });
    router.get("/todos", function (req, res) { return toDoController.getAll(req, res); });
    router.get("/todos/:toDoId", function (req, res) { return toDoController.getById(req, res); });
    router.delete("/todos/:toDoId", function (req, res) {
        return toDoController.delete(req, res);
    });
    router.put("/todos", function (req, res) { return toDoController.update(req, res); });
    return router;
}

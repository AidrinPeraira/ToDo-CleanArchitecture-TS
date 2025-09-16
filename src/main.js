"use strict";
/**
 * This file, main.ts, is the Composition Root. Its only job is to:
 *      Initialize connections (like the database).
 *      Create instances of all your classes (Repositories, Use Cases, Controllers).
 *      Inject the dependencies into the classes that need them.
 *      Start the server.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var MongoToDoRepository_js_1 = require("./infrastructure/database/MongoToDoRepository.js");
var CreateTodo_js_1 = require("./application/use-cases/CreateTodo.js");
var GetAllToDos_js_1 = require("./application/use-cases/GetAllToDos.js");
var GetToDoById_js_1 = require("./application/use-cases/GetToDoById.js");
var UpdateTodo_js_1 = require("./application/use-cases/UpdateTodo.js");
var DeleteToDo_js_1 = require("./application/use-cases/DeleteToDo.js");
var ToDoController_js_1 = require("./infrastructure/controllers/ToDoController.js");
var todoRoutes_js_1 = require("./infrastructure/routes/todoRoutes.js");
var mongo_js_1 = require("./config/mongo.js");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var app, toDoRepository, createTodo_useCase, getAllToDos_useCase, getToDoById_useCase, updateToDo_useCase, deleteToDo_useCase, toDoController, toDoRouter, port;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = (0, express_1.default)();
                    app.use(express_1.default.json());
                    app.use(express_1.default.urlencoded());
                    //connct db
                    return [4 /*yield*/, (0, mongo_js_1.default)()];
                case 1:
                    //connct db
                    _a.sent();
                    toDoRepository = new MongoToDoRepository_js_1.MongoToDoRepository();
                    createTodo_useCase = new CreateTodo_js_1.CreateTodo(toDoRepository);
                    getAllToDos_useCase = new GetAllToDos_js_1.GetAllToDos(toDoRepository);
                    getToDoById_useCase = new GetToDoById_js_1.GetToDoById(toDoRepository);
                    updateToDo_useCase = new UpdateTodo_js_1.UpdateToDo(toDoRepository);
                    deleteToDo_useCase = new DeleteToDo_js_1.DeleteToDo(toDoRepository);
                    toDoController = new ToDoController_js_1.ToDoController(createTodo_useCase, getAllToDos_useCase, getToDoById_useCase, updateToDo_useCase, deleteToDo_useCase);
                    toDoRouter = (0, todoRoutes_js_1.createToDoRouter)(toDoController);
                    //tell express to the the to do router(normal way)
                    app.use("/api", toDoRouter);
                    port = 3000;
                    app.listen(port, function () {
                        console.log("Server running in port " + port);
                    });
                    return [2 /*return*/];
            }
        });
    });
}

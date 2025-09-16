"use strict";
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
exports.ToDoController = void 0;
/**
 * The constructor of TodoController will
 *  use dependency injection to receive
 *  an instance of every single one of your
 *  use cases (CreateTodo, GetAllTodos, UpdateTodo, etc.).
 *
 * It will have methods like
 *  create(req, res),
 *  getAll(req, res), etc.,
 * for each endpoint.
 */
var ToDoController = /** @class */ (function () {
    function ToDoController(createToDo, getAllToDo, getToDoById, updateToDo, deleteToDo) {
        this.createToDo = createToDo;
        this.getAllToDo = getAllToDo;
        this.getToDoById = getToDoById;
        this.updateToDo = updateToDo;
        this.deleteToDo = deleteToDo;
    }
    ToDoController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, description, newToDo, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, title = _a.title, description = _a.description;
                        if (!title || !description) {
                            res
                                .status(400)
                                .json({ message: "Title and description are required." });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.createToDo.execute(title, description)];
                    case 1:
                        newToDo = _b.sent();
                        res.status(201).json(newToDo);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        res
                            .status(500)
                            .json({ message: "Error creating todo", error: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ToDoController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoId, toDoData, updatedToDo, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        toDoId = req.params.toDoId;
                        toDoData = req.body;
                        if (!toDoId) {
                            res.status(400).json({ message: "To do id is required" });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.updateToDo.execute(toDoId, toDoData)];
                    case 1:
                        updatedToDo = _a.sent();
                        if (updatedToDo) {
                            res.status(200).json({ message: "Todo successfuly updated" });
                        }
                        else {
                            res.status(404).json({ message: "Todo not found" });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        res
                            .status(500)
                            .json({ message: "error updating todo", error: error_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ToDoController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoId, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        toDoId = req.params.toDoId;
                        if (!toDoId) {
                            res.status(400).json({ message: "Todo Id id required" });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.deleteToDo.execute(toDoId)];
                    case 1:
                        _a.sent();
                        res.status(204).send();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res
                            .status(500)
                            .json({ message: "Failed to delete todo", error: error_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ToDoController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var allToDo, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getAllToDo.execute()];
                    case 1:
                        allToDo = _a.sent();
                        res.status(200).json(allToDo);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res
                            .status(500)
                            .json({ message: "Unable to fetch all todo", error: error_4.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ToDoController.prototype.getById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoId, toDo, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        toDoId = req.params.toDoId;
                        if (!toDoId) {
                            res.status(400).json({ message: "Todo Id is required" });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getToDoById.execute(toDoId)];
                    case 1:
                        toDo = _a.sent();
                        res.status(200).json(toDo);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res
                            .status(500)
                            .json({ message: "Unable to fetch todo item", error: error_5.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ToDoController;
}());
exports.ToDoController = ToDoController;

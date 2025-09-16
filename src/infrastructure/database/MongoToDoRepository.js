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
exports.MongoToDoRepository = void 0;
var TodoModel_js_1 = require("./TodoModel.js");
/**
 * Here, you will use Mongoose or the native
 * MongoDB driver to write the actual database
 *  logic for the create, findAll, findById, etc.,
 *  methods defined in the interface. This class will
 * be responsible for connecting to MongoDB and
 * translating between your Todo domain entity
 * and the MongoDB document format.
 */
var MongoToDoRepository = /** @class */ (function () {
    function MongoToDoRepository() {
    }
    MongoToDoRepository.prototype.create = function (toDo) {
        return __awaiter(this, void 0, void 0, function () {
            var newMongoToDo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newMongoToDo = new TodoModel_js_1.default(toDo);
                        return [4 /*yield*/, newMongoToDo.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, newMongoToDo.toObject()];
                }
            });
        });
    };
    MongoToDoRepository.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchedToDoDocument;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TodoModel_js_1.default.find().exec()];
                    case 1:
                        searchedToDoDocument = _a.sent();
                        return [2 /*return*/, searchedToDoDocument.map(function (mongoDoc) { return mongoDoc.toObject(); })];
                }
            });
        });
    };
    MongoToDoRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var toDoDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TodoModel_js_1.default.findById(id)];
                    case 1:
                        toDoDoc = _a.sent();
                        return [2 /*return*/, toDoDoc ? toDoDoc.toObject() : null];
                }
            });
        });
    };
    MongoToDoRepository.prototype.update = function (id, todo) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedToDoDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TodoModel_js_1.default.findOneAndUpdate({ id: id }, todo, {
                            new: true,
                        }).exec()];
                    case 1:
                        updatedToDoDoc = _a.sent();
                        return [2 /*return*/, updatedToDoDoc ? updatedToDoDoc.toObject() : null];
                }
            });
        });
    };
    MongoToDoRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, TodoModel_js_1.default.deleteOne({ id: id }).exec()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MongoToDoRepository;
}());
exports.MongoToDoRepository = MongoToDoRepository;

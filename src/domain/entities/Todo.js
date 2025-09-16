"use strict";
/**
 *  It should contain the core properties of a
 * to-do item: id (string), title (string),
 * description (string), completed (boolean),
 * and createdAt (Date). This should be a plain
 * object with no decorators or framework-specific code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDo = void 0;
var ToDo = /** @class */ (function () {
    function ToDo(toDoId, title, description, completed, createdAt) {
        if (createdAt === void 0) { createdAt = new Date(); }
        this.toDoId = toDoId;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
    }
    return ToDo;
}());
exports.ToDo = ToDo;

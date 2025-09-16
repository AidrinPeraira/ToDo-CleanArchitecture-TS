/**
 *  It should contain the core properties of a
 * to-do item: id (string), title (string),
 * description (string), completed (boolean),
 * and createdAt (Date). This should be a plain
 * object with no decorators or framework-specific code.
 */
export class ToDo {
    toDoId;
    title;
    description;
    completed;
    createdAt;
    constructor(toDoId, title, description, completed, createdAt = new Date()) {
        this.toDoId = toDoId;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
    }
}
//# sourceMappingURL=Todo.js.map
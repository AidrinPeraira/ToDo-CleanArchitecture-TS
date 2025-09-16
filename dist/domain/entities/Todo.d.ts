/**
 *  It should contain the core properties of a
 * to-do item: id (string), title (string),
 * description (string), completed (boolean),
 * and createdAt (Date). This should be a plain
 * object with no decorators or framework-specific code.
 */
interface IToDo {
    toDoId: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
}
export declare class ToDo implements IToDo {
    toDoId: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    constructor(toDoId: string, title: string, description: string, completed: boolean, createdAt?: Date);
}
export {};
//# sourceMappingURL=Todo.d.ts.map
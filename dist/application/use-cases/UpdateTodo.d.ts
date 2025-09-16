import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
export declare class UpdateToDo {
    private readonly toDoRepository;
    constructor(toDoRepository: IToDoRepository);
    execute(toDoId: string, toDo: Partial<ToDo>): Promise<ToDo | null>;
}
//# sourceMappingURL=UpdateTodo.d.ts.map
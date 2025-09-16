import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
export declare class GetAllToDos {
    private readonly toDoRepository;
    constructor(toDoRepository: IToDoRepository);
    execute(): Promise<ToDo[]>;
}
//# sourceMappingURL=GetAllToDos.d.ts.map
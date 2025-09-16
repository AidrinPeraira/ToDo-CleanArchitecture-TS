import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
export declare class GetToDoById {
    private readonly toDoRepository;
    constructor(toDoRepository: IToDoRepository);
    execute(toDoId: string): Promise<ToDo | null>;
}
//# sourceMappingURL=GetToDoById.d.ts.map
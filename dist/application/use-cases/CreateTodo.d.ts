import { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
/**
 * The core idea of a Use Case is that it acts
 * like a "manager" for a single, specific task.
 * In this case, the task is "Create a To-Do".
 * The manager's job is to follow a set of steps
 * to get the task done. It doesn't do the heavy
 * lifting itself, but it directs others (like the
 * Repository) to do their jobs.
 */
export declare class CreateTodo {
    private readonly toDoRepository;
    constructor(toDoRepository: IToDoRepository);
    execute(title: string, description: string): Promise<ToDo>;
}
//# sourceMappingURL=CreateTodo.d.ts.map
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
export declare class DeleteToDo {
    private readonly toDoRepository;
    constructor(toDoRepository: IToDoRepository);
    execute(toDoId: string): Promise<void>;
}
//# sourceMappingURL=DeleteToDo.d.ts.map
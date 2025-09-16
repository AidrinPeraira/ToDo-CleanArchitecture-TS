import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";

export class UpdateToDo {
  constructor(private readonly toDoRepository: IToDoRepository) {}

  async execute(toDoId: string, toDo: Partial<ToDo>): Promise<ToDo | null> {
    const updated = await this.toDoRepository.update(toDoId, toDo);
    return updated;
  }
}

import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";

export class GetToDoById {
  constructor(private readonly toDoRepository: IToDoRepository) {}

  async execute(toDoId: string): Promise<ToDo | null> {
    const toDo = await this.toDoRepository.findById(toDoId);
    return toDo;
  }
}

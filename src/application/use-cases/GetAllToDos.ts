import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";

export class GetAllToDos {
  constructor(private readonly toDoRepository: IToDoRepository) {}
  async execute(): Promise<ToDo[]> {
    return await this.toDoRepository.findAll();
  }
}

import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";

export class DeleteToDo {
  constructor(private readonly toDoRepository: IToDoRepository) {}

  async execute(toDoId: string): Promise<void> {
    return await this.toDoRepository.delete(toDoId);
  }
}

import { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
import { v4 as uuidv4 } from "uuid";

/**
 * The core idea of a Use Case is that it acts
 * like a "manager" for a single, specific task.
 * In this case, the task is "Create a To-Do".
 * The manager's job is to follow a set of steps
 * to get the task done. It doesn't do the heavy
 * lifting itself, but it directs others (like the
 * Repository) to do their jobs.
 */
export class CreateTodo {
  constructor(private readonly toDoRepository: IToDoRepository) {}

  async execute(title: string, description: string): Promise<ToDo> {
    let uid = uuidv4();
    const newToDo = new ToDo(uid, title, description, false); //create to do object
    const createToDo = await this.toDoRepository.create(newToDo); // pass it to db create object got as parametrer in constructor
    return createToDo; // return the result
  }
}

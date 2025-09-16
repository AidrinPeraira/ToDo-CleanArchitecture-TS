/**
 * The Domain needs a way to talk about data persistence
 * without knowing how it's persisted.
 * We do this with an interface (a "port").
 *
 * This interface should define the methods needed for persistence,
 */

import { ToDo } from "../entities/Todo.js";

//this interface forces all actions needed for the todo
export interface IToDoRepository {
  create(toDo: ToDo): Promise<ToDo>;
  findAll(): Promise<ToDo[]>;
  findById(toDoId: string): Promise<ToDo | null>;
  update(toDoId: string, todo: Partial<ToDo>): Promise<ToDo | null>;
  delete(toDoId: string): Promise<void>;
}

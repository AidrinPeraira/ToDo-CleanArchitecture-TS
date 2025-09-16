/**
 *  It should contain the core properties of a
 * to-do item: id (string), title (string),
 * description (string), completed (boolean),
 * and createdAt (Date). This should be a plain
 * object with no decorators or framework-specific code.
 */

interface IToDo {
  toDoId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export class ToDo implements IToDo {
  constructor(
    public toDoId: string,
    public title: string,
    public description: string,
    public completed: boolean,
    public createdAt: Date = new Date()
  ) {}
}

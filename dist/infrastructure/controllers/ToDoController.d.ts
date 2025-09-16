import type { Request, Response } from "express";
import type { CreateTodo } from "../../application/use-cases/CreateTodo.js";
import type { DeleteToDo } from "../../application/use-cases/DeleteToDo.js";
import type { GetAllToDos } from "../../application/use-cases/GetAllToDos.js";
import type { GetToDoById } from "../../application/use-cases/GetToDoById.js";
import type { UpdateToDo } from "../../application/use-cases/UpdateTodo.js";
/**
 * The constructor of TodoController will
 *  use dependency injection to receive
 *  an instance of every single one of your
 *  use cases (CreateTodo, GetAllTodos, UpdateTodo, etc.).
 *
 * It will have methods like
 *  create(req, res),
 *  getAll(req, res), etc.,
 * for each endpoint.
 */
export declare class ToDoController {
    private readonly createToDo;
    private readonly getAllToDo;
    private readonly getToDoById;
    private readonly updateToDo;
    private readonly deleteToDo;
    constructor(createToDo: CreateTodo, getAllToDo: GetAllToDos, getToDoById: GetToDoById, updateToDo: UpdateToDo, deleteToDo: DeleteToDo);
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    getAll(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=ToDoController.d.ts.map
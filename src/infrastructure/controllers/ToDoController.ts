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
export class ToDoController {
  constructor(
    private readonly createToDo: CreateTodo,
    private readonly getAllToDo: GetAllToDos,
    private readonly getToDoById: GetToDoById,
    private readonly updateToDo: UpdateToDo,
    private readonly deleteToDo: DeleteToDo
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { title, description } = req.body;
      if (!title || !description) {
        res
          .status(400)
          .json({ message: "Title and description are required." });
        return;
      }

      const newToDo = await this.createToDo.execute(title, description);
      res.status(201).json(newToDo);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Error creating todo", error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { toDoId } = req.params;
      const toDoData = req.body;

      if (!toDoId) {
        res.status(400).json({ message: "To do id is required" });
        return;
      }

      const updatedToDo = await this.updateToDo.execute(toDoId, toDoData);
      if (updatedToDo) {
        res.status(200).json({ message: "Todo successfuly updated" });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "error updating todo", error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { toDoId } = req.params;

      if (!toDoId) {
        res.status(400).json({ message: "Todo Id id required" });
        return;
      }

      await this.deleteToDo.execute(toDoId);
      res.status(204).send();
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Failed to delete todo", error: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const allToDo = await this.getAllToDo.execute();
      res.status(200).json(allToDo);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Unable to fetch all todo", error: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { toDoId } = req.params;

      if (!toDoId) {
        res.status(400).json({ message: "Todo Id is required" });
        return;
      }

      const toDo = await this.getToDoById.execute(toDoId);

      res.status(200).json(toDo);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Unable to fetch todo item", error: error.message });
    }
  }
}

import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
import TodoModel from "./TodoModel.js";

/**
 * Here, you will use Mongoose or the native
 * MongoDB driver to write the actual database
 *  logic for the create, findAll, findById, etc.,
 *  methods defined in the interface. This class will
 * be responsible for connecting to MongoDB and
 * translating between your Todo domain entity
 * and the MongoDB document format.
 */
export class MongoToDoRepository implements IToDoRepository {
  async create(toDo: ToDo): Promise<ToDo> {
    const newMongoToDo = new TodoModel(toDo);
    await newMongoToDo.save();
    return newMongoToDo.toObject() as ToDo;
  }

  async findAll(): Promise<ToDo[]> {
    const searchedToDoDocument = await TodoModel.find().exec();
    return searchedToDoDocument.map((mongoDoc) => mongoDoc.toObject() as ToDo);
  }

  async findById(id: string): Promise<ToDo | null> {
    const toDoDoc = await TodoModel.findById(id);
    return toDoDoc ? (toDoDoc.toObject() as ToDo) : null;
  }

  async update(id: string, todo: Partial<ToDo>): Promise<ToDo | null> {
    const updatedToDoDoc = await TodoModel.findOneAndUpdate({ id: id }, todo, {
      new: true,
    }).exec();
    return updatedToDoDoc ? (updatedToDoDoc.toObject() as ToDo) : null;
  }

  async delete(id: string): Promise<void> {
    await TodoModel.deleteOne({ id: id }).exec();
  }
}

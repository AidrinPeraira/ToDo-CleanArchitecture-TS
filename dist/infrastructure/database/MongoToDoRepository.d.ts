import type { ToDo } from "../../domain/entities/Todo.js";
import type { IToDoRepository } from "../../domain/interfaces/IToDoRepository.js";
/**
 * Here, you will use Mongoose or the native
 * MongoDB driver to write the actual database
 *  logic for the create, findAll, findById, etc.,
 *  methods defined in the interface. This class will
 * be responsible for connecting to MongoDB and
 * translating between your Todo domain entity
 * and the MongoDB document format.
 */
export declare class MongoToDoRepository implements IToDoRepository {
    create(toDo: ToDo): Promise<ToDo>;
    findAll(): Promise<ToDo[]>;
    findById(id: string): Promise<ToDo | null>;
    update(id: string, todo: Partial<ToDo>): Promise<ToDo | null>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=MongoToDoRepository.d.ts.map
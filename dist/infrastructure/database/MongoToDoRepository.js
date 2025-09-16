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
export class MongoToDoRepository {
    async create(toDo) {
        const newMongoToDo = new TodoModel(toDo);
        await newMongoToDo.save();
        return newMongoToDo.toObject();
    }
    async findAll() {
        const searchedToDoDocument = await TodoModel.find().exec();
        return searchedToDoDocument.map((mongoDoc) => mongoDoc.toObject());
    }
    async findById(id) {
        const toDoDoc = await TodoModel.findById(id);
        return toDoDoc ? toDoDoc.toObject() : null;
    }
    async update(id, todo) {
        const updatedToDoDoc = await TodoModel.findOneAndUpdate({ id: id }, todo, {
            new: true,
        }).exec();
        return updatedToDoDoc ? updatedToDoDoc.toObject() : null;
    }
    async delete(id) {
        await TodoModel.deleteOne({ id: id }).exec();
    }
}
//# sourceMappingURL=MongoToDoRepository.js.map
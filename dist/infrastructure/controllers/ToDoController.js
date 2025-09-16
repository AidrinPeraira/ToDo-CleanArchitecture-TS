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
    createToDo;
    getAllToDo;
    getToDoById;
    updateToDo;
    deleteToDo;
    constructor(createToDo, getAllToDo, getToDoById, updateToDo, deleteToDo) {
        this.createToDo = createToDo;
        this.getAllToDo = getAllToDo;
        this.getToDoById = getToDoById;
        this.updateToDo = updateToDo;
        this.deleteToDo = deleteToDo;
    }
    async create(req, res) {
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
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Error creating todo", error: error.message });
        }
    }
    async update(req, res) {
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
            }
            else {
                res.status(404).json({ message: "Todo not found" });
            }
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "error updating todo", error: error.message });
        }
    }
    async delete(req, res) {
        try {
            const { toDoId } = req.params;
            if (!toDoId) {
                res.status(400).json({ message: "Todo Id id required" });
                return;
            }
            await this.deleteToDo.execute(toDoId);
            res.status(204).send();
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Failed to delete todo", error: error.message });
        }
    }
    async getAll(req, res) {
        try {
            const allToDo = await this.getAllToDo.execute();
            res.status(200).json(allToDo);
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Unable to fetch all todo", error: error.message });
        }
    }
    async getById(req, res) {
        try {
            const { toDoId } = req.params;
            if (!toDoId) {
                res.status(400).json({ message: "Todo Id is required" });
                return;
            }
            const toDo = await this.getToDoById.execute(toDoId);
            res.status(200).json(toDo);
        }
        catch (error) {
            res
                .status(500)
                .json({ message: "Unable to fetch todo item", error: error.message });
        }
    }
}
//# sourceMappingURL=ToDoController.js.map
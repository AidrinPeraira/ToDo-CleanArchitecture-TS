/**
 * This file, main.ts, is the Composition Root. Its only job is to:
 *      Initialize connections (like the database).
 *      Create instances of all your classes (Repositories, Use Cases, Controllers).
 *      Inject the dependencies into the classes that need them.
 *      Start the server.
 */
import express from "express";
import { MongoToDoRepository } from "./infrastructure/database/MongoToDoRepository.js";
import { CreateTodo } from "./application/use-cases/CreateTodo.js";
import { GetAllToDos } from "./application/use-cases/GetAllToDos.js";
import { GetToDoById } from "./application/use-cases/GetToDoById.js";
import { UpdateToDo } from "./application/use-cases/UpdateTodo.js";
import { DeleteToDo } from "./application/use-cases/DeleteToDo.js";
import { ToDoController } from "./infrastructure/controllers/ToDoController.js";
import { createToDoRouter } from "./infrastructure/routes/todoRoutes.js";
import connectDB from "./config/mongo.js";
async function main() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded());
    //connct db
    await connectDB();
    //initialise the repo
    const toDoRepository = new MongoToDoRepository();
    //give the repo to each usecase
    const createTodo_useCase = new CreateTodo(toDoRepository);
    const getAllToDos_useCase = new GetAllToDos(toDoRepository);
    const getToDoById_useCase = new GetToDoById(toDoRepository);
    const updateToDo_useCase = new UpdateToDo(toDoRepository);
    const deleteToDo_useCase = new DeleteToDo(toDoRepository);
    //create controller and give it all the usecases
    const toDoController = new ToDoController(createTodo_useCase, getAllToDos_useCase, getToDoById_useCase, updateToDo_useCase, deleteToDo_useCase);
    //create a router and give it the controller
    const toDoRouter = createToDoRouter(toDoController);
    //tell express to the the to do router(normal way)
    app.use("/api", toDoRouter);
    const port = 3000;
    app.listen(port, () => {
        console.log("Server running in port " + port);
    });
}
main().catch((error) => {
    console.error("Error starting server:", error);
});
//# sourceMappingURL=main.js.map
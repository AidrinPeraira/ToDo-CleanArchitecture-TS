export class UpdateToDo {
    toDoRepository;
    constructor(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    async execute(toDoId, toDo) {
        const updated = await this.toDoRepository.update(toDoId, toDo);
        return updated;
    }
}
//# sourceMappingURL=UpdateTodo.js.map
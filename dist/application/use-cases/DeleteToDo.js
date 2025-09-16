export class DeleteToDo {
    toDoRepository;
    constructor(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    async execute(toDoId) {
        return await this.toDoRepository.delete(toDoId);
    }
}
//# sourceMappingURL=DeleteToDo.js.map
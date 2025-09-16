export class GetToDoById {
    toDoRepository;
    constructor(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    async execute(toDoId) {
        const toDo = await this.toDoRepository.findById(toDoId);
        return toDo;
    }
}
//# sourceMappingURL=GetToDoById.js.map
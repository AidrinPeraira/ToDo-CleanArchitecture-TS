export class GetAllToDos {
    toDoRepository;
    constructor(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    async execute() {
        return await this.toDoRepository.findAll();
    }
}
//# sourceMappingURL=GetAllToDos.js.map
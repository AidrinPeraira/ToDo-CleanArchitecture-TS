import mongoose, { Schema, Document } from "mongoose";
const ToDoSchema = new Schema({
    // we don't add id here  to prevent clash
    toDoId: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
});
export default mongoose.model("ToDo", ToDoSchema); //reate a Mongoose model named ToDo, using ToDoSchema, where documents conform to IToDoDocument, and export it for use elsewhere
//# sourceMappingURL=TodoModel.js.map
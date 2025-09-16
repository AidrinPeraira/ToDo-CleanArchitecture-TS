"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ToDoSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.default.model("ToDo", ToDoSchema); //reate a Mongoose model named ToDo, using ToDoSchema, where documents conform to IToDoDocument, and export it for use elsewhere

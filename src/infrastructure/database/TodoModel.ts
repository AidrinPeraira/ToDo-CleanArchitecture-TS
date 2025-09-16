import mongoose, { Schema, Document } from "mongoose";
import type { ToDo } from "../../domain/entities/Todo.js";

//we'll  combine mongodb document shape and our todo shape

interface IToDoDocument extends Document {
  toDoId: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
} //this is not multiple inheritence it is multiple extendion of interfaces a.k.a composition

const ToDoSchema: Schema = new Schema({
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

export default mongoose.model<IToDoDocument>("ToDo", ToDoSchema); //reate a Mongoose model named ToDo, using ToDoSchema, where documents conform to IToDoDocument, and export it for use elsewhere

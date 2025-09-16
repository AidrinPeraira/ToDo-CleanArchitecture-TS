import mongoose, { Document } from "mongoose";
import type { ToDo } from "../../domain/entities/Todo.js";
interface IToDoDocument extends ToDo, Document {
}
declare const _default: mongoose.Model<IToDoDocument, {}, {}, {}, mongoose.Document<unknown, {}, IToDoDocument, {}, {}> & IToDoDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=TodoModel.d.ts.map
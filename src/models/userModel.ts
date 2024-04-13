import {Document, model, Schema} from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    socketId: string;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
        required: true,
    },
});

const User = model<IUser>("User", userSchema);
export default User;
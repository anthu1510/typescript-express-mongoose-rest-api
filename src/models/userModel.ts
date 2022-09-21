import { Schema, model } from "mongoose";
import { User } from "../interfaces/User";

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    status: String,
  },
  {
    versionKey: false,
  }
);

export default model<User>("User", userSchema);

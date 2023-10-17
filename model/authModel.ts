import mongoose from "mongoose";

interface iStudent {
  name?: string;
  password?: string;
  email?: string;
  task?: {}[];
}

interface iStudentData extends iStudent, mongoose.Document {}

const authModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    task: [
      {
        type: mongoose.Types.ObjectId,
        ref: "tasks",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<iStudent>("auths", authModel);

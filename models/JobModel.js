import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../ultils/constants.js";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      trim: true,
      required: [true, "Please Provide a Company Name"],
    },
    position: {
      type: String,
      required: [true, "Please Provide a Job Position"],
    },
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType:{
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
    createdBy:{
      type:mongoose.Types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);

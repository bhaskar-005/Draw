import mongoose, { Model, model, models } from "mongoose";
import { Schema } from "mongoose";

const projectSchema = new Schema({
    fileName:{
        type:String,
        required:true
      },
      whiteboard:{
        type:String,
      },
      document:{
        type: String,
      },
      createdBy:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"user"
      }
})

export const Project = models?.project || mongoose.model('Project',projectSchema);
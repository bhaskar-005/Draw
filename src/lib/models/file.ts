import mongoose, { models } from "mongoose";
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

const file = models?.file || mongoose.model('file',projectSchema);
export default file;
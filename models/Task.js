import mongoose from "mongoose";
const {Schema} = mongoose ;
//model or we call it the client schema ==structure
const ClientSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      IDClient : {
        type: String,
        required:true,
      }/*,
      avancement: {
        type: Number,
        required: true,
      },*/,
    });
const Task = mongoose.model("task", ClientSchema);
export default Task ; 
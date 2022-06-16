import mongoose from "mongoose";
const {Schema} = mongoose ;
//model or we call it the assistant schema ==structure
const ClientSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type : Number,
        required: true,
      },
      poste: {
        type : String,
        required: true,
      },
    });
const Assistant = mongoose.model("assistant", ClientSchema);
export default Assistant ; 
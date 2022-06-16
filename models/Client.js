import mongoose from "mongoose";


const {Schema} = mongoose ;
//model or we call it the client schema ==structure
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
      adress : String ,
      password: {
        type : String,
        required: true,
      },
      projet :{
        type: String,
        required: true,
      },
      avancement :{
        type: Number,
        required: true,
      },
      country :{
        type: String,
        required: false,
      },
    });


    // ClientSchema.methods.isPasswordMatch = function (
    //   plainPassword,
    //   hashed,
    //   callback
    // ){
    //   bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
    //     if (err) {
    //       return callback(err);
    //     }
    //     callback(null, isMatch);
    //   });
    // };

    
const Client = mongoose.model("client", ClientSchema);
export default Client ; 
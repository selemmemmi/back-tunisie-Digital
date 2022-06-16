import mongoose from 'mongoose'; 


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database is connected');
    }catch (err){
        console.log("database is not connected",err)
    }
} 

export default connectDB;

// try and catch or // .then().catch()=> promisses
// async await function i should wait to get the result
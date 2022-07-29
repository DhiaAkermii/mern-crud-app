import mongoose from "mongoose";

const connectDB = async () => {
  const urlDB = `mongodb+srv://mern:mern@cluster0.8jiytnd.mongodb.net/mern-test?retryWrites=true&w=majority`
  try {
    return await mongoose.connect(urlDB);
  } catch (error) {
    console.error(`Database Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
 
// Connecting to database

 

import mongoose from "mongoose";

// Function to establish database connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://suravajhalas:AznCxGcU5miJ9bI3@cluster0.rtsu6gx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Established connection with mongoDB - TEST ");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

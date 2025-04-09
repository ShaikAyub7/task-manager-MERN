import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./Database/db.js";
import taskRoute from "./routes/taskRoutes.js";
import userRoute from "./routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/task", taskRoute);
app.use("/", userRoute);

const start = async () => {
  try {
    console.log("start");
    await connect(process.env.MONGO_URL);
    app.listen(5000, () => {
      console.log(`server is listing on http://localhost:5000`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

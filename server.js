import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRoute.js";
import usersRouter from "./routes/userRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(express.static("./Client"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));

import express from "express";
import config from "./config";
import mongoose from "mongoose";
import routers from "./routes";
import cors from "cors";

const app = express();
const PORT = config.port;

app.use(cors());
app.use(express.json());

app.use(routers);

const startServer = async () => {
  try {
    await mongoose.connect(config.dbUri);
    app.listen(PORT, () => {
      console.log(`Сервер запущен на ${PORT} порту`);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

startServer();

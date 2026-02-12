import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DBPATH || "mongodb://localhost:27017/expressdb",
};

export default config;

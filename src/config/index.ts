import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  mongo_api: process.env.DATABASE_API,
};

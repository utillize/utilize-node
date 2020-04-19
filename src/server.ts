import 'reflect-metadata';
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import errorHandlers from "./middleware/errorHandler"
import routes from "./services";



if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '/home/resparx/Documents/Utilize/.env.dev' })
} else {
  dotenv.config({ path: '/home/resparx/Documents/Utilize/.env' });
}

// process.on("uncaughtException", e => {
//   console.log(e);
//   process.exit(1);
// });
// process.on("unhandledRejection", e => {
//   console.log(e);
//   process.exit(1);
// });

const router = express();

applyRoutes(routes, router);
applyMiddleware(middleware, router);
applyMiddleware(errorHandlers, router);

const { PORT = 8000 } = process.env;
const server = http.createServer(router);


server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
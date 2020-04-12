import http from 'http';
import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from "./services";

const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);

const {PORT = 8000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
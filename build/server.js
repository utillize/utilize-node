"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const router = express_1.default();
const { PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map
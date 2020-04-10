"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Decorators/Controller");
const Get_1 = require("./Decorators/Get");
let UserController = class UserController {
    index(req, res) {
        return res.send('User overview');
    }
    details(req, res) {
        return res.send(`You are looking at the profile of ${req.params.name}`);
    }
};
__decorate([
    Get_1.Get('/')
], UserController.prototype, "index", null);
__decorate([
    Get_1.Get('/:name')
], UserController.prototype, "details", null);
UserController = __decorate([
    Controller_1.Controller('/user')
], UserController);
exports.default = UserController;
//# sourceMappingURL=UserController.js.map
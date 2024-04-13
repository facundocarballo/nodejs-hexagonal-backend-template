"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
class UserRouter {
    getUserController;
    createUserController;
    router = (0, express_1.Router)();
    constructor(getUserController, createUserController) {
        this.getUserController = getUserController;
        this.createUserController = createUserController;
        this.router.get("/:id", (req, res, next) => this.getUserController.execute(req, res, next));
        this.router.post("/", (req, res, next) => this.createUserController.execute(req, res, next));
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.js.map
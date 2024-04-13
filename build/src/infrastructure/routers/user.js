"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
class UserRouter {
    getUserController;
    router = (0, express_1.Router)();
    constructor(getUserController) {
        this.getUserController = getUserController;
        this.router.get("/:id", this.getUserController.execute);
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.js.map
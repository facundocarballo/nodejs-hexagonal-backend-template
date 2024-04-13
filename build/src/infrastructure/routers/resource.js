"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRouter = void 0;
const express_1 = require("express");
class ResourceRouter {
    getResourceController;
    router = (0, express_1.Router)();
    constructor(getResourceController) {
        this.getResourceController = getResourceController;
        this.router.get("/", getResourceController.execute);
    }
}
exports.ResourceRouter = ResourceRouter;
//# sourceMappingURL=resource.js.map
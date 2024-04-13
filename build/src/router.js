"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouter = void 0;
const get_resource_1 = require("./infrastructure/controllers/get-resource");
const resource_1 = require("./infrastructure/routers/resource");
function getRouter() {
    const getResourceController = new get_resource_1.GetResourceController();
    const resourceRouter = new resource_1.ResourceRouter(getResourceController);
    return resourceRouter.router;
}
exports.getRouter = getRouter;
//# sourceMappingURL=router.js.map
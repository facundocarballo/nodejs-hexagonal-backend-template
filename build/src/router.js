"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouter = void 0;
const get_user_1 = require("./app/use-cases/get-user/get-user");
const get_resource_1 = require("./infrastructure/controllers/get-resource");
const user_local_repository_1 = require("./infrastructure/repositories/user-local-repository");
const user_1 = require("./infrastructure/routes/user");
function getRouter() {
    // Repositories
    const userLocalRepository = new user_local_repository_1.UserLocalRepository();
    // Use Cases
    const getUserUseCase = new get_user_1.GetUserUseCase(userLocalRepository);
    // Controllers
    const getUserController = new get_resource_1.GetUserController(getUserUseCase);
    return new user_1.UserRouter(getUserController).router;
}
exports.getRouter = getRouter;
//# sourceMappingURL=router.js.map
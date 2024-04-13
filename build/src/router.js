"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRouter = void 0;
const create_user_1 = require("./app/use-cases/create-user/create-user");
const get_user_1 = require("./app/use-cases/get-user/get-user");
const create_user_2 = require("./infrastructure/controllers/create-user");
const get_user_2 = require("./infrastructure/controllers/get-user");
const user_local_repository_1 = require("./infrastructure/repositories/user-local-repository");
const user_1 = require("./infrastructure/routes/user");
function getRouter() {
    // Repositories
    const userLocalRepository = new user_local_repository_1.UserLocalRepository();
    // Use Cases
    const getUserUseCase = new get_user_1.GetUserUseCase(userLocalRepository);
    const createUserUseCase = new create_user_1.CreateUserUseCase(userLocalRepository);
    // Controllers
    const getUserController = new get_user_2.GetUserController(getUserUseCase);
    const createUserController = new create_user_2.CreateUserController(createUserUseCase);
    return new user_1.UserRouter(getUserController, createUserController).router;
}
exports.getRouter = getRouter;
//# sourceMappingURL=router.js.map
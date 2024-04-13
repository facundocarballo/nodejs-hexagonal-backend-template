"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
const user_not_found_1 = require("../../app/exceptions/user-not-found");
const get_user_1 = require("../../app/schemas/get-user");
const get_user_input_1 = require("../../app/use-cases/get-user/get-user-input");
class GetUserController {
    getUserUseCase;
    constructor(getUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }
    async execute(req, res, next) {
        try {
            const { id } = get_user_1.GetUserRequest.parse(req.params);
            const input = new get_user_input_1.GetUserUseCaseInput(id);
            const user = await this.getUserUseCase.execute(input);
            res.status(200).send(user);
        }
        catch (error) {
            if (error instanceof user_not_found_1.UserNotFound) {
                res.status(404).send({ message: error.message });
                return;
            }
            console.error("Unexpected error. ", error);
        }
    }
}
exports.GetUserController = GetUserController;
//# sourceMappingURL=get-resource.js.map
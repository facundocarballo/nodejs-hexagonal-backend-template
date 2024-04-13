"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const user_cant_create_1 = require("../../app/exceptions/user-cant-create");
const create_user_1 = require("../../app/schemas/create-user");
const create_user_input_1 = require("../../app/use-cases/create-user/create-user-input");
class CreateUserController {
    createUserUseCase;
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async execute(req, res, next) {
        try {
            const { username, password } = create_user_1.CreateUserRequest.parse(req.body);
            const input = new create_user_input_1.CreateUserUseCaseInput(username, password);
            const user = await this.createUserUseCase.execute(input);
            res.status(201).send(user);
        }
        catch (error) {
            if (error instanceof user_cant_create_1.UserCantCreate) {
                res.status(300).send({ message: "User cannot be created." });
                return;
            }
            res.status(300).send({ message: "Unexpected error." });
        }
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=create-user.js.map
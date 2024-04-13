"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCase = void 0;
const user_not_found_1 = require("../../exceptions/user-not-found");
class GetUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(input) {
        const user = await this.userRepository.findById(input.id);
        if (!user) {
            throw new user_not_found_1.UserNotFound(input.id);
        }
        return user;
    }
}
exports.GetUserUseCase = GetUserUseCase;
//# sourceMappingURL=get-user.js.map
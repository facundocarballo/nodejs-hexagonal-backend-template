"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLocalRepository = void 0;
const user_1 = require("../../domain/user");
class UserLocalRepository {
    DEFAULT_USERNAME = "facundocarballo";
    DEFAULT_PASSWORD = "123456789";
    DEFAULT_ID = "1234";
    async findById(id) {
        if (id === this.DEFAULT_ID) {
            return new user_1.User(this.DEFAULT_USERNAME, this.DEFAULT_PASSWORD, this.DEFAULT_ID);
        }
        return null;
    }
}
exports.UserLocalRepository = UserLocalRepository;
//# sourceMappingURL=user-local-repository.js.map
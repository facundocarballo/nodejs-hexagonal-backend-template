"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFound = void 0;
class UserNotFound extends Error {
    constructor(id) {
        super(`User (${id}) not found`);
    }
}
exports.UserNotFound = UserNotFound;
//# sourceMappingURL=user-not-found.js.map
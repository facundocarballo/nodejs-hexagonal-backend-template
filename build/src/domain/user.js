"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    username;
    password;
    id;
    constructor(username, password, id) {
        this.username = username;
        this.password = password;
        if (!id) {
            this.id = (0, crypto_1.randomUUID)();
        }
        else {
            this.id = id;
        }
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map
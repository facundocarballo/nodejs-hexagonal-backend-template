"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequest = void 0;
const zod_1 = __importDefault(require("zod"));
exports.CreateUserRequest = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string().min(6),
});
//# sourceMappingURL=create-user.js.map
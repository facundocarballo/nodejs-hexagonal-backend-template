"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResourceController = void 0;
class GetResourceController {
    async execute(req, res, next) {
        res.status(200).send({ message: "Hello World!" });
    }
}
exports.GetResourceController = GetResourceController;
//# sourceMappingURL=get-resource.js.map
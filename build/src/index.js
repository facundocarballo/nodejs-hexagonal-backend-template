"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _bootstrap_1 = require("./bootstrap");
async function init() {
    const app = (0, _bootstrap_1.bootstrap)();
    app.listen(8080, () => {
        console.log("Server listening on port 8080.");
    });
}
init();
//# sourceMappingURL=index.js.map
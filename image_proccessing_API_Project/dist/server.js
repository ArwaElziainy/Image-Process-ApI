"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const errorhandler_middleware_1 = __importDefault(require("./middlewares/errorhandler.middleware"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.static("images"));
app.use(express_1.default.json({ type: 'application/json' }));
app.use("/api", index_1.default);
const add = (x, y) => x + y;
exports.add = add;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
app.use(errorhandler_middleware_1.default);
exports.default = app;

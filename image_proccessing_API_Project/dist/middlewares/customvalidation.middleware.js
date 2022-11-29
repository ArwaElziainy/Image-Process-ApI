"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const validationMiddleware = (req, res, next) => {
    const { filename, width, height } = req.query;
    console.log(filename, width, height);
    console.log('hello from middleware 1');
    next();
};
exports.validationMiddleware = validationMiddleware;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customtetsingcontroller_1 = require("../controller/customtetsingcontroller");
const customvalidation_middleware_1 = require("../middlewares/customvalidation.middleware");
const router = express_1.default.Router();
router.get("/image", customvalidation_middleware_1.validationMiddleware, customtetsingcontroller_1.resizingImage);
exports.default = router;

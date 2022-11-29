"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizingImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const server_1 = __importDefault(require("../server"));
const resizingImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    const filename = query.filename || 'fjord.jpeg';
    const width = +query.width || 100;
    const height = +query.height || 100;
    const imagePathFull = path_1.default.resolve(__dirname, `../../assets/images/full/${filename}.jpeg`);
    const imagePathDist = path_1.default.resolve(__dirname, `../../assets/images/dist/${width}x${height}:${filename}.jpeg`);
    const result = yield (0, sharp_1.default)(imagePathFull).resize({ width, height }).toFile(imagePathDist);
    console.log("Hello from middleware 2");
    const { engine } = require('express-handlebars');
    server_1.default.engine('.hbs', engine({ extname: '.hbs', defaultLayout: false, layoutsDir: 'views' }));
    server_1.default.set("view engine", "hbs");
    server_1.default.get('/images', (req, res) => {
        const imageList = [];
        imageList.push({ src: `../../assets/images/full/${filename}.jpeg ` });
        res.render('images', imageList);
    });
    res.send(result); //res.send(html path);
});
exports.resizingImage = resizingImage;

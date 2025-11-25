"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouters = void 0;
const express_1 = __importDefault(require("express"));
const messageRouters = express_1.default.Router();
exports.messageRouters = messageRouters;
messageRouters.get("/send", (req, res) => {
    res.send("send message endpoint");
});

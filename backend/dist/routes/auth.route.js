"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouters = void 0;
const express_1 = __importDefault(require("express"));
const authRouters = express_1.default.Router();
exports.authRouters = authRouters;
authRouters.get("/signup", (req, res) => {
    res.send("signup endpoint");
});
authRouters.get("/login", (req, res) => {
    res.send("login endpoint");
});
authRouters.get("/logout", (req, res) => {
    res.send("logout endpoint");
});

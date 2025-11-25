import express from "express";
import { signup } from "../controllers/auth.controller";

const authRouters = express.Router();


authRouters.post("/signup", signup)

authRouters.get("/login", (req, res) => {
    res.send("login endpoint");
})

authRouters.get("/logout", (req, res) => {
    res.send("logout endpoint");
})

export { authRouters };
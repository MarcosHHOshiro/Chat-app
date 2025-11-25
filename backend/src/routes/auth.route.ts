import express from "express";

const authRouters = express.Router();


authRouters.get("/signup", (req, res) => {
    res.send("signup endpoint");
})

authRouters.get("/login", (req, res) => {
    res.send("login endpoint");
})

authRouters.get("/logout", (req, res) => {
    res.send("logout endpoint");
})

export { authRouters };
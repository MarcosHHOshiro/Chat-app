import express from "express";

const messageRouters = express.Router();

messageRouters.get("/send", (req, res) => {
    res.send("send message endpoint");
})

export { messageRouters }
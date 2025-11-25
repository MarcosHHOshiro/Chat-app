import express from "express";
import dotenv from "dotenv";
import path from "path";
import { authRouters } from "./routes/auth.route";
import { messageRouters } from "./routes/message.route";
import { connectDB } from "./lib/db";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// NUNCA redefina __dirname em CommonJS/TS → o Node cria automaticamente no build
// basta usar __dirname direto

app.use("/api/auth", authRouters);
app.use("/api/messages", messageRouters);

// Serve o frontend em produção
if (process.env.NODE_ENV === "production") {
    const frontendDist = path.join(__dirname, "..", "..", "frontend", "dist");

    app.use(express.static(frontendDist));

    app.get(/.*/, (_, res) => {
        res.sendFile(path.join(frontendDist, "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)

    connectDB()
});

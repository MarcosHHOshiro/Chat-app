"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const auth_route_1 = require("./routes/auth.route");
const message_route_1 = require("./routes/message.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// NUNCA redefina __dirname em CommonJS/TS → o Node cria automaticamente no build
// basta usar __dirname direto
app.use("/api/auth", auth_route_1.authRouters);
app.use("/api/messages", message_route_1.messageRouters);
// Serve o frontend em produção
if (process.env.NODE_ENV === "production") {
    const frontendDist = path_1.default.join(__dirname, "..", "..", "frontend", "dist");
    app.use(express_1.default.static(frontendDist));
    app.get(/.*/, (req, res) => {
        res.sendFile(path_1.default.join(frontendDist, "index.html"));
    });
}
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

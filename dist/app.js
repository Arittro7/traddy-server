"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFoundRoute_1 = require("./middleware/notFoundRoute");
const dotenv_1 = __importDefault(require("dotenv"));
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const payments_controller_1 = require("./app/modules/payments/payments.controller");
const env_1 = require("./app/config/env");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.post("/webhook", express_1.default.raw({ type: "application/json" }), payments_controller_1.PaymentController.handleStripeWebhookEvent);
const corsOptions = {
    origin: [
        env_1.envVars.FRONTEND_URL,
        "http://localhost:3000",
        /\.vercel\.app$/,
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.set("trust proxy", 1);
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send(`Traddy - Travel Buddy Server Is Running`);
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFoundRoute_1.notFoundRoute);
exports.default = app;

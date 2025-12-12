import express, { Request, Response } from "express";
import routes from "./routes"; 
import cors from "cors";
import cookieParser from "cookie-parser";
import { notFoundRoute } from "./middleware/notFoundRoute";
import dotenv from "dotenv";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { PaymentController } from "./app/modules/payments/payments.controller";
import { envVars } from "./app/config/env";

// Load env vars
dotenv.config();

const app = express();
app.use(cookieParser());
app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  PaymentController.handleStripeWebhookEvent
);

// CORS configuration
const corsOptions = {
  origin: [
    envVars.FRONTEND_URL,
    "http://localhost:3000",
    /\.vercel\.app$/,
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// Landing page with Local Guide Platform API info
app.get("/", (req: Request, res: Response) => {
  res.send(`Traddy - Travel Buddy Server Is Running`);
});

app.use(globalErrorHandler);
app.use(notFoundRoute);

export default app;
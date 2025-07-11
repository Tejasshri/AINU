import express from "express";
import cors from "cors";
import patientRouter from "./routes/patient.routes.js";

const app = express();

app.use(
  cors({
    origin: ["https://ainu.onrender.com"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", patientRouter);

export default app;

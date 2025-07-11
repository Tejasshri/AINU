import { Router } from "express";
import { createPatient } from "../controllers/Patient.controllers.js";

const patientRouter = Router();

patientRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

patientRouter.post("/form-submit", createPatient);

export default patientRouter;

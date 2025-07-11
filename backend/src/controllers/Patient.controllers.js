import Patient from "../models/patient.models.js";

export const createPatient = async (req, res) => {
  try {
    console.log(req.body, "body")
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


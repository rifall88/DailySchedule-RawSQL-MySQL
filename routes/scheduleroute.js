import express from "express";
import {
  tampil,
  tambah,
  update,
  hapus,
} from "../controllers/schedulecontroller.js";
const router = express.Router();

import autmiddleware from "../middlewares/authmiddleware.js";

router.get("/schedules", autmiddleware, tampil);
router.post("/schedules", autmiddleware, tambah);
router.put("/schedules/:id", autmiddleware, update);
router.delete("/schedules/:id", autmiddleware, hapus);

export default router;

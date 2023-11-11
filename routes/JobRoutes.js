import { Router } from "express";
import {
  createJob,
  getAllJobs,
  getSingleJob,
  deleteJob,
  updateJob,
  showStats
} from "../controllers/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middlewares/validationMiddleware.js";
import { checkForTestUser } from "../middlewares/authMiddleware.js";
const router = Router();

router.post("/", checkForTestUser, validateJobInput, createJob);
router.get("/", getAllJobs);
router.get("/stats",showStats);
router.get("/:id", validateIdParam, getSingleJob);
router.delete("/:id",checkForTestUser, validateIdParam, deleteJob);
router.patch("/:id",checkForTestUser, validateJobInput, validateIdParam, updateJob);

export default router;

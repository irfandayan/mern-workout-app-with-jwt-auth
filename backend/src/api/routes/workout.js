const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const verifyId = require("../middlewares/verifyId");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET single workout
router.get("/:id", verifyId, getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", verifyId, deleteWorkout);

// Update a workout
router.patch("/:id", verifyId, updateWorkout);

module.exports = router;

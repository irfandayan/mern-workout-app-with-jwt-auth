const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const verifyId = require("../middlewares/verifyId");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

// Note: This could be an alternate way of adding the middleware. This is like the similar way of using the verifyId middleware directly below but
// by this way, it has to pass through all the requests.
// require auth for all workout routes
router.use(requireAuth);

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

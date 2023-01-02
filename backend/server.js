const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");

// get environment configure variables
dotenv.config();
// get port
const PORT = process.env.PORT;

// express app
const app = express();

// middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

// welcome test route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the app" });
// });

// workout routes
app.use("/api/workouts", workoutRoutes);
// user routes
app.use("/api/user", userRoutes);

// mongoose
mongoose.set("strictQuery", true);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`connected to db & listening on port`, PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

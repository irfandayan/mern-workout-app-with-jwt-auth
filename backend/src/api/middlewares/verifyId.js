const mongoose = require("mongoose");

const verifyId = (req, res, next) => {
  // get id from parameter
  const { id } = req.params;

  // if id is not provided
  // if (!id) return res.status(401).send("Please provide the workout id");

  // check if the id is of type of mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid workout id" });
  }
  next();
};

module.exports = verifyId;

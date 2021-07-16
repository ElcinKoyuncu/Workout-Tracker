const mongoose = require("mongoose");


const WorkoutSchema = new mongoose.Schema({

  day: {
      type: Date, 
      default: Date.now
    },
  exercises: [
    {
    type: {
      type: String,
      trim:true,
      required: "Please enter exercise type"
    },
    name: {
      type: String,
      trim:true,
      required: "Please enter exercise name"
    },
    duration: {
      type: Number,
      required: "Please enter exercise duration"
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
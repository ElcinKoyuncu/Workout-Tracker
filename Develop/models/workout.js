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
      required: "Enter the type of workout"
    },
    name: {
      type: String,
      trim:true,
      required: "Enter an exercise name"
    },
    duration: {
      type: Number,
      required: "Enter a duration for the workout"
    },
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
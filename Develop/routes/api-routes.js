const Workout  = require ("../models/workoutInfo.js");
const router = require("express").Router();


router.get("/api/exercise", (req, res) => {
	Workout.find()
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.get("/api/exercise/range", (req, res) => {
	Workout.find()
		.then(range => {
			res.json(range);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.post("/api/exercise", ({ body }, res) => {
	Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.put("/api/exercise/:id", (req, res) => {
    Workout.findByIdAndUpdate(params.id , { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

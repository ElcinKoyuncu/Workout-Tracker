const Workout  = require ("../models/exercises");
const router = require("express").Router();


router.get("/api/workouts", (req, res) => {
	Workout.find()
		.then(data => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get("/api/workouts/range", ({}, res) => {
	Workout.find()
		.then(data => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/api/workouts", ({body}, res) => {
	Workout.create(body)
		.then(datat => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({_id:req.params.id} , { $push: { exercises:body } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;

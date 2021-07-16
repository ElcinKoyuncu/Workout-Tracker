const Workout  = require ("../models/exercises");
const router = require("express").Router();


router.get("/api/workouts", (req, res) => {
	Workout.find()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/api/workouts", ({ body }, res) => {
	Workout.create(body)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});


router.get("/api/workouts/range", (req, res) => {
	Workout.find()
		.then(data => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});





router.put("/api/workouts/:id", ({body,params}, res) => {
    Workout.findByIdAndUpdate(params.id , { $push: { exercises:body } })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;

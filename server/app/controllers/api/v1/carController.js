const carService = require("../../../services/carService");

module.exports = {
    getAll(req, res) {
        carService
            .getAll()
            .then((cars) => {
                res.status(200).json({ cars });
                res.render("../../../views/cars", { cars });
            })
            .catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message,
                });
            })
    },

    create(req, res) {
        carService
            .create(req.body)
            .then((car) => {
                res.status(201).json({
                    status: "CREATED",
                    car,
                });
            })
            .catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message,
                });
            });
    },

    getById(req, res) {
        carService
            .getById(req.params.id)
            .then(car => {
                res.status(200).json(car);
            })
            .catch(err => {
                res.send(err);
            });
    },

    update(req, res) {
        carService
            .update(req.params.id, req.body)
            .then((car) => {
                res.status(200).json({
                    status: "OK",
                    car: req.body
                });
            })
            .catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message,
                });
            })
    },
    
    delete(req, res) {
        carService
            .delete(req.params.id)
            .then((car) => {
                res.status(200).json({
                    status: "OK",
                    message: "Car successfully deleted"
                });
            })
            .catch((err) => {
                res.status(400).json({
                    status: "FAIL",
                    message: err.message,
                });
            })
    },

}
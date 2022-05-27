const { Car } = require("../models");

module.exports = {
    getAll() {
        return Car.findAll()
    },

    create(data) {
        return Car.create(data);
    },

    getById(id) {
        return Car.findByPk(id);
    },

    update(id, data) {
        return Car.update(data, {
            where: { id }
        })
    },

    delete(id) {
        return Car.destroy({
            where: { id }
        })
    }

}
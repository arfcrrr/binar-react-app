const carRepository = require("../repositories/carRepository");

module.exports = {
    async create(data) {
        return carRepository.create(data);
    },

    async getAll() {
        return carRepository.getAll();
    },

    async getById(id) {
        return carRepository.getById(id);
    },

    async update(id, data) {
        return carRepository.update(id, data);
    },

    async delete(id) {
        return carRepository.delete(id);
    },

}
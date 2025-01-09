const { CityRepository } = require('../repository/city-repository.js');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }

    async getCity(cityId) {  // Fixed duplicate function name
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer:", error);
            throw error;
        }
    }
}

module.exports = CityService;  // Corrected export

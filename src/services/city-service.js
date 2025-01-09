const {CityRepository} = require('../repository/city-repository.js')


class CityService{
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer")
        }
    }
    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId);
        } catch (error) {
            console.log("Something went wrong in service layer")
        }
    }
    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer")
        }
    }
    async createCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer")
        }
    }

}

module.exports = CityService;
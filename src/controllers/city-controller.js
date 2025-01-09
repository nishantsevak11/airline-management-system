const {CityService} = require('../services/city-service.js');

const cityService = new CityService();



const create = async(req,res) =>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            err: erro
        });
    }
}
const destroy = async(req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete a city',
            err: erro
        });
    }
}
const update = async(req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id , req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to upadate a city',
            err: erro
        });
    }
}
const get = async(req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data:response,
            success:true,
            message:'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch a city',
            err: erro
        });
    }
}

module.exports =  {
   create,
   destroy,
   update,
   get
}
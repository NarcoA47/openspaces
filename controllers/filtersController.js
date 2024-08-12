import Filters from "../models/filtersModel.js";

export const getFiltersController = async (req, res) => {
    try {

        const filters = await Filters.find()
        res.status(200).send(filters)
        
    }catch (error) {
        console.log(error);
    }
}
export const addFiltersController = async (req, res) => {
    try {

        const filters = await Filters.find()
        res.status(200).send(filters)

    }catch (error) {
        console.log(error);
    }
}
import Listing from '../models/listingModel.js';

export const getListingController = async (req, res) => {
    try {

        const listings = await Listing.find()
        res.status(200).send(listings)

    }catch (error) {
        console.log(error);
    }
}
export const addListingController = async (req, res) => {
    try {

        const newListing = new Listing(req.body)
        await newListing.save();
        res.status(200).send("Listing added successfully")

    }catch (error) {
        console.log(error);
    }
}
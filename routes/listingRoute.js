import express from 'express'
import {getListingController, addListingController} from "../controllers/listingController.js"

const listingRouter = express.Router();

listingRouter.get("/getListing", getListingController);


listingRouter.post("/addListing", addListingController);

export default listingRouter;
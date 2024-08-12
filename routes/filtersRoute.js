import express from 'express'
import {getFiltersController} from '../controllers/filtersController.js'


const filtersRouter = express.Router();

filtersRouter.get("/getFliter", getFiltersController);


export default filtersRouter;
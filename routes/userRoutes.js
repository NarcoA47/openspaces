import express from 'express'
import {loginController, registerController} from '../controllers/userController.js'


const userRouter = express.Router();

userRouter.post("/Login", loginController);
userRouter.post("/CreateAccount", registerController);

export default userRouter;
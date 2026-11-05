import {Router} from "express";
import * as authController from "../controllers/auth.controller.js"
import { tokenValidated } from "../middlewares/auth.middleware.js";

const router = Router()

router.get("/", authController.publicInfo)
router.get("/login", authController.login)

router.use("/private", tokenValidated, authController.privateInfo)

export default router
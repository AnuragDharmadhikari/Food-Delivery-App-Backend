import express from "express";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City Paramater must be a valid string"),
  RestaurantController.searchRestaurant
);


export default router;
import express from "express";
import { getkey,paymentVerification ,processpayment } from "../controller/productcontroller.js";
const router = express.Router();

router.post("/payment/process", processpayment);
router.route("/getkey").get(getkey);
router.route("/paymentVerification").post(paymentVerification);
export default router;
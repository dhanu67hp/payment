import express from "express";
import { getkey,paymentVerification ,processpayment } from "../controller/productcontroller.js";
const router = express.Router();

router.post("/payment/process", processpayment);
router.get("/getkey", getkey);
router.post("/paymentVerification", paymentVerification);
export default router;
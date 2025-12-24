import express from "express";
import { getCurrencyRate } from "../services/currencyService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { base = "USD", target = "KZT" } = req.query;
    const rate = await getCurrencyRate(base, target);
    res.json(rate);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch currency data" });
  }
});

export default router;

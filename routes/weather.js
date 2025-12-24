import express from "express";
import { getWeatherByCity } from "../services/weatherService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const weather = await getWeatherByCity(city);
    res.json(weather);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

export default router;

import express from "express";
import weatherRouter from "./routes/weather.js";
import currencyRouter from "./routes/currency.js";

const app = express();
app.use(express.json());

app.use("/api/weather", weatherRouter);
app.use("/api/currency", currencyRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

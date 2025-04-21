import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());

const COINMARKETCAP_API_URL =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const API_KEY = process.env.COINMARKETCAP_API_KEY;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/cryptos", async (req, res) => {
  try {
    const response = await axios.get(COINMARKETCAP_API_URL, {
      headers: { "X-CMC_PRO_API_KEY": API_KEY },
      params: { limit: 50, sort: "market_cap" },
    });

    console.log("Fetched Cryptocurrencies:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch cryptocurrency data" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import axios from "axios";

const API_KEY = "hpgo0fv5s38iptddepdbbg3vnut0li32sz2nfmlm";

export const getWeatherByCity = async (city) => {
  const { data } = await axios.get(
    "https://www.meteosource.com/api/v1/free/point",
    {
      params: {
        place_id: city.toLowerCase(),
        sections: "current",
        language: "en",
        units: "metric",
        key: API_KEY
      }
    }
  );

  return {
    temperature: data.current.temperature,
    feels_like: data.current.temperature, // Meteosource не даёт feels_like
    description: data.current.summary,
    coordinates: {
      lat: data.lat,
      lon: data.lon
    },
    wind_speed: data.current.wind.speed,
    country_code: "N/A",
    rain_3h: data.current.precipitation.total
  };
};

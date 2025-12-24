import axios from "axios";

const ACCESS_KEY = "35694d48975ebcf3680a74e0a36197bf"; // твой ключ

export const getCurrencyRate = async (base = "USD", target = "KZT") => {
  const { data } = await axios.get("https://api.exchangerate.host/live", {
    params: {
      access_key: ACCESS_KEY,
      source: base
    }
  });

  if (!data.success || !data.quotes[`USD${target}`]) {
    throw new Error("Currency not found");
  }

  return {
    base,
    target,
    rate: data.quotes[`${base}${target}`]
  };
};

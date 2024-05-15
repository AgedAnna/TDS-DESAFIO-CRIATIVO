import axios from "axios";

const API_KEY = "e796133909cb4391a1d22117241505";
const BASE_URL = "http://api.weatherapi.com/v1";

export const fetchCities = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search.json`, {
    params: {
      key: API_KEY,
      q: query,
    },
  });
  return response.data;
};

export const fetchWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/current.json`, {
    params: {
      key: API_KEY,
      q: city,
    },
  });
  return response.data;
};

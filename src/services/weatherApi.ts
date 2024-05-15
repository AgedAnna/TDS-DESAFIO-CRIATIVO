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

export const fetchForecast = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: city,
    },
  });
  return response.data;
};

export const fetchHistoricalWeather = async (city: string, date: string) => {
  const response = await axios.get(`${BASE_URL}/history.json`, {
    params: {
      key: API_KEY,
      q: city,
      dt: date,
    },
  });
  return response.data;
};

export const fetchMarineWeather = async (
  latitude: number,
  longitude: number
) => {
  const response = await axios.get(`${BASE_URL}/marine.json`, {
    params: {
      key: API_KEY,
      q: `${latitude},${longitude}`,
    },
  });
  return response.data;
};

export const fetchFutureWeather = async (city: string, days: number) => {
  const response = await axios.get(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: city,
      days: days,
    },
  });
  return response.data;
};

export const fetchWeatherDetails = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: city,
      days: 1,
    },
  });
  return response.data;
};

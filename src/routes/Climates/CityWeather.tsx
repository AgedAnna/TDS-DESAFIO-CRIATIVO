import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWeather, fetchWeatherDetails } from "../../services/weatherApi";
import { Weather, WeatherDetails } from "../../services/interface";
import { Col, Row } from "antd";
import styles from "./Climates.module.scss";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

interface RouteParams extends Record<string, string | undefined> {
  city?: string;
  country?: string;
}

const CityWeather: React.FC = () => {
  const { city, country } = useParams<RouteParams>();
  const [weather, setWeather] = useState<Weather>();
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails>();

  useEffect(() => {
    const fetchData = async () => {
      const weatherData = await fetchWeather(`${city},${country}`);
      setWeather(weatherData);
      const detailsData = await fetchWeatherDetails(`${city},${country}`);
      setWeatherDetails(detailsData.forecast.forecastday[0]);
    };
    fetchData();
  }, [city, country]);

  if (!weather || !weatherDetails)
    return (
      <div className={styles.loading}>
        <LoadingOutlined />
      </div>
    );
  console.log(weather);
  console.log(weatherDetails);
  return (
    <>
      <div className={styles.centerComponents}>
        <Row className={styles.city}>{city}</Row>
        <Row className={styles.condition}>{weather.current.condition.text}</Row>
        <div>
          <Row>
            <p className={styles.temp_c}>{weather.current.temp_c}</p>
            <div className={styles.tempMinMax}>
              <p className={styles.temp}>°C</p>

              <p>
                <ArrowUpOutlined style={{ paddingRight: "2px" }} />
                {weatherDetails.day.maxtemp_c}°
              </p>
              <p>
                <ArrowDownOutlined style={{ paddingRight: "2px" }} />
                {weatherDetails.day.mintemp_c}°
              </p>
            </div>
          </Row>
        </div>
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          style={{
            height: "130px",
            margin: "auto",
            display: "block",
          }}
        />
      </div>
      <div className={styles.centerComponents}>
        <Row>
          <Col sm={8}>
            <div className={styles.weatherInfo}>
              <p>wind speed</p>
              <p>{weather.current.wind_kph}</p>
            </div>
          </Col>
          <Col sm={5}>
            <div className={styles.weatherInfo}>
              <p>sunrise</p>
              <p>{weatherDetails.astro.sunrise}</p>
            </div>
          </Col>
          <Col sm={5}>
            <div className={styles.weatherInfo}>
              <p>sunset</p>
              <p>{weatherDetails.astro.sunset}</p>
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.weatherInfo}>
              <p>humidity</p>
              <p>{weather.current.humidity}%</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CityWeather;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWeather, fetchWeatherDetails } from "../../services/weatherApi";
import { Weather, WeatherDetails } from "../../services/interface";
import { Breadcrumb, Row } from "antd";
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
            height: "150px",
            margin: "auto",
            display: "block",
          }}
        />
      </div>
      <div className={styles.hourlyForecast}>
        <div className={styles.divHour}>
          <Row>dawn</Row>
          <Row>
            <img
              src={weatherDetails.hour[3].condition.icon}
              alt={weatherDetails.hour[3].condition.text}
              style={{
                margin: "auto",
              }}
            />
          </Row>
          {weatherDetails.hour[3].temp_c}°C
        </div>
        <div className={styles.divHour}>
          <Row>morning</Row>
          <Row>
            <img
              src={weatherDetails.hour[9].condition.icon}
              alt={weatherDetails.hour[9].condition.text}
              style={{
                margin: "auto",
              }}
            />
          </Row>
          {weatherDetails.hour[9].temp_c}°C
        </div>
        <div className={styles.divHour}>
          <Row>afternoon</Row>
          <Row>
            <img
              src={weatherDetails.hour[15].condition.icon}
              alt={weatherDetails.hour[15].condition.text}
              style={{
                margin: "auto",
              }}
            />
          </Row>
          {weatherDetails.hour[15].temp_c}°C
        </div>
        <div className={styles.divHour}>
          <Row>night</Row>
          <Row>
            <img
              src={weatherDetails.hour[21].condition.icon}
              alt={weatherDetails.hour[21].condition.text}
              style={{
                margin: "auto",
              }}
            />
          </Row>
          {weatherDetails.hour[21].temp_c}°C
        </div>
      </div>

      <div className={styles.centerComponents}>
        <Breadcrumb separator="">
          <Breadcrumb.Item>
            <div className={styles.weatherInfo}>
              <p>wind speed</p>
              <p>{weather.current.wind_kph} kph</p>
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <div className={styles.weatherInfo}>
              <p>sunrise</p>
              <p>{weatherDetails.astro.sunrise}</p>
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <div className={styles.weatherInfo}>
              <p>sunset</p>
              <p>{weatherDetails.astro.sunset}</p>
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <div className={styles.weatherInfo}>
              <p>humidity</p>
              <p>{weather.current.humidity}%</p>
            </div>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default CityWeather;

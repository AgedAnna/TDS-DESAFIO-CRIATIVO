import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWeather } from "../../services/weatherApi";
import { Weather } from "../../services/interface";
import { Row } from "antd";
import styles from "./Climates.module.scss";

interface RouteParams extends Record<string, string | undefined> {
  city?: string;
  country?: string;
}

const CityWeather: React.FC = () => {
  const { city, country } = useParams<RouteParams>();
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(`${city},${country}`);
      setWeather(data);
    };
    getWeather();
  }, [city, country]);

  if (!weather) return <div>Loading...</div>;
  console.log(weather);

  return (
    <>
      <div className={styles.centerComponents}>
        <Row className={styles.city}>{city}</Row>
        <Row className={styles.condition}>{weather.current.condition.text}</Row>
        <div>
          <Row>
            <p className={styles.temp_c}>{weather.current.temp_c}</p>
            <p className={styles.temp}>°C</p>
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
      <div></div>
    </>
  );
};

export default CityWeather;

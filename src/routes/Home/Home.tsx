import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { Col, Row } from "antd";
import globeImg from "../../../public/icons/globe.svg";

const cities = [
  { name: "Dallol", country: "NG" },
  { name: "Fairbanks", country: "US" },
  { name: "Londres", country: "GB" },
  { name: "Recife", country: "BR" },
  { name: "Vancouver", country: "CA" },
  { name: "Yakutsk", country: "RU" },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleCityClick = (city: string, country: string) => {
    navigate(`/weather/${city}/${country}`);
  };

  return (
    <React.Fragment>
      <div className={styles.centerComponents}>
        <Row className={styles.title}>WEATHER</Row>
        <Row className={styles.select}>select a city</Row>
      </div>

      <div className={styles.centerComponents}>
        <img
          src={globeImg}
          alt="globe"
          style={{
            width: "150px",
            padding: "10px",
            margin: "10px",
          }}
        />
      </div>

      <div className={styles.centerComponentsCities}>
        <Row gutter={[16, 16]}>
          {cities.map((city) => (
            <Col key={city.name} span={8}>
              <div
                className={styles.city}
                onClick={() => handleCityClick(city.name, city.country)}
              >
                {city.name}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Home;

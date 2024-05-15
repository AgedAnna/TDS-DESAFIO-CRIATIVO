import { useState } from "react";
import CityWeather from "./CityWeather";
import LayoutPag from "../../components/LayoutPag/LayoutPag";

const ClimatesIndex = () => {
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");
  const [color, setColor] = useState("#f0f0f0");

  return (
    <div>
      <LayoutPag
        header
        content={
          <CityWeather
            setBackgroundColor={setBackgroundColor}
            setColor={setColor}
          />
        }
        backgroundColor={backgroundColor}
        color={color}
      />
    </div>
  );
};

export default ClimatesIndex;
("");

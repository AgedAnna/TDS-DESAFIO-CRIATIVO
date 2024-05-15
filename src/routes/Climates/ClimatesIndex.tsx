import CityWeather from "./CityWeather";
import LayoutPag from "../../components/LayoutPag/LayoutPag";

const ClimatesIndex = () => {
  return (
    <div>
      <LayoutPag header content={<CityWeather />} backgroundColor="#f0f0f0" />
    </div>
  );
};

export default ClimatesIndex;

import LayoutPag from "../../components/LayoutPag/LayoutPag";
import Home from "./Home";

const HomeIndex = () => {
  return (
    <div>
      <LayoutPag header={false} content={<Home />} backgroundColor="#0f0f0f" />
    </div>
  );
};

export default HomeIndex;

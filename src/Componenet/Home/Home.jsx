import { useLoaderData } from "react-router-dom";
import MarqueeLogo from "./Marquee/MarqueeLogo";
import Slider from "./Slider/Slider";
import Card from "./Card/Card";
import Faq from "./FAQ/Faq";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <MarqueeLogo data={data}></MarqueeLogo>
      <Card data={data}></Card>
      <Faq></Faq>
    </div>
  );
};

export default Home;

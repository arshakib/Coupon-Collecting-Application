// eslint-disable-next-line react/prop-types
import Marquee from "react-fast-marquee";
const MarqueeLogo = (data) => {
  const Api = data.data;
  console.log(Api);
  return (
    <div className="mt-16">
      <h1 className="lg:text-2xl sm:text-xl font-bold text-center mb-8">
        Top Brands That You Are Looking For
      </h1>
      <Marquee pauseOnHover={true}>
        {Api.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <img
            className="w-20 h-20 lg:mr-40 sm:mr-20"
            src={item.brand_logo}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeLogo;

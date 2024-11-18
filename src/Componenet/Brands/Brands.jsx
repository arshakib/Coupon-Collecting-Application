import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Brands = () => {
  const data = useLoaderData();

  const brand = data;
  console.log(brand);
  return (
    <div className="w-10/12 mx-auto">
      <div className="mt-16 mb-10">
        <h1 className="text-3xl font-bold text-center">
          Cash Back at Stores We Love
        </h1>
      </div>

      <div>
        {brand?.map((brand) => (
          // eslint-disable-next-line react/jsx-key
          <div className="my-10">
            <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center gap-4 w-full ">
              {/* Brand Header */}
              <div className="flex items-center w-full gap-4">
                <img
                  src={brand.brand_logo}
                  alt={`${brand.brand_name} logo`}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold">{brand.brand_name}</h2>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="font-medium">{brand.rating}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-center">{brand.description}</p>

              {/* Sale Banner */}
              {brand.isSaleOn ? (
                <div className="bg-green-600 text-white px-3 py-1 rounded-full animate-bounce">
                  🎉 Sale is on 🎉
                </div>
              ) : (
                <div className="bg-red-600 text-white px-3 py-1 rounded-full animate-bounce">
                  🎉 Sale is off 🎉
                </div>
              )}

              {/* View Coupons Button */}
              <Link
                to={`/brands/${brand._id}`}
                // target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
              >
                View Coupons
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

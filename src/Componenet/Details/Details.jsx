import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Details = () => {
  const data = useLoaderData();
  const brandData = data;
  const handleCopy = (code) => {
    toast.success(`Coupon code "${code}" copied!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <ToastContainer />

      {/* Brand Header */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-3xl flex flex-col items-center gap-4">
        <img
          src={brandData.brand_logo}
          alt={`${brandData.brand_name} logo`}
          className="w-24 h-24 object-contain"
        />
        <h1 className="text-3xl font-bold">{brandData.brand_name}</h1>
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="text-xl font-medium">{brandData.rating}</span>
        </div>
        <p className="text-gray-700 text-center">{brandData.description}</p>
      </div>

      {/* Coupons Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {brandData.coupons.map((coupon, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {coupon.coupon_code}
            </h3>
            <p className="text-gray-600 mb-3">{coupon.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Expiry:</strong> {coupon.expiry_date}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Condition:</strong> {coupon.condition}
            </p>

            {/* Coupon Actions */}
            <div className="flex justify-between items-center mt-5">
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => handleCopy(coupon.coupon_code)}
              >
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition">
                  Copy Code
                </button>
              </CopyToClipboard>
              <a
                href={brandData.shop_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
              >
                Use Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

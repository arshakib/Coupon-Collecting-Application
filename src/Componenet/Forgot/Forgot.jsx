import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/Context";

const Forgot = () => {
  const { user, reset, logout } = useContext(AuthContext);
  const value = user?.email;
  console.log(value);

  const handelforgot = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
    reset(email)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        window.open("https://mail.google.com/", "_blank");
        logout();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, errorCode, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <ToastContainer />
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          {/* Login Title */}
          <h2 className="text-3xl font-bold text-center mb-6">
            Reset Password
          </h2>

          {/* Login Form */}
          <form onSubmit={handelforgot} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={value}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;

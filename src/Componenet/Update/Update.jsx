import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { update } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    const photoURL = event.target.photoURL.value;
    const name = event.target.name.value;
    update(name, photoURL)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        navigate("/profile");
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleUpdate}
          className="bg-white p-6 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Update Information
          </h2>

          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              name="photoURL"
              type="url"
              id="photoURL"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter photo URL"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;

import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        {/* Cover Section */}
        <div
          className="relative bg-cover bg-center h-80"
          style={{
            backgroundImage: `url(${user?.photoURL})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex justify-center items-center h-full">
            <h1 className="text-white text-3xl font-bold">
              Welcome to Your Profile
            </h1>
          </div>
        </div>

        {/* User Info Section */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4">
              {/* User Photo */}
              <img
                src={user?.photoURL}
                alt="User Photo"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                {/* User Name and Email */}
                <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                <p className="text-gray-500">{user?.email}</p>
              </div>
            </div>

            {/* Update Button */}
            <div className="mt-6">
              <button
                onClick={() => console.log("Update button clicked")}
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

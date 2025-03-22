import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-400">
      <div className="flex items-center gap-6">
        <img
          src={user.photo}
          alt="User"
          className="w-28 h-28 rounded-full border-4 border-red-400"
        />
        <div>
          <h2 className="text-3xl font-bold text-red-600">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

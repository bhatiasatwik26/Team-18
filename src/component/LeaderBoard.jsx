import React from "react";
import { FaTrophy } from "react-icons/fa";

const Leaderboard = ({ leaderboard, currentUser }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-400">
      <h3 className="text-2xl font-bold text-red-600 mb-4">Leaderboard</h3>
      <ul>
        {leaderboard.map((player, index) => (
          <li
            key={index}
            className={`flex justify-between items-center py-3 px-4 rounded-lg transition-all
              ${
                player.name === currentUser
                  ? "bg-yellow-100 font-bold"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
          >
            <span className="text-gray-800">{player.name}</span>
            <div className="flex items-center gap-2">
              <FaTrophy className="text-yellow-500" />
              <span className="text-gray-700">{player.points}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;

import React from "react";
import { FaClock, FaCalendarCheck, FaTrophy, FaArrowUp } from "react-icons/fa";
import StatBox from "./StatsBox";

const Stats = ({
  eventsVolunteered,
  totalTime,
  currentRank,
  pointsForNextRank,
  nextRank,
  activeEvents,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-400">
      <h3 className="text-3xl md:text-2xl sm:text-xl font-bold text-red-600 mb-8">
        User Stats
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500 flex flex-col gap-6">
          <StatBox
            icon={
              <FaCalendarCheck className="text-red-500 text-4xl md:text-3xl sm:text-2xl" />
            }
            title="Events Participated"
            value={eventsVolunteered}
            valueColor="text-red-600"
          />

          <StatBox
            icon={
              <FaCalendarCheck className="text-green-500 text-4xl md:text-3xl sm:text-2xl" />
            }
            title="Active Events"
            value={activeEvents}
            valueColor="text-green-600"
          />
          <StatBox
            icon={
              <FaClock className="text-blue-500 text-4xl md:text-3xl sm:text-2xl" />
            }
            title="Total Time"
            value={totalTime}
            valueColor="text-blue-600"
          />
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-500 flex flex-col gap-6">
          <StatBox
            icon={
              <FaTrophy className="text-yellow-500 text-5xl md:text-4xl sm:text-3xl" />
            }
            title="Current Rank"
            value={currentRank}
            valueColor="text-yellow-600"
          />

          <StatBox
            icon={
              <FaTrophy className="text-green-500 text-4xl md:text-3xl sm:text-2xl" />
            }
            title="Next Rank"
            value={nextRank}
            valueColor="text-green-600"
          />

          <StatBox
            icon={
              <FaArrowUp className="text-blue-500 text-4xl md:text-3xl sm:text-2xl" />
            }
            title="Points to Rank Up"
            value={pointsForNextRank}
            valueColor="text-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Events from "./Events";
import Leaderboard from "./LeaderBoard";
import Stats from "./Stats";
import Heatmap from "./HeatMap";
import { heatmapData, Demo_leaderboard, Demo_user } from "../constant";

const VolunteerDashboard = () => {
  const [user, setUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch("https://api.example.com/user");
      if (!response.ok) throw new Error("Failed to fetch user data");
      const data = await response.json();

      setUser(data.user);
      setLeaderboard(data.leaderboard);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      // setError("Failed to load data. Please try again.");
      setLoading(false);
      setUser(Demo_user);
      setLeaderboard(Demo_leaderboard);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-2 w-full relative">
      {/* Events Button */}
      <div className="fixed top-6 right-6 z-50 flex items-center space-x-4">
        <Link 
          to="/events"
          className="bg-red-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Explore Events
        </Link>
      </div>
      
      <div className="w-full mx-auto ">
        <div className="w-3/4 m-auto">
          <div className="hidden md:flex  flex-col gap-8">
            <div className="flex flex-row gap-8">
              <div className="flex flex-col gap-6 w-2/3">
                <Profile user={user} />
                <Stats
                  eventsVolunteered={user.eventsVolunteered}
                  totalTime={user.volunteerHour}
                  currentRank={user.rank}
                  pointsForNextRank={user.pointsForNextRank}
                  activeEvents={user.eventsSubscribed.length}
                  nextRank={user.nextRank}
                />
              </div>
              <div className="w-1/3">
                <Leaderboard
                  leaderboard={leaderboard}
                  currentUser={user.name}
                />
              </div>
            </div>
            <div>
              <Heatmap data={heatmapData} />
            </div>

            <div className="w-full">
              <Events events={user.eventsSubscribed} />
            </div>
          </div>
        </div>

        <div className="md:hidden  space-y-6 m-auto">
          <Profile user={user} />
          <Stats
            eventsVolunteered={user.eventsVolunteered}
            totalTime={user.volunteerHour}
            currentRank={user.rank}
            pointsForNextRank={user.pointsForNextRank}
            nextRank={user.nextRank}
            activeEvents={user.eventsSubscribed.length}
          />
          <Heatmap data={heatmapData} />
          <Events events={user.eventsSubscribed} />
          <Leaderboard leaderboard={leaderboard} currentUser={user.name} />
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;

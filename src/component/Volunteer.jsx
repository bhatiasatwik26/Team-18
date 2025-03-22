import React, { useEffect, useState } from "react";
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
    <div className="min-h-screen bg-gray-50 p-2 w-full">
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

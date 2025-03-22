import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Heatmap = ({ data }) => {
  const today = new Date();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-400">
      <h3 className="text-2xl font-bold text-red-600 mb-4">Event Activity</h3>

      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), today.getMonth() - 12, 1)}
        endDate={today}
        values={data}
        classForValue={(value) => {
          if (!value) return "fill-gray-200";
          if (value.count >= 5) return "fill-green-700";
          if (value.count >= 3) return "fill-green-500";
          if (value.count >= 1) return "fill-green-300";
          return "fill-green-100";
        }}
        weekdayLabels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
        showWeekdayLabels={true}
      />
    </div>
  );
};

export default Heatmap;

import React from "react";

const Task = ({ task, completed, date, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`flex-1 lg:min-w-[40%] min-w-[200px] md:w-[48%] lg:w-[48%] flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-lg transition-all cursor-pointer
        ${
          completed
            ? "bg-green-100 line-through text-gray-500"
            : "bg-white text-gray-800 hover:bg-gray-100"
        }
        border ${completed ? "border-green-400" : "border-gray-300"}`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="w-4 h-4 cursor-pointer"
        />
        <span className="text-lg">{task}</span>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-4 md:mt-0">
        <span className="text-sm text-gray-600">{date}</span>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            completed
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {completed ? "Completed" : "Pending"}
        </span>
      </div>
    </div>
  );
};

export default Task;

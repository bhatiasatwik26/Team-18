import React, { useState } from "react";
import Task from "./TaskCard";
const Events = ({ events }) => {
  const [taskStatus, setTaskStatus] = useState(
    events.map((event) =>
      event.tasks.map(() => ({
        completed: false,
        date: new Date(
          Date.now() - Math.floor(Math.random() * 10000000000)
        ).toLocaleDateString("en-US"),
      }))
    )
  );
  // Backend call will be handle later

  // const updateTaskStatus = async (eventIdx, taskIdx) => {
  //   const updatedTask = taskStatus[eventIdx][taskIdx];

  //   try {
  //     const response = await fetch(`/api/events/update-task`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         eventId: events[eventIdx].id,
  //         completed: updatedTask.completed,
  //         date: updatedTask.date,
  //       }),
  //     });

  //     if (!response.ok) {
  //       console.error("Failed to update task status");
  //     }
  //   } catch (error) {
  //     console.error("Error updating task status:", error);
  //   }
  // };

  const toggleTaskStatus = (eventIdx, taskIdx) => {
    const updatedStatus = [...taskStatus];
    updatedStatus[eventIdx][taskIdx].completed =
      !updatedStatus[eventIdx][taskIdx].completed;
    setTaskStatus(updatedStatus);
    // Error handling and other will be done after backend
    // updateTaskStatus(eventIdx, taskIdx);
  };

  const getCompletionPercentage = (eventIdx) => {
    const totalTasks = taskStatus[eventIdx].length;
    const completedTasks = taskStatus[eventIdx].filter(
      (task) => task.completed
    ).length;
    return totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-red-400">
      <h3 className="text-2xl font-bold text-red-600 mb-4">
        Registered Events
      </h3>

      <div className="flex flex-col gap-6">
        {events.map((event, eventIdx) => (
          <div
            key={eventIdx}
            className="bg-red-50 p-5 rounded-lg shadow-md border-l-4 border-red-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold text-red-700">
                {event.name}
              </h4>

              <div className="w-1/2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">
                    {getCompletionPercentage(eventIdx)}% Completed
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getCompletionPercentage(eventIdx)}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {event.tasks.map((task, taskIdx) => (
                <Task
                  key={taskIdx}
                  task={task}
                  completed={taskStatus[eventIdx][taskIdx].completed}
                  date={taskStatus[eventIdx][taskIdx].date}
                  onToggle={() => toggleTaskStatus(eventIdx, taskIdx)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

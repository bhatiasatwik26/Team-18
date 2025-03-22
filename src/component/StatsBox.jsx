const StatBox = ({ icon, title, className, value, valueColor }) => {
  return (
    <div
      className={`flex justify-between flex-wrap items-center gap-4 sm:gap-2 ${className}`}
    >
      <div className="flex items-center gap-4 sm:gap-2">
        <div className="text-4xl md:text-3xl sm:text-2xl">{icon}</div>
        <p className="text-lg md:text-base sm:text-sm font-semibold text-gray-800">
          {title}
        </p>
      </div>

      <p className={`text-2xl md:text-2xl sm:text-xl font-bold ${valueColor}`}>
        {value}
      </p>
    </div>
  );
};

export default StatBox;

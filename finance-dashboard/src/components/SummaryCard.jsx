// const SummaryCard = ({ title, value, color }) => {
//   return (
//     // <div className="p-4 bg-white shadow rounded-lg">
//     <div className="p-4 bg-white rounded-xl shadow-md border border-[#E8D5B5]/30 hover:shadow-lg transition">
//       <h3 className="text-gray-500">{title}</h3>
//       <p className={`text-xl font-bold ${color}`}>₹{value}</p>
//     </div>
//   );
// };

// export default SummaryCard;

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SummaryCard = ({ title, value, color }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 rounded-xl shadow-md border transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#1a1a22] border-[#E8D5B5]/20 text-white"
          : "bg-white border-[#E8D5B5]/30 text-gray-800"
      }`}
    >
      <h3
        className={`text-sm ${
          theme === "dark" ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {title}
      </h3>

      <p className={`text-xl font-bold ${color}`}>₹{value}</p>
    </div>
  );
};

export default SummaryCard;
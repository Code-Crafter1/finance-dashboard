// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext";

// const TransactionFilter = () => {
//   const { search, setSearch, filter, setFilter } = useContext(AppContext);

//   return (
//     <div className="flex gap-4 mb-4 flex-wrap">
//       <input
//         type="text"
//         placeholder="Search category"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border p-2 rounded"
//       />

//       <select
//         value={filter}
//         onChange={(e) => setFilter(e.target.value)}
//         className="border p-2 rounded"
//       >
//         <option>All</option>
//         <option>Income</option>
//         <option>Expense</option>
//       </select>
//     </div>
//   );
// };

// export default TransactionFilter;

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ThemeContext } from "../../context/ThemeContext";

const TransactionFilter = () => {
  const { search, setSearch, filter, setFilter } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex gap-4 mb-4 flex-wrap">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`p-2 rounded-lg outline-none transition-all duration-200 ${
          theme === "dark"
            ? "bg-[#1a1a22] text-white border border-[#E8D5B5]/30 placeholder-gray-400"
            : "bg-white text-black border border-gray-300"
        }`}
      />

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={`p-2 rounded-lg outline-none cursor-pointer transition-all duration-200 ${
          theme === "dark"
            ? "bg-[#1a1a22] text-white border border-[#E8D5B5]/30"
            : "bg-white text-black border border-gray-300"
        }`}
      >
        <option>All</option>
        <option>Income</option>
        <option>Expense</option>
      </select>

    </div>
  );
};

export default TransactionFilter;
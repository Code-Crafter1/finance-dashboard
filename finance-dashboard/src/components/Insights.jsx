// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const Insights = () => {
//   const { transactions } = useContext(AppContext);

//   const totals = {};

//   transactions.forEach((t) => {
//     if (t.type === "expense") {
//       totals[t.category] = (totals[t.category] || 0) + t.amount;
//     }
//   });

//   const highest = Object.keys(totals).reduce((a, b) =>
//     totals[a] > totals[b] ? a : b
//   );

//   return (
//     <div className="p-4 bg-white shadow rounded">
//       <h3 className="font-bold mb-2">Insights</h3>
//       <p>Highest Spending: {highest}</p>
//     </div>
//   );
// };

// export default Insights;
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);

  const totals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    }
  });

  const categories = Object.keys(totals);

  const highest =
    categories.length > 0
      ? categories.reduce((a, b) =>
          totals[a] > totals[b] ? a : b
        )
      : null;

  return (
    <div
      className={`p-4 rounded-xl shadow-md transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#1a1a22] text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <h3 className="font-bold mb-2">Insights</h3>

      {highest ? (
        <p className="text-sm">
          Highest Spending:{" "}
          <span className="font-semibold text-[#CBB58A]">
            {highest}
          </span>
        </p>
      ) : (
        <p className="text-gray-400 text-sm">
          No expense data available
        </p>
      )}
    </div>
  );
};

export default Insights;
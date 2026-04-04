import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const totals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(totals).reduce((a, b) =>
    totals[a] > totals[b] ? a : b
  );

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="font-bold mb-2">Insights</h3>
      <p>Highest Spending: {highest}</p>
    </div>
  );
};

export default Insights;
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import TransactionTable from "../components/transactions/TransactionTable";
import TransactionFilter from "../components/transactions/TransactionFilter";
import Insights from "../components/Insights";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { calculateSummary } from "../utils/Calculations";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);
  const { balance, income, expense } = calculateSummary(transactions);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-4 grid md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={balance} color="text-blue-500" />
        <SummaryCard title="Income" value={income} color="text-green-500" />
        <SummaryCard title="Expense" value={expense} color="text-red-500" />
      </div>

      <div className="p-4 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <LineChart />
        </div>

        <div className="bg-white p-4 shadow rounded">
          <PieChart />
        </div>
      </div>

      <div className="p-4">
        <Insights />
      </div>

      <div className="p-4">
        <TransactionFilter />
        <TransactionTable />
      </div>
    </div>
  );
};

export default Dashboard;
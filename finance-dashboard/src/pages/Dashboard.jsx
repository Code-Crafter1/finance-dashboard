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
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);
  const { balance, income, expense } = calculateSummary(transactions);

//   return (
//      <div className="flex">

//     {/* Sidebar */}
//     <Sidebar />
    
//     <div className="bg-gray-100 min-h-screen flex-1">
//       <Navbar />

//       <div className="p-4 grid md:grid-cols-3 gap-4">
//         <SummaryCard title="Balance" value={balance} color="text-blue-500" />
//         <SummaryCard title="Income" value={income} color="text-green-500" />
//         <SummaryCard title="Expense" value={expense} color="text-red-500" />
//       </div>

//       <div className="p-4 grid md:grid-cols-2 gap-4">
//         <div className="bg-white p-4 shadow rounded">
//           <LineChart />
//         </div>

//         <div className="bg-white p-4 shadow rounded">
//           <PieChart />
//         </div>
//       </div>

//       <div className="p-4">
//         <Insights />
//       </div>

//       <div className="p-4">
//         <TransactionFilter />
//         <TransactionTable />
//       </div>
//     </div>
//     </div>
//   );
return (
  <div className="h-screen flex flex-col">

    {/* TOP NAVBAR */}
    <div className="w-full shadow bg-white z-10">
      <Navbar />
    </div>

    {/* BELOW NAVBAR */}
    <div className="flex flex-1 overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 bg-[#f8fafc] overflow-y-auto p-4">

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <SummaryCard title="Balance" value={balance} color="text-blue-500" />
          <SummaryCard title="Income" value={income} color="text-green-500" />
          <SummaryCard title="Expense" value={expense} color="text-red-500" />
        </div>

        {/* Charts */}
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow rounded-xl">
            <LineChart />
          </div>

          <div className="bg-white p-4 shadow rounded-xl">
            <PieChart />
          </div>
        </div>

        {/* Insights */}
        <div className="mt-4">
          <Insights />
        </div>

        {/* Transactions */}
        <div className="mt-4">
          <TransactionFilter />
          <TransactionTable />
        </div>

      </div>
    </div>
  </div>
);
};

export default Dashboard;
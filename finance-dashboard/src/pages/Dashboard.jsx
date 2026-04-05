// import { useContext } from "react";
// import Insights from "../components/Insights";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import SummaryCard from "../components/SummaryCard";
// import LineChart from "../components/charts/LineChart";
// import PieChart from "../components/charts/PieChart";
// import TransactionFilter from "../components/transactions/TransactionFilter";
// import TransactionTable from "../components/transactions/TransactionTable";
// import { AppContext } from "../context/AppContext";
// import { ThemeContext } from "../context/ThemeContext";
// import { calculateSummary } from "../utils/Calculations";

// const Dashboard = () => {
//   const { transactions } = useContext(AppContext);
//   const { theme } = useContext(ThemeContext);
//   const { balance, income, expense } = calculateSummary(transactions);

//   return (
//     // <div className="h-screen flex flex-col">
//     <div
//       className={`h-screen flex flex-col transition-all duration-300 ${
//         theme === "dark" ? "bg-[#0F0F14] text-white" : "bg-[#F8F6F2] text-black"
//       }`}
//     >
//       {/* TOP NAVBAR */}
//       <div className="w-full shadow bg-white z-10">
//         <Navbar />
//       </div>

//       {/* BELOW NAVBAR */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* SIDEBAR */}
//         <Sidebar />

//         {/* MAIN CONTENT */}
//         <div className="flex-1 bg-[#f8fafc] overflow-y-auto p-4">
//           {/* Cards */}
//           <div className="grid md:grid-cols-3 gap-4">
//             <SummaryCard
//               title="Balance"
//               value={balance}
//               color="text-blue-500"
//             />
//             <SummaryCard title="Income" value={income} color="text-green-500" />
//             <SummaryCard title="Expense" value={expense} color="text-red-500" />
//           </div>

//           {/* Charts */}
//           <div className="mt-4 grid md:grid-cols-2 gap-4">
//             <div className="bg-white p-4 shadow rounded-xl">
//               <LineChart />
//             </div>

//             <div className="bg-white p-4 shadow rounded-xl">
//               <PieChart />
//             </div>
//           </div>

//           {/* Insights */}
//           <div className="mt-4">
//             <Insights />
//           </div>

//           {/* Transactions */}
//           <div className="mt-4">
//             <TransactionFilter />
//             <TransactionTable />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useContext } from "react";
import Insights from "../components/Insights";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import TransactionFilter from "../components/transactions/TransactionFilter";
import TransactionTable from "../components/transactions/TransactionTable";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";
import { calculateSummary } from "../utils/Calculations";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);
  const { balance, income, expense } = calculateSummary(transactions);

  return (
    <div
      className={`h-screen flex flex-col transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#0F0F14] text-white"
          : "bg-[#F8F6F2] text-black"
      }`}
    >
      {/* NAVBAR */}
      <div
        className={`w-full shadow z-10 ${
          theme === "dark" ? "bg-[#0F0F14]" : "bg-white"
        }`}
      >
        <Navbar />
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div
          className={`flex-1 overflow-y-auto p-4 transition-all duration-300 ${
            theme === "dark" ? "bg-[#121218]" : "bg-[#f8fafc]"
          }`}
        >
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-4">
            <SummaryCard title="Balance" value={balance} color="text-blue-500" />
            <SummaryCard title="Income" value={income} color="text-green-500" />
            <SummaryCard title="Expense" value={expense} color="text-red-500" />
          </div>

          {/* Charts */}
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div
              className={`p-4 shadow rounded-xl ${
                theme === "dark" ? "bg-[#1a1a22]" : "bg-white"
              }`}
            >
              <LineChart />
            </div>

            <div
              className={`p-4 shadow rounded-xl ${
                theme === "dark" ? "bg-[#1a1a22]" : "bg-white"
              }`}
            >
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
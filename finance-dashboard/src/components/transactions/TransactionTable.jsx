// import { useContext } from "react";
// import { AppContext } from "../../context/AppContext";

// const TransactionTable = () => {
//   const { transactions, search, filter, role, setTransactions } =
//     useContext(AppContext);

//   const handleDelete = (id) => {
//     setTransactions(transactions.filter((t) => t.id !== id));
//   };

//   const filtered = transactions.filter((t) => {
//     return (
//       (filter === "All" || t.type === filter.toLowerCase()) &&
//       t.category.toLowerCase().includes(search.toLowerCase())
//     );
//   });

//   return (
//     <table className="w-full border bg-white shadow rounded">
//       <thead>
//         <tr className="bg-gray-100">
//           <th>Date</th>
//           <th>Amount</th>
//           <th>Category</th>
//           <th>Type</th>
//           {role === "Admin" && <th>Action</th>}
//         </tr>
//       </thead>

//       <tbody>
//         {filtered.map((t) => (
//           <tr key={t.id} className="text-center border-t">
//             <td>{t.date}</td>
//             <td>₹{t.amount}</td>
//             <td>{t.category}</td>
//             <td className={t.type === "income" ? "text-green-500" : "text-red-500"}>
//               {t.type}
//             </td>
//             {role === "Admin" && (
//               <td>
//                 <button
//                   onClick={() => handleDelete(t.id)}
//                   className="text-red-500"
//                 >
//                   Delete
//                 </button>
//               </td>
//             )}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionTable;

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ThemeContext } from "../../context/ThemeContext";

const TransactionTable = () => {
  const { transactions, search, filter, role, setTransactions } =
    useContext(AppContext);

  const { theme } = useContext(ThemeContext);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const filtered = transactions.filter((t) => {
    return (
      (filter === "All" || t.type === filter.toLowerCase()) &&
      t.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div
      className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
        theme === "dark" ? "bg-[#1a1a22]" : "bg-white"
      }`}
    >
      <table className="w-full">
        {/* Header */}
        <thead
          className={`${
            theme === "dark" ? "bg-[#2a2a35]" : "bg-gray-100"
          }`}
        >
          <tr className="text-sm">
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Category</th>
            <th className="p-3">Type</th>
            {role === "Admin" && <th className="p-3">Action</th>}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <tr
                key={t.id}
                className={`text-center border-t ${
                  theme === "dark"
                    ? "border-gray-700 hover:bg-[#22222b]"
                    : "border-gray-200 hover:bg-gray-50"
                } transition`}
              >
                <td className="p-3">{t.date}</td>
                <td className="p-3">₹{t.amount}</td>
                <td className="p-3">{t.category}</td>

                <td
                  className={`p-3 font-medium ${
                    t.type === "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {t.type}
                </td>

                {role === "Admin" && (
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={role === "Admin" ? 5 : 4}
                className="p-4 text-center text-gray-400"
              >
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
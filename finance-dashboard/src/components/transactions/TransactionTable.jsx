import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionTable = () => {
  const { transactions, search, filter, role, setTransactions } =
    useContext(AppContext);

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
    <table className="w-full border bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-100">
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Type</th>
          {role === "Admin" && <th>Action</th>}
        </tr>
      </thead>

      <tbody>
        {filtered.map((t) => (
          <tr key={t.id} className="text-center border-t">
            <td>{t.date}</td>
            <td>₹{t.amount}</td>
            <td>{t.category}</td>
            <td className={t.type === "income" ? "text-green-500" : "text-red-500"}>
              {t.type}
            </td>
            {role === "Admin" && (
              <td>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
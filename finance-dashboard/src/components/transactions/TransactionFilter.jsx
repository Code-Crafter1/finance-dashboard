import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionFilter = () => {
  const { search, setSearch, filter, setFilter } = useContext(AppContext);

  return (
    <div className="flex gap-4 mb-4 flex-wrap">
      <input
        type="text"
        placeholder="Search category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option>All</option>
        <option>Income</option>
        <option>Expense</option>
      </select>
    </div>
  );
};

export default TransactionFilter;
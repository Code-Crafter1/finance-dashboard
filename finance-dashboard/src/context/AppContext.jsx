import { createContext, useState } from "react";
import { transactionsData } from "../data/transactions";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("Viewer");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// // import {
// //   LayoutDashboard,
// //   Wallet,
// //   ArrowLeftRight,
// //   Receipt,
// //   Target,
// //   Settings,
// // } from "lucide-react";
// // import { useState } from "react";

// // const Sidebar = () => {
// //   const [active, setActive] = useState("dashboard");

// //   const menu = [
// //     { id: "dashboard", icon: LayoutDashboard },
// //     { id: "balance", icon: Wallet },
// //     { id: "transactions", icon: ArrowLeftRight },
// //     { id: "bills", icon: Receipt },
// //     { id: "goals", icon: Target },
// //     { id: "settings", icon: Settings },
// //   ];

// //   return (
// //     <div className="hidden md:flex flex-col items-center h-screen w-20 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500 py-6 shadow-lg">

// //       {/* Logo */}
// //       <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md mb-6">
// //         <LayoutDashboard className="text-white" />
// //       </div>

// //       {/* Menu */}
// //       <div className="flex flex-col gap-6">
// //         {menu.map((item) => {
// //           const Icon = item.icon;
// //           return (
// //             <div
// //               key={item.id}
// //               onClick={() => setActive(item.id)}
// //               className={`p-3 rounded-xl cursor-pointer transition-all duration-300 ${
// //                 active === item.id
// //                   ? "bg-white text-indigo-600 scale-110"
// //                   : "text-white hover:bg-white/20"
// //               }`}
// //             >
// //               <Icon size={20} />
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// //
// // import {
// //   ArrowLeftRight,
// //   LayoutDashboard,
// //   Receipt,
// //   Settings,
// //   Target,
// //   Wallet,
// // } from "lucide-react";
// // import { useState } from "react";

// // const Sidebar = () => {
// //   const [active, setActive] = useState("dashboard");

// //   const menu = [
// //     { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
// //     { id: "balance", icon: Wallet, label: "Balance" },
// //     { id: "transactions", icon: ArrowLeftRight, label: "Transactions" },
// //     { id: "bills", icon: Receipt, label: "Bills" },
// //     { id: "goals", icon: Target, label: "Goals" },
// //     { id: "settings", icon: Settings, label: "Settings" },
// //   ];

// //   return (
// //     <div className="w-16 bg-[#0F0F14] flex flex-col items-center py-4 shadow-md">
// //       <div className="flex flex-col gap-6 mt-6">
// //         {menu.map((item) => {
// //           const Icon = item.icon;

// //           return (
// //             <div key={item.id} className="relative group">
// //               <div
// //                 onClick={() => setActive(item.id)}
// //                 className={`p-3 rounded-lg cursor-pointer transition ${
// //                   active === item.id
// //                     ? "bg-[#E8D5B5] text-black shadow-md"
// //                     : "text-[#CBB58A] hover:bg-[#1a1a22]"
// //                 }`}
// //               >
// //                 <Icon size={20} />
// //               </div>

// //               {/* Tooltip */}
// //               <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#E8D5B5] text-black text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow">
// //                 {item.label}
// //               </span>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// import {
//   ArrowLeft,
//   ArrowLeftRight,
//   LayoutDashboard,
//   Menu,
//   Receipt,
//   Settings,
//   Target,
//   Wallet,
// } from "lucide-react";
// import { useState } from "react";

// const Sidebar = () => {
//   const [active, setActive] = useState("dashboard");
//   const [open, setOpen] = useState(false); // 👈 toggle state

//   const menu = [
//     { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
//     { id: "balance", icon: Wallet, label: "Balance" },
//     { id: "transactions", icon: ArrowLeftRight, label: "Transactions" },
//     { id: "bills", icon: Receipt, label: "Bills" },
//     { id: "goals", icon: Target, label: "Goals" },
//     { id: "settings", icon: Settings, label: "Settings" },
//   ];

//   return (
//     <div
//       className={`${
//         open ? "w-56" : "w-16"
//       } bg-[#0F0F14] min-h-screen flex flex-col py-4 px-2 transition-all duration-300 shadow-md`}
//     >
//       {/* Top Icon (Toggle) */}
//       {/* <div className="flex justify-center mb-6"> */}
//       <div
//         className={`flex mb-6 ${open ? "justify-end pr-2" : "justify-center"}`}
//       >
//         <button onClick={() => setOpen(!open)}>
//           {open ? (
//             <ArrowLeft size={24} className="text-[#E8D5B5]" />
//           ) : (
//             <Menu size={22} className="text-[#E8D5B5]" />
//           )}
//         </button>
//       </div>

//       {/* Menu */}
//       <div className="flex flex-col gap-6 mt-4">
//         {menu.map((item) => {
//           const Icon = item.icon;

//           return (
//             <div
//               key={item.id}
//               onClick={() => setActive(item.id)}
//               className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
//                 active === item.id
//                   ? "bg-[#E8D5B5] text-black shadow-md"
//                   : "text-[#CBB58A] hover:bg-[#1a1a22]"
//               }`}
//             >
//               <Icon size={20} />

//               {/* Label only when open */}
//               {open && <span className="text-sm">{item.label}</span>}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import {
  ArrowLeft,
  ArrowLeftRight,
  LayoutDashboard,
  Menu,
  Receipt,
  Settings,
  Target,
  Wallet,
} from "lucide-react";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");
  const [open, setOpen] = useState(false);

  const { theme } = useContext(ThemeContext);

  const menu = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "balance", icon: Wallet, label: "Balance" },
    { id: "transactions", icon: ArrowLeftRight, label: "Transactions" },
    { id: "bills", icon: Receipt, label: "Bills" },
    { id: "goals", icon: Target, label: "Goals" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={`${
        open ? "w-56" : "w-16"
      } min-h-screen flex flex-col py-4 px-2 transition-all duration-300 shadow-md ${
        theme === "dark"
          ? "bg-[#0F0F14]"
          : "bg-white border-r border-gray-200"
      }`}
    >
      {/* Toggle Button */}
      <div
        className={`flex mb-6 ${
          open ? "justify-end pr-2" : "justify-center"
        }`}
      >
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <ArrowLeft
              size={24}
              className={`${
                theme === "dark" ? "text-[#E8D5B5]" : "text-gray-700"
              }`}
            />
          ) : (
            <Menu
              size={22}
              className={`${
                theme === "dark" ? "text-[#E8D5B5]" : "text-gray-700"
              }`}
            />
          )}
        </button>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-6 mt-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                active === item.id
                  ? "bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black shadow-md"
                  : theme === "dark"
                  ? "text-[#CBB58A] hover:bg-[#1a1a22]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />

              {/* Label */}
              {open && <span className="text-sm">{item.label}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
// import {
//   LayoutDashboard,
//   Wallet,
//   ArrowLeftRight,
//   Receipt,
//   Target,
//   Settings,
// } from "lucide-react";
// import { useState } from "react";

// const Sidebar = () => {
//   const [active, setActive] = useState("dashboard");

//   const menu = [
//     { id: "dashboard", icon: LayoutDashboard },
//     { id: "balance", icon: Wallet },
//     { id: "transactions", icon: ArrowLeftRight },
//     { id: "bills", icon: Receipt },
//     { id: "goals", icon: Target },
//     { id: "settings", icon: Settings },
//   ];

//   return (
//     <div className="hidden md:flex flex-col items-center h-screen w-20 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-500 py-6 shadow-lg">

//       {/* Logo */}
//       <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md mb-6">
//         <LayoutDashboard className="text-white" />
//       </div>

//       {/* Menu */}
//       <div className="flex flex-col gap-6">
//         {menu.map((item) => {
//           const Icon = item.icon;
//           return (
//             <div
//               key={item.id}
//               onClick={() => setActive(item.id)}
//               className={`p-3 rounded-xl cursor-pointer transition-all duration-300 ${
//                 active === item.id
//                   ? "bg-white text-indigo-600 scale-110"
//                   : "text-white hover:bg-white/20"
//               }`}
//             >
//               <Icon size={20} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import {
  ArrowLeftRight,
  LayoutDashboard,
  Receipt,
  Settings,
  Target,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const menu = [
    { id: "dashboard", icon: LayoutDashboard },
    { id: "balance", icon: Wallet },
    { id: "transactions", icon: ArrowLeftRight },
    { id: "bills", icon: Receipt },
    { id: "goals", icon: Target },
    { id: "settings", icon: Settings },
  ];

  return (
    <div className="w-14 bg-[#0F0F14] flex flex-col items-center py-4 shadow-md">
      {/* Menu */}
      <div className="flex flex-col gap-6 mt-6">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setActive(item.id)}
              //   className={`p-3 rounded-lg cursor-pointer transition ${
              //     active === item.id
              //       ? "bg-blue-100 text-blue-600"
              //       : "text-gray-500 hover:bg-gray-100"
              //   }`}
              className={`p-3 rounded-lg cursor-pointer transition ${
                active === item.id
                  ? "bg-[#E8D5B5] text-black shadow-md"
                  : "text-[#CBB58A] hover:bg-[#1a1a22]"
              }`}
            >
              <Icon size={20} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

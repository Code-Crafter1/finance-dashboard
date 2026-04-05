// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const RoleSwitcher = () => {
//   const { role, setRole } = useContext(AppContext);

//   return (
//     // <select
//     //   value={role}
//     //   onChange={(e) => setRole(e.target.value)}
//     //   className="border p-2 rounded"
//     // >
//     //   <option>Viewer</option>
//     //   <option>Admin</option>
//     // </select>
//     <select
//       value={role}
//       onChange={(e) => setRole(e.target.value)}
//       className="px-4 py-2 rounded-lg border border-[#E8D5B5] bg-transparent text-[#E8D5B5] font-medium cursor-pointer outline-none transition-all duration-200 hover:bg-[#E8D5B5]/10 focus:bg-[#E8D5B5]/20"
//     >
//       <option value="Viewer" className="text-black">
//         Viewer
//       </option>
//       <option value="Admin" className="text-black">
//         Admin
//       </option>
//     </select>
//   );
// };

// export default RoleSwitcher;

// import { useContext, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { ChevronDown } from "lucide-react";

// const RoleSwitcher = () => {
//   const { role, setRole } = useContext(AppContext);
//   const [open, setOpen] = useState(false);

//   const roles = ["Viewer", "Admin"];

//   return (
//     <div className="relative w-28">
//       {/* Selected */}
//       <div
//         onClick={() => setOpen(!open)}
//         className="px-4 py-2 rounded-lg border border-[#E8D5B5] bg-transparent text-[#E8D5B5] cursor-pointer flex justify-between items-center"
//       >
//         {role}
//         {/* <span className="text-sm"></span> */}
//           <ChevronDown
//           size={18}
//           className={`transition-transform ${open ? "rotate-180" : ""}`}
//         />
//       </div>

//       {/* Dropdown */}
//       {open && (
//         <div className="absolute mt-1 w-full bg-[#E8D5B5] rounded-lg shadow-lg overflow-hidden z-50">
//           {roles.map((r) => (
//             <div
//               key={r}
//               onClick={() => {
//                 setRole(r);
//                 setOpen(false);
//               }}
//               className={`px-4 py-2 text-black cursor-pointer ${
//                 role === r ? "bg-[#CBB58A]" : ""
//               }`}
//             >
//               {r}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoleSwitcher;

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { ThemeContext } from "../context/ThemeContext";
import { ChevronDown } from "lucide-react";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(AppContext);
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const roles = ["Viewer", "Admin"];

  return (
    <div className="relative w-28">
      {/* Selected */}
      <div
        onClick={() => setOpen(!open)}
        className={`px-4 py-2 rounded-lg cursor-pointer flex justify-between items-center transition-all duration-200 ${
          theme === "dark"
            ? "border border-[#E8D5B5] text-[#E8D5B5] bg-transparent"
            : "border border-[#CBB58A] text-[#8B6F47] bg-white hover:bg-[#F3EDE4]"
        }`}
      >
        {role}

        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute mt-2 w-full rounded-lg shadow-lg overflow-hidden z-50 ${
            theme === "dark"
              ? "bg-[#1a1a22] text-white border border-[#E8D5B5]/20"
              : "bg-white text-black border border-gray-200"
          }`}
        >
          {roles.map((r) => (
            <div
              key={r}
              onClick={() => {
                setRole(r);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer transition ${
                role === r
                  ? "bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black"
                  : theme === "dark"
                  ? "hover:bg-[#22222b]"
                  : "hover:bg-gray-100"
              }`}
            >
              {r}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoleSwitcher;

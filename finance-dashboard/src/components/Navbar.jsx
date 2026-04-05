// import RoleSwitcher from "../components/RoleSwitcher";

// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center p-4 bg-white shadow-md">
//       <h1 className="text-xl font-bold">Finance Dashboard</h1>
//       <RoleSwitcher />
//     </div>
//   );
// };

// export default Navbar;

// import RoleSwitcher from "../components/RoleSwitcher";

// const Navbar = () => {
//   return (
// <div className="flex justify-between items-center px-6 py-3">
//<div className="flex justify-between items-center px-6 py-3 bg-[#0F0F14] text-[#E8D5B5] shadow">
{
  /* Left */
}

{
  /* <h1 className="text-xl font-bold text-gray-800">Finance Dashboard</h1> */
}
// <h1 className="text-xl font-bold bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] bg-clip-text text-transparent">
//   Finance Dashboard
// </h1>

{
  /* Right */
}
// <div className="flex items-center gap-4">
//   <RoleSwitcher />

{
  /* <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-lg shadow hover:opacity-90">
          Dashboard
        </button>

        <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg shadow hover:bg-red-600">
          Logout
        </button> */
}
//         <button className="bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black px-4 py-1.5 rounded-lg shadow hover:opacity-90">
//           Dashboard
//         </button>

//         <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg shadow">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import RoleSwitcher from "../components/RoleSwitcher";

// const Navbar = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center gap-3 px-6 py-3 bg-[#0F0F14] shadow-md">

//       {/* Left - Title */}
//       <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] bg-clip-text text-transparent">
//         Finance Dashboard
//       </h1>

//       {/* Right */}
//       <div className="flex items-center gap-3">

//         {/* Role Switcher (styled container) */}
//         {/* <div className="bg-[#1a1a22] px-3 py-1 rounded-lg border border-[#E8D5B5]/20 text-[#E8D5B5]">
//           <RoleSwitcher />
//         </div> */}
//         <RoleSwitcher />

//         {/* Logout */}
//         <button
//           onClick={() => {
//             if (confirm("Are you sure you want to logout?")) {
//               localStorage.clear();
//               window.location.reload();
//             }
//           }}
//           className="bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black px-4 py-1.5 rounded-lg shadow hover:opacity-90 transition"
//         >
//           Logout
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { Sun, Moon } from "lucide-react";
// import RoleSwitcher from "../components/RoleSwitcher";

// const Navbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div
//       className={`flex flex-col md:flex-row justify-between items-center gap-3 px-6 py-3 shadow-md ${
//         theme === "dark" ? "bg-[#0F0F14]" : "bg-white"
//       }`}
//     >
//       {/* Title */}
//       <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] bg-clip-text text-transparent">
//         Finance Dashboard
//       </h1>

//       {/* Right */}
//       <div className="flex items-center gap-3">

//         {/* 🌗 Theme Toggle */}
//         <button
//           onClick={toggleTheme}
//           className="p-2 rounded-lg border border-[#E8D5B5] text-[#E8D5B5] hover:bg-[#E8D5B5]/10 transition"
//         >
//           {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//         </button>

//         <RoleSwitcher />

//         {/* Logout */}
//         <button
//           onClick={() => {
//             if (confirm("Are you sure you want to logout?")) {
//               localStorage.clear();
//               window.location.reload();
//             }
//           }}
//           className="bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black px-4 py-1.5 rounded-lg shadow hover:opacity-90 transition"
//         >
//           Logout
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { Moon, Sun } from "lucide-react";
// import { useContext } from "react";
// import RoleSwitcher from "../components/RoleSwitcher";
// import { ThemeContext } from "../context/ThemeContext";

// const Navbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <div
//       className={`flex flex-col md:flex-row justify-between items-center gap-3 px-6 py-3 shadow-md transition-all duration-300 ${
//         theme === "dark"
//           ? "bg-[#0F0F14] text-[#E8D5B5]"
//           : "bg-white text-gray-800"
//       }`}
//     >
//       {/* Title */}
//       {/* <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] bg-clip-text text-transparent">
//         Finance Dashboard
//       </h1> */}
//       <h1
//         className={`text-xl md:text-2xl font-semibold ${
//           theme === "dark"
//             ? "bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] bg-clip-text text-transparent"
//             : "text-[#8B6F47]" // 👈 darker gold for light mode
//         }`}
//       >
//         Finance Dashboard
//       </h1>

//       {/* Right */}
//       <div className="flex items-center gap-3">
//         {/* 🌗 Theme Toggle */}
//         {/* <button
//           onClick={toggleTheme}
//           className={`p-2 rounded-lg border transition ${
//             theme === "dark"
//               ? "border-[#E8D5B5] text-[#E8D5B5] hover:bg-[#E8D5B5]/10"
//               : "border-gray-300 text-gray-700 hover:bg-gray-100"
//           }`}
//         >
//           {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//         </button> */}
//         <button
//           onClick={toggleTheme}
//           className={`p-2 rounded-lg transition ${
//             theme === "dark"
//               ? "border border-[#E8D5B5] text-[#E8D5B5] hover:bg-[#E8D5B5]/10"
//               : "border border-[#CBB58A] text-[#8B6F47] hover:bg-[#F3EDE4]"
//           }`}
//         >
//           {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//         </button>

//         {/* Role Switcher */}
//         <RoleSwitcher />

//         <button
//           className={`px-4 py-1.5 rounded-lg shadow transition ${
//             theme === "dark"
//               ? "bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black"
//               : "bg-[#CBB58A] text-black hover:bg-[#B89F6B]"
//           }`}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Menu, Moon, Sun, X } from "lucide-react";
// import { useContext, useState } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import RoleSwitcher from "../components/RoleSwitcher";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className={`flex justify-between items-center px-4 md:px-6 py-3 shadow-md ${
        theme === "dark"
          ? "bg-[#0F0F14] text-[#E8D5B5]"
          : "bg-white text-gray-800"
      }`}
    >
      {/* LEFT */}
      <h1
        className={`text-lg md:text-2xl font-semibold ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] bg-clip-text text-transparent"
            : "text-[#8B6F47]"
        }`}
      >
        Finance Dashboard
      </h1>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        {/* 🌗 Theme Toggle (ALWAYS VISIBLE) */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition ${
            theme === "dark"
              ? "border border-[#E8D5B5] text-[#E8D5B5]"
              : "border border-[#CBB58A] text-[#8B6F47]"
          }`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* DESKTOP ITEMS */}
        <div className="hidden md:flex items-center gap-3">
          <RoleSwitcher />

          <button
            className={`px-4 py-1.5 rounded-lg shadow ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black"
                : "bg-[#CBB58A] text-black"
            }`}
          >
            Logout
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {/* {open && (
        <div className="fixed inset-0 z-50 bg-black/30">
          <div
            className={`absolute right-0 top-0 w-64 h-full p-4 shadow-lg ${
              theme === "dark" ? "bg-[#0F0F14]" : "bg-white"
            }`}
          >
          
            <div className="flex justify-end mb-4">
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <RoleSwitcher />

              <button className="p-2 rounded-lg bg-red-100 text-red-500">
                Logout
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* MOBILE FLOATING MENU */}
      {/* {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16  bg-black/20">
          <div
            className={`w-[85%] max-w-sm rounded-xl shadow-2xl p-4 ${
              theme === "dark" ? "bg-[#0F0F14]" : "bg-white"
            }`}
          >
          
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setOpen(false)}
                className={`p-2 rounded-lg transition ${
                  theme === "dark"
                    ? "text-[#E8D5B5] hover:bg-[#1a1a22]"
                    : "text-[#8B6F47] hover:bg-[#F3EDE4]"
                }`}
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
            
              <RoleSwitcher />

             

              
              <button
                className={`p-3 rounded-lg font-medium ${
                  theme === "dark"
                    ? "bg-red-900/30 text-red-400"
                    : "bg-red-100 text-red-500"
                }`}
              >
                ⬅ Logout
              </button>
            </div>
          </div>
        </div>
      )} */}
      {open && (
        <>
          {/* Invisible click layer */}
          {/* <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} /> */}

          {/* Floating Menu */}
          <div className="fixed right-4 top-16 z-50">
            {/* <div
              onClick={(e) => e.stopPropagation()}
              className={`w-64 rounded-xl shadow-2xl p-4 ${ */}
            <div
              ref={menuRef}
              className={`w-64 rounded-xl shadow-2xl p-4 ${
                theme === "dark" ? "bg-[#0F0F14]" : "bg-white"
              }`}
            >
              {/* CLOSE */}
              <div className="flex justify-end mb-3">
                <button onClick={() => setOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-3">
                <RoleSwitcher />

                <button className="p-3 rounded-lg bg-red-100 text-red-500">
                  ⬅ Logout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

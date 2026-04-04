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

import RoleSwitcher from "../components/RoleSwitcher";

const Navbar = () => {
  return (
    // <div className="flex justify-between items-center px-6 py-3">
    <div className="flex justify-between items-center px-6 py-3 bg-[#0F0F14] text-[#E8D5B5] shadow">
      {/* Left */}

      {/* <h1 className="text-xl font-bold text-gray-800">Finance Dashboard</h1> */}
      <h1 className="text-xl font-bold bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] bg-clip-text text-transparent">
        Finance Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        <RoleSwitcher />

        {/* <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-lg shadow hover:opacity-90">
          Dashboard
        </button>

        <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg shadow hover:bg-red-600">
          Logout
        </button> */}
        <button className="bg-gradient-to-r from-[#E8D5B5] to-[#CBB58A] text-black px-4 py-1.5 rounded-lg shadow hover:opacity-90">
          Dashboard
        </button>

        <button className="bg-red-500 text-white px-4 py-1.5 rounded-lg shadow">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

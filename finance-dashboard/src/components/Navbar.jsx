import RoleSwitcher from "../components/RoleSwitcher";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Finance Dashboard</h1>
      <RoleSwitcher />
    </div>
  );
};

export default Navbar;

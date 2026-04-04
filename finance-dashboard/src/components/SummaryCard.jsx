const SummaryCard = ({ title, value, color }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-gray-500">{title}</h3>
      <p className={`text-xl font-bold ${color}`}>₹{value}</p>
    </div>
  );
};

export default SummaryCard;
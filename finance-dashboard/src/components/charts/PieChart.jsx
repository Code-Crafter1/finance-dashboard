import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Food", "Travel", "Bills"],
    datasets: [
      {
        data: [1200, 800, 500],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
import {
  Line
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Balance",
        data: [1000, 2000, 1500, 3000],
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
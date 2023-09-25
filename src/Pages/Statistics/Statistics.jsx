import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const donationList = JSON.parse(localStorage.getItem("donations"));
const myDonation = donationList.length;
const totalDonation = 20;
const data = {
  labels: ["Your Donation", "Total Donation"],
  datasets: [
    {
      data: [myDonation, totalDonation],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Statistics = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-[350] md:w-[500px]">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Statistics;

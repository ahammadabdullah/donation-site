import Chart from "react-google-charts";

const Statistics = () => {
  const donationList = JSON.parse(localStorage.getItem("donations"));
  const myDonation = donationList.length;
  const totalDonation = 20;
  console.log(myDonation);
  const data = [
    ["Your Donation", "Total Donation"],
    ["Your Donation", myDonation],
    ["Total Donation", totalDonation],
  ];
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="550px"
      ></Chart>
    </div>
  );
};

export default Statistics;

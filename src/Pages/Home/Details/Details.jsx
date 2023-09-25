import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const allData = useLoaderData();
  useEffect(() => {
    const findData = allData?.find((data) => data.id == id);
    setData(findData);
  }, [id, allData]);
  const { image_2, title, description, text_color, amount } = data;
  const btnStyle = {
    margin: "50px 40px",
    padding: "16px 26px",
    backgroundColor: text_color,
    color: "#fff",
    fontWeight: 600,
    fontSize: 20,
    borderRadius: 6,
  };
  const donationArr = [];
  const handleDonation = () => {
    const donationList = JSON.parse(localStorage.getItem("donations"));
    if (!donationList) {
      donationArr.push(data);
      localStorage.setItem("donations", JSON.stringify(donationArr));
      swal("Congrats!", "Donation Successful!", "success");
    } else {
      const isExist = donationList.find((data) => data.id == id);
      if (!isExist) {
        donationArr.push(...donationList, data);
        localStorage.setItem("donations", JSON.stringify(donationArr));
        swal("Good job!", "Donation Successful!", "success");
      } else {
        swal("Error!", "Already Donated!", "error");
      }
    }
  };

  return (
    <div>
      <div>
        <img
          className="w-full md:h-[700px] h-[400px] rounded-lg"
          src={image_2}
          alt=""
        />
        <div className="bg-black bg-opacity-30 relative lg:w-[1320px] w-full bottom-[160px] rounded-b-lg">
          <button onClick={handleDonation} style={btnStyle}>
            Donate ${amount}
          </button>
        </div>
      </div>
      <div className="my-10 space-y-6 relative -top-20">
        <h3 className="text-5xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Details;

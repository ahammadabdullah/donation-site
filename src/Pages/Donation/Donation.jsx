import { useEffect, useState } from "react";
import DonatedCard from "../../Components/Card/DonatedCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const donationList = JSON.parse(localStorage.getItem("donations"));
    if (donationList) {
      setDonation(donationList);
    } else {
      setNoFound("No Donation Yet");
    }
  }, []);
  return (
    <div>
      {noFound ? (
        <p className="h-screen flex items-center justify-center font-bold  text-4xl">
          No Donation Yet
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {isShow
            ? donation.map((data) => (
                <DonatedCard key={data.id} data={data}></DonatedCard>
              ))
            : donation
                .slice(0, 4)
                .map((data) => (
                  <DonatedCard key={data.id} data={data}></DonatedCard>
                ))}
        </div>
      )}
      {donation.length > 4 && (
        <button
          onClick={() => setIsShow(!isShow)}
          className="my-10 px-5 py-2 rounded-lg bg-red-400 text-white font-semibold block mx-auto"
        >
          {isShow ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Donation;

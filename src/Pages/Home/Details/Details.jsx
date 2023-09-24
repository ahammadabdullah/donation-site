import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const allData = useLoaderData();
  useEffect(() => {
    const findData = allData?.find((data) => data.id == id);
    setData(findData);
  }, [id, allData]);
  console.log(data);
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
  return (
    <div>
      <div>
        <img className="w-full h-[700px] rounded-lg" src={image_2} alt="" />
        <div className="bg-black bg-opacity-30 absolute w-[1320px] -bottom-[90px] rounded-b-lg">
          <button style={btnStyle}>Donate ${amount}</button>
        </div>
      </div>
      <div className="my-10 space-y-6">
        <h3 className="text-5xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Details;

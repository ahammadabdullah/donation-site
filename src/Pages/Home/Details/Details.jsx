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
  const { image, title, description, text_color, amount } = data;
  return (
    <div>
      <img src="./../" alt="" />
    </div>
  );
};

export default Details;

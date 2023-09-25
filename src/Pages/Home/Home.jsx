import { useOutletContext } from "react-router-dom";
import Card from "../../Components/Card/Card";

const Home = () => {
  const allData = useOutletContext();
  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 ">
      {allData.map((data) => (
        <Card key={data.id} data={data}></Card>
      ))}
    </div>
  );
};

export default Home;

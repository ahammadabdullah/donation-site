import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";

const Home = () => {
  const AllData = useLoaderData([]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
      {AllData.map((data) => (
        <Card key={data.id} data={data}></Card>
      ))}
    </div>
  );
};

export default Home;

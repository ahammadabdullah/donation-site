import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-[1320px] mx-auto mb-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

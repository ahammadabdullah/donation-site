import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const SecondLayout = () => {
  return (
    <div>
      <div className="pb-10">
        <Navbar></Navbar>
      </div>
      <div className="max-w-[1320px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default SecondLayout;

import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const SecondLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1320px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default SecondLayout;

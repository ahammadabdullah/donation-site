import { useEffect } from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const SecondLayout = () => {
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Donation Campaign";
    } else {
      document.title = loc.pathname.replace("/", " ");
    }
    if (loc.state) {
      document.title = ` ${loc.state}`;
    }
  }, [loc.pathname, loc.state]);
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

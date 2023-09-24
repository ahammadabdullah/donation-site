import Hero from "./Hero";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="bg-[url('/images/header-bg-up.png')]  lg:h-[600px] h-[450px]">
      <Navbar></Navbar>
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
};

export default Header;

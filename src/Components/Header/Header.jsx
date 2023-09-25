import Hero from "./Hero";
import Navbar from "./Navbar/Navbar";

const Header = ({ handleSearch, query, setQuery }) => {
  return (
    <div className="bg-[url('/images/header-bg-up.png')]  lg:h-[600px] h-[450px]">
      <Navbar></Navbar>
      <div>
        <Hero
          handleSearch={handleSearch}
          query={query}
          setQuery={setQuery}
        ></Hero>
      </div>
    </div>
  );
};

export default Header;

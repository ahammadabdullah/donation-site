import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useEffect, useState } from "react";
const MainLayout = () => {
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
  const data = useLoaderData();
  const [results, setResults] = useState(data);
  const [query, setQuery] = useState();
  const handleSearch = () => {
    const filteredResults = data.filter((item) =>
      item.category.includes(query)
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <Header
        handleSearch={handleSearch}
        query={query}
        setQuery={setQuery}
      ></Header>
      <div className="max-w-[1320px] mx-auto mb-20">
        <Outlet context={results}></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

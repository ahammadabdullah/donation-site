import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Details from "../Pages/Home/Details/Details";
import SecondLayout from "../Layout/SecondLayout";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch("/Data.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Data.json"),
      },
    ],
  },
  {
    path: "/",
    element: <SecondLayout></SecondLayout>,
    children: [
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/home/:id",
        element: <Details></Details>,
        loader: () => fetch("/Data.json"),
      },
    ],
  },
]);

export default myRoute;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default myRoute;

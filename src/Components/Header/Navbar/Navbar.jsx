import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-10 items-center justify-between pt-10 sm:px-0 md:px-5 lg:px-0">
      <div>
        <img src="/images/Logo.png" alt="" />
      </div>
      <ul className="flex gap-10 font-bold text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 border-b-2 border-red-400"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 border-b-2 border-red-400"
                : ""
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-400 border-b-2 border-red-400"
                : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

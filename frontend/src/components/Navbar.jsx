import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#07170a] text-white">
      <nav className="flex justify-between">
        <h1 className="p-4 animate-bounce font-medium">Track your progress</h1>
        <ul className="flex justify-end p-4 gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gfg-users">GFG-Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

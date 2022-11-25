import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="flex gap-2 ">
      <li>
        <Link to="/update"> update </Link>
      </li>
      <li>
        <Link to="/demo"> demo </Link>
      </li>
      <li>
        <Link to="/"> home </Link>
      </li>
      <li>
        <Link to="/register"> register </Link>
      </li>
      <li>
        <Link to="/login"> login </Link>
      </li>
      <li>
        <Link to="/tail"> tailwind </Link>
      </li>
  
    </ul>
  );
};

export default Header;

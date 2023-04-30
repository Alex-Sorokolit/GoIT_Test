import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tweets" state={{ from: location }}>
            Tweets
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Home;

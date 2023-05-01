import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <h1>Home page</h1>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tweets" className={css.link} state={{ from: location }}>
            Tweets
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Home;

import React from "react";
import Section from "components/Section";
import List from "components/List";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state.from ?? "/";
  return (
    <Section>
      <NavLink to={backLinkHref}>Go Back</NavLink>
      <List />
    </Section>
  );
};

export default Tweets;

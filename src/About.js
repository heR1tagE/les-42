import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Team from "./Team";
import History from "./History";

const About = () => {
  return (
    <div>
      <h2>Це сторінка про нас</h2>
      <nav>
        <Link to="team">Наша команда</Link> |{" "}
        <Link to="history">Наша історія</Link>
      </nav>
      <Routes>
        <Route path="team" element={<Team />} />
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
};

export default About;

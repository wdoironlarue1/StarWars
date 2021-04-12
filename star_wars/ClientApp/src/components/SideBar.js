import React from "react";
import PropTypes from "prop-types";

import "./SideBar.css";

const SideBar = ({ options, setSelected, isWookiee }) => {

  const createOptionsFromProps = () => {
    return options.map((movie) => (
      <div className="sidebar-option" onClick={() => setSelected(movie.episodeId)} key={movie.episodeId}>
          {movie.title}
      </div>
    ));
  };

  return (
    <div className="sidebar">
      <h3>{isWookiee ? "Caorarc Ohrarcc Wwahanscc" : "Star Wars Films"}</h3>
      {createOptionsFromProps()}
    </div>
  );
};

SideBar.propTypes = {
  options: PropTypes.array,
};

export default SideBar;

import React from "react";

import "./MovieInfo.css";

const MovieInfo = ({ movie, isWookiee, onClickTranslate }) => {
  // converts int to roman numeral string
  // assumes int < 39 (XXXIX)
  const romanNumeralFromInt = (int) => {
    let result = "";
    const values = [10, 9, 5, 4, 1];
    const strs = ["X", "IX", "V", "IV", "I"];
    for (let i = 0; i < values.length; i++) {
      while (int >= values[i]) {
        int -= values[i];
        result += strs[i];
      }
    }
    return result;
  };

  const crawlText = () => {
    const paragraphs = movie.openingCrawl.split("\r\n\r\n");
    return paragraphs.map((paragraph, index) => (
      <p className="movie-info-crawl-p" key={index}>
        {paragraph + "\r\n"}{" "}
      </p>
    ));
  };

  const buttonText = isWookiee
    ? "aorcrawhcanraaowo akrarrwo aooo wowhrranahcac"
    : "translate page to Wookiee";

  return (
    <div className="movie-info-container">
      {movie ? (
        <>
          <div className="movie-info-header">
            <p>
              {`${isWookiee ? "Cwoanwooaaowowa Wwahansc:" : "Selected Film:"} ${
                movie.title
              }`}
              <button onClick={onClickTranslate} style={{ float: "right" }}>
                {" "}
                {buttonText}
              </button>
            </p>
            <p style={{ marginBottom: "20px" }}>
              {`${isWookiee ? "Rcwoanworacwowa:" : "Released:"} ${
                movie.releaseDate
              }`}
            </p>
          </div>
          <div className="movie-info-fade"></div>
          <div className="star-wars">
            <div className="movie-info-crawl">
              <div className="movie-info-title">
                <p>{`${
                  isWookiee ? "Woakahcoowawo" : "Episode"
                } ${romanNumeralFromInt(movie.episodeId)}`}</p>
                <h1>{movie.title}</h1>
              </div>
              {crawlText()}
            </div>
          </div>
        </>
      ) : (
        <>
          {isWookiee
            ? "Cwoanwooaao ra wwahansc oowh aoacwo anwowwao aooo hoahwooh aoacwo oarcraohan ooakwowhahwhrr!"
            : "Select a film on the left to view the crawl opening!"}
          <button onClick={onClickTranslate} style={{ float: "right" }}>
            {buttonText}
          </button>
        </>
      )}
    </div>
  );
};

export default MovieInfo;

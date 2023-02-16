import React, { useContext, useEffect, useState } from "react";
import UiContext from "../../contexts/UiContext";
import "./index.css";

const MovieDetailCard = ({ movieDetail }) => {
  // console.log("each movie detail", movieDetail);
  // const tempMovieDetail = {
  //   Title: "Sherlock Holmes: A Game of Shadows",
  //   Year: "2011",
  //   imdbID: "tt1515091",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg",
  // };
  const { isDarkMode } = useContext(UiContext);

  return (
    <div
      style={{
        backgroundImage: `url(${movieDetail.Poster})`,
      }}
      className="movieDetailCardWrapper"
    ></div>
  );
};

export default MovieDetailCard;

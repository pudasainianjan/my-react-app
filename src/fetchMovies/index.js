import React, { useState, useEffect } from "react";
import { PageHeader, Tag, Row, Col, Spin } from "antd";
import { message, Skeleton } from "antd";
import Title from "antd/lib/typography/Title";
import { fetchNewMovie } from "./api";
import { fakeMovieData } from "./fakeMovieData";
import "./style.css";
import MovieDetailCard from "./movieDetailCard/MovieDetailCard";
import MoviePageHeader from "./moviePageHeader/MoviePageHeader";
import MoviePageBanner from "./moviePageBanner/MoviePageBanner";

const ShowMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(fakeMovieData);

    // fetchNewMovie("movie", "game of")
    //   .then((movieData) => {
    //     setMovies(movieData);
    //   })
    //   .catch((err) => {
    //     //in case if any error occurs during fetching you can update states here....
    //   });
  }, []);

  useEffect(() => {
    console.log("data from api --->", movies[0]);
  }, [movies]);

  //HELPER FUNCTIONS

  return (
    <div className="movies-page">
      <MoviePageHeader />
      <MoviePageBanner />
      <h1 className="popularMovies">Popular Movies</h1>
      <div className="movieDetailsWrapper">
        {movies.map((movie) => (
          <MovieDetailCard movieDetail={movie} />
        ))}
      </div>
    </div>
  );
};

export default ShowMovie;

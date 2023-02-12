import React, { useState, useEffect } from "react";
import { PageHeader, Tag, Row, Col, Spin } from "antd";
import { message, Skeleton } from "antd";
import Title from "antd/lib/typography/Title";
import "./style.css";
import { fetchNewMovie } from "./api";

const ShowMovie = () => {
  const [movie, setMovies] = useState(null);
  useEffect(() => {
    // const url = window.location.pathname.split("/");
    // const personName = url[2];

    fetchNewMovie("movie", "game of")
      .then((movieData) => {
        setMovies(movieData);
      })
      .catch((err) => {
        //in case if any error occurs during fetching you can update states here....
      });
  }, []);

  useEffect(() => {
    console.log("data from api --->", movie);
  }, [movie]);

  //HELPER FUNCTIONS

  return (
    <>
      <h1>Show Movies</h1>
    </>
  );
};

export default ShowMovie;

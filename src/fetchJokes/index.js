import React, { useState, useEffect } from "react";
import { PageHeader, Tag, Row, Col, Spin } from "antd";
import { message, Skeleton } from "antd";
import Title from "antd/lib/typography/Title";
import "./style.css";
import { fetchNewJoke } from "./api";

const ShowJoke = () => {
  const [jokes, setJokes] = useState(null);
  useEffect(() => {
    // const url = window.location.pathname.split("/");
    // const personName = url[2];

    fetchNewJoke("John", "Ram")
      .then((jokeData) => {
        setJokes(jokeData);
      })
      .catch((err) => {
        //in case if any error occurs during fetching you can update states here....
      });
  }, []);

  useEffect(() => {
    console.log("data from api --->", jokes);
  }, [jokes]);

  //HELPER FUNCTIONS

  return (
    <>
      <h1>Show Jokes</h1>
    </>
  );
};

export default ShowJoke;

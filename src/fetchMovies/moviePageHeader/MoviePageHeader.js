import React, { useContext, useEffect, useState } from "react";
import { Input, Space } from "antd";
import UiContext from "../../contexts/UiContext";
import "./style.css";

const { Search } = Input;

const MoviePageHeader = () => {
  const { isDarkMode } = useContext(UiContext);

  return (
    <div className="movie-header">
      <section className="movieTypeHeaderWrap">
        <div className="movieTypeHeader">Movies</div>
        <div className="movieTypeHeader">TV Shows</div>
        <div className="movieTypeHeader noMargin">Documentaries</div>
      </section>
      <section className="movieHeaderBrand">
        <img
          height={"100%"}
          width={"100%"}
          src="/images/moviePage/logo.png"
          alt="logo"
        />
      </section>
      <section className="searchBox">
        <div>
          <Search
            placeholder="search movies here"
            onSearch={() => {}}
            enterButton
          />
        </div>
      </section>
    </div>
  );
};

export default MoviePageHeader;

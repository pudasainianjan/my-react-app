import React, { useContext, useEffect, useState } from "react";
import UiContext from "../../contexts/UiContext";
import "./style.css";

const MoviePageBanner = () => {
  const { isDarkMode } = useContext(UiContext);

  return (
    <div className="movie-banner">
      <section>
        <h1 className="bannerBigText">STAR WARS</h1>
      </section>
      <section>
        <h1 className="bannerMediumText">THE RISE OF SKYWALKER</h1>
      </section>
      <section>
        <h1 className="bannerSmallText">
          The surviving members of the resistance face the First Order once
          again, and the legendary conflict between the Jedi and the Sith
          reaches its peak bringing the Skywalker saga to its end.{" "}
        </h1>
      </section>
      <section>
        <button className="movieBannerWatchButton">
          <text>Watch Now</text>
        </button>
      </section>
    </div>
  );
};

export default MoviePageBanner;

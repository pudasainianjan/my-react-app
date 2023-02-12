import { message } from "antd";
import axios from "axios";

const API_KEY = "3139629c";

//fetch('http://www.omdbapi.com/?t="game of"&type="series"&apikey=3139629c').then(res=>res.json()).then(data=> console.log(data))

export const fetchNewMovie = (movieType, movieName) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://www.omdbapi.com/?type=${movieType}&s=${movieName}&apikey=${API_KEY}`
      )
      .then((data) => {
        console.log("movie data fetched successfully", data);
        resolve(data);
      })
      .catch((err) => {
        message.error("Fetching movie failed..." + err.message, 3.5);
        console.log("Fetching movie failed...", err);
        reject(err);
      });
  });
};

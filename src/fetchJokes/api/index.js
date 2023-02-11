import { message } from "antd";
import axios from "axios";

export const fetchNewJoke = (firstName, lastName) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((data) => {
        console.log("jokes data fetched successfully", data);
        resolve(data);
      })
      .catch((err) => {
        message.error("Fetching jokes failed..." + err.message, 3.5);
        reject(err);
      });
  });
};

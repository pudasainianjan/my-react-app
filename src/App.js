import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/reset.css";
import Home from "./layout";

function App() {
  useEffect(() => {
    console.log("app just rendered");
  }, []);

  return <Home />;
}

export default App;

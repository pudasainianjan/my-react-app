import React, { useEffect } from "react";
import "./App.css";
import "antd/dist/reset.css";
import Home from "./layout";
import { UiContextProvider } from "./contexts/UiContext";

function App() {
  useEffect(() => {
    console.log("app just rendered");
  }, []);

  return (
    <UiContextProvider>
      <Home />
    </UiContextProvider>
  );
}

export default App;

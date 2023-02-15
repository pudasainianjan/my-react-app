import React, { useContext, useEffect, useState } from "react";

import { Switch } from "antd";
import UiContext from "../../contexts/UiContext";

const ToggleDarkMode = () => {
  const { isDarkMode, setDarkMode } = useContext(UiContext);
  const [input, setInput] = useState(isDarkMode);

  //   useEffect(() => {
  //     setInput(input);
  //   }, [isDarkMode]);

  //   useEffect(() => {
  //     setDarkMode(input);
  //   }, [input]);

  return (
    <Switch
      checked={isDarkMode}
      checkedChildren="Dark"
      unCheckedChildren="Light"
      onChange={() => {
        setDarkMode(!isDarkMode);
      }}
    />
  );
};

export default ToggleDarkMode;

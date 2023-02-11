import React, { useEffect } from "react";
import { Input } from "antd";

const SearchComponent = ({ componentName, getSearchTerm }) => {
  const myComponentNameFromProps = componentName;

  useEffect(() => {
    getSearchTerm("Type anything to see changes below....");
    console.log("rendered by component", myComponentNameFromProps);
  }, []);
  return (
    <Input
      placeholder="Basic usage"
      onChange={(e) => getSearchTerm(e.target.value)}
    />
  );
};

export default SearchComponent;

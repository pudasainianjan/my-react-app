import { notification } from "antd";
import { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";

const App = () => {
  //using state in component
  const [currentSearch, setCurrentSearch] = useState("");

  //this is callback function that gets called by its child search term component to update data in App component
  const getSearchTermFromChildComponent = (searchTerm) => {
    console.log("this page is rendered by" + " ", searchTerm);
    setCurrentSearch(searchTerm);
  };

  const openNotification = () => {
    notification.open({
      description: currentSearch,
    });
  };

  useEffect(() => {
    //fetch from api here, this function withh trigger everytime you change search term
    currentSearch && openNotification();
  }, [currentSearch]);

  return (
    <div>
      <SearchComponent
        componentName="SearchComponent"
        getSearchTerm={getSearchTermFromChildComponent}
      />
      Current Searh term:
      <h1>{currentSearch}</h1>
    </div>
  );
};
export default App;

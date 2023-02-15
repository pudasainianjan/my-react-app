import React from "react";

const initialState = { isDarkMode: false };

const UiContext = React.createContext(initialState); //note: keep it capital C

export class UiContextProvider extends React.Component {
  state = initialState;

  setDarkMode = (isDark) => {
    this.setState({ isDarkMode: isDark });
  };

  render() {
    return (
      <UiContext.Provider
        value={{ ...this.state, setDarkMode: this.setDarkMode }}
      >
        {this.props.children}
      </UiContext.Provider>
    );
  }
}

export default UiContext;

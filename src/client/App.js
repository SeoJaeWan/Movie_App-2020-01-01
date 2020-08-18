import React from "react";

import MovieContainer from "../container/MovieContainer";
import { AppStyle, GlobalStyle } from "./AppStyle";

const App = () => {
  return (
    <AppStyle>
      <GlobalStyle />
      <MovieContainer />
    </AppStyle>
  );
};

export default App;

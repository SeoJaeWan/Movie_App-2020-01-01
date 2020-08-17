import React from "react";
import styled, { css } from "styled-components";
import MovieContainer from "./container/MovieContainer";

const App = () => {
  let sizes = {
    desktop: 1024,
    tablet: 768,
  };

  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;

    return acc;
  }, {});

  const AppStyle = styled.div`
    margin-top: 100px;

    width: 100%;
    ${media.desktop`width: 768px;`}
    ${media.tablet`width: 100%;`}
    
    .movies {
      display: flex;

      flex-wrap: wrap;
      justify-content: space-around;
    }
  `;

  console.log("render now");
  return (
    <AppStyle>
      <MovieContainer />
    </AppStyle>
  );
};

export default App;

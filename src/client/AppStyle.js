import styled, { createGlobalStyle } from "styled-components";
import { media } from "../lib/responsive";

export const AppStyle = styled.div`
  margin-top: 100px;

  width: 100%;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}

  .movies {
    display: flex;

    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: 140px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Lustria";
    font-style: normal;
    font-weight: 400;
    src: url("../assets/fonts/lustria/lustria-v7-latin-regular.eot") format("embedded-opentype");

    src: local("Lustria"), local("Lustria-Regular"),
      url("../assets/fonts/lustria/lustria-v7-latin-regular.eot")
      format("embedded-opentype"),
      url("../assets/fonts/lustria/lustria-v7-latin-regular.woff2")
      format("woff2"),

      url("../assets/fonts/lustria/lustria-v7-latin-regular.woff") format("woff"),
      url("../assets/fonts/lustria/lustria-v7-latin-regular.ttf")
      format("truetype"),

      url("../assets/fonts/lustria/lustria-v7-latin-regular.svg#Lustria") format("svg");
  }

  @font-face  {
    font-family: "중나좋체";

    src: url(${require("../assets/fonts/BMJUA.eot")});
      src: url(${require("../assets/fonts/BMJUA.woff2")}) format('woff2'),
      url(${require("../assets/fonts/BMJUA.woff")}) format('woff'),
      url(${require("../assets/fonts/BMJUA.ttf")}) format('ttf');
  }

  body{
    margin: 0;
    font-family:"Lustria", "중나좋체"
  }
`;

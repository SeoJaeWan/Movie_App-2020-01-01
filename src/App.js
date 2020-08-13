import React from "react";
import Movie from "./components/movie";
import styled, { css } from "styled-components";
import SelectBar from "./components/select";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const time = new Date();
  console.log(time.getMonth() + 1);
  const [state, setState] = useState({
    isLoading: true,
    movies: [],
    month: time.getMonth() + 1,
    year: time.getFullYear(),
  });

  useEffect(() => {
    _getMovies();
  }, []);

  const _getMovies = async () => {
    const movies = await _callApi();
    console.log(movies);
    movies &&
      setState({
        movies,
        isLoading: false,
      });
  };

  const _callApi = () => {
    return fetch(
      "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json.jsp?collection=kmdb_new&type=극영화&releaseDts=" +
        state.year +
        (state.month < 10 ? "0" + state.month : state.month) +
        "01&releaseDte=" +
        state.year +
        (state.month < 10 ? "0" + state.month : state.month) +
        `31&releaseDte=20191231&listCount=500&&sort=prodYear&ServiceKey=${process.env.REACT_APP_SERVICEKEY}`
    )
      .then((response) => response.json())
      .then((json) => json.Data[0].Result)
      .catch((err) => console.log(err));
  };

  const _renderMovie = (movies) => {
    return movies.map((movie) => (
      <Movie
        className="Movie"
        key={movie.DOCID}
        title={movie.title}
        image={
          movie.posters.indexOf("|") !== -1
            ? movie.posters.split("|")[0]
            : movie.posters
        }
        genres={movie.genre}
        synopsis={movie.plot}
        year={movie.repRlsDate}
      />
    ));
  };

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

  const { isLoading, movies } = state;

  console.log("render now");
  return (
    <AppStyle>
      {console.log(process.env.REACT_APP_SERVICEKEY)}
      {isLoading ? (
        <div className="loader">
          <img src={require("./assets/img/loading.gif")} alt="loading"></img>
        </div>
      ) : (
        <div className="movies">{_renderMovie(movies)}</div>
      )}
    </AppStyle>
  );
};

export default App;

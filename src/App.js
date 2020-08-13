import React, { Component } from "react";
import Movie from "./components/movie";
import styled, { css } from "styled-components";
import SelectBar from "./components/select";

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

class App extends Component {
  time = new Date();

  state = {
    isLoading: true,
    movies: [],
    month: this.time.getMonth() + 1,
    year: this.time.getFullYear(),
  };

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    console.log(movies);
    movies &&
      this.setState({
        movies,
        isLoading: false,
      });
  };

  _callApi = () => {
    return fetch(
      "http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json.jsp?collection=kmdb_new&type=극영화&releaseDts=" +
        this.state.year +
        (this.state.month < 10 ? "0" + this.state.month : this.state.month) +
        "01&releaseDte=" +
        this.state.year +
        (this.state.month < 10 ? "0" + this.state.month : this.state.month) +
        `31&releaseDte=20191231&listCount=500&&sort=prodYear&ServiceKey=${process.env.REACT_APP_SERVICEKEY}`
    )
      .then((response) => response.json())
      .then((json) => json.Data[0].Result)
      .catch((err) => console.log(err));
  };

  sizes = {
    desktop: 1024,
    tablet: 768,
  };

  media = Object.keys(this.sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${this.sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;

    return acc;
  }, {});

  AppStyle = styled.div`
    width: 100%;
    ${this.media.desktop`width: 768px;`}
    ${this.media.tablet`width: 100%;`}
    display: flex;
    justify-content: center;
  `;

  render() {
    const { isLoading, movies } = this.state;

    console.log("render now");
    return (
      <this.AppStyle>
        {console.log(process.env.REACT_APP_SERVICEKEY)}
        {isLoading ? (
          <div className="loader">
            <img src={require("./assets/img/loading.gif")} alt="loading"></img>
          </div>
        ) : (
          <div className="movies">{_renderMovie(movies)}</div>
        )}
      </this.AppStyle>
    );
  }
}

export default App;

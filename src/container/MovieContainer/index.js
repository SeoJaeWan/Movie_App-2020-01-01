import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Movie from "../../components/movie";
import { changeField, getMovieInfo } from "../../modules/movie";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const { option, movies, loading } = useSelector(({ movie, loading }) => ({
    option: movie.option,
    movies: movie.movies,

    loading: loading["movie/GET_MOVIE_INFO"],
  }));

  useEffect(() => {
    const { year, month } = option;
    const time = new Date();

    dispatch(
      getMovieInfo({
        year: year ? year : time.getFullYear(),
        month: month ? month : time.getMonth() + 1,
      })
    );
  }, [option, dispatch]);

  const renderMovie = () => {
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

  return (
    <div>
      {loading ? (
        <div className="loader">
          <img
            src={require("../../assets/img/loading.gif")}
            alt="loading"
          ></img>
        </div>
      ) : (
        <div className="movies">{renderMovie()}</div>
      )}
    </div>
  );
};

export default MovieContainer;

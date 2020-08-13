import React from "react";
import PropsTypes from "prop-types";
import { MovieStyle } from "../../styles/moive/MovieStyle.js";

const Movie = ({ title, image, genres, synopsis, year }) => {
  return (
    <MovieStyle>
      <div className="Movie_img">
        {image.length > 1 ? (
          <img src={image} alt={title} className="Movie_Poster" />
        ) : (
          <img
            src={require("../../assets/img/noimg.jpg")}
            alt="noimg"
            className="Movie_Poster"
          />
        )}
        ;
      </div>
      <div className="Movie_data">
        <h3 className="Movie_title">{title}</h3>
        <h5 className="Movie_year">{year}</h5>
        <p className="Movie_sub">
          <span className="Movie_genres">{genres}</span>
          <span>
            <a
              href={
                "https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=" +
                title
              }
              target="_Blank"
              rel="noopener noreferrer"
            >
              찾아보기
            </a>
          </span>
        </p>
        <p className="Movie_synopsis">{synopsis.slice(0, 120)}...</p>
      </div>
    </MovieStyle>
  );
};

Movie.propTypes = {
  title: PropsTypes.string,
  image: PropsTypes.string,
  genres: PropsTypes.string,
  synopsis: PropsTypes.string,
};

export default Movie;

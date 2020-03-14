import React from "react";
import PropsTypes from "prop-types";
import { MovieStyle } from "./MovieStyle.js";

/*
class Movie extends Component {

    static propsTypes = {
        title : PropsTypes.string.isRequired,
        image:PropsTypes.string.isRequired
    }

    render() {
        console.log(this.props);
        return (
            <div>
               <MoviePoster movieImg = {this.props.image}/>
                <h1>{this.props.title}</h1> 
            </div>
        );
    }
}

클래스 컴포넌트를 만들어서 사용해도 작동은 정상적으로 가능하지만
MoivePoster은 componentWillMount, update state 등등이 필요가 없다.
오직 한개의 props만 있으면 된다.  


class MoviePoster extends Component{

    static propsTypes = {
        movieImg:PropsTypes.string.isRequired
    }

    render(){
        return (
            <img src = {this.props.movieImg} alt = 'Movie Poster'/>
        );
    }
}

 <div className="Movie_Colums">
        <MoviePoster movieImg={image} alt={title} />
      </div>
      <div className="Movie_Colums">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenres genre={genre} key={index} />
          ))}
        </div>
        <div>Rating : {rating}</div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>
      <h1>{title}</h1>
*/
function Movie({ title, image, genres, synopsis, year }) {
  return (
    <MovieStyle>
      <div className="Movie_img">
        {image.length > 1 ? (
          <img src={image} alt={title} className="Movie_Poster" />
        ) : (
          <img
            src={require("../Img/noimg.jpg")}
            alt="nmoimg"
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
}

Movie.propTypes = {
  title: PropsTypes.string,
  image: PropsTypes.string,
  genres: PropsTypes.string,
  synopsis: PropsTypes.string
};

export default Movie;
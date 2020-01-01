import React, { Component } from "react";
import "./App.css";
import Movie from "./components/Movie";
import axios from "axios";

const _renderMovie = movies => {
  return movies.map(movie => (
    <Movie
      key={movie.id}
      title={movie.title_english}
      image={movie.medium_cover_image}
      genres={movie.genres}
      synopsis={movie.synopsis}
      rating={movie.rating}
      year={movie.year}
    />
  ));
};

/*
  willMoint() 는 렌더링이 완료되기 전이기 때문에 여기서 로딩 화면을 띄우고
  didMount()는 렌더링이 완료된 것을 나타내기 때문에 여기서 로딩창을 지우면 된다!

  setTimeout()은 몇초동안 기다리는 함수
*/

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentWillMount() {
    console.log("will mount");
  }

  /*
    fetch를 쓰는게 AJAX를 쓰려고 하는건데 그 요소로는
    json, xml 등등이 있고 이걸 쉽게 가져오려고 저걸 씀

    이걸 쓰는 이유는 뭔갈 불러올때 페이지를 새로고침 등등 하기 싫어서 사용한다.

    또 AJAX는 비동기화 작업이다. 2개의 API를 동시에 사용한다고 했을 때
    동기식은 한개가 끝나야 나머지가 작업을 시작하는데 이는 한쪽이 속도가 느릴경우 문제가 있다.

    AJAX의 promises는 하나의 작업이 끝나든 만들 두번째 작업을 수행한다.
    즉 다른 작업과 전혀 관련없이 자신의 작업을 한다.

    promises의 또다른 기능은 시나리오를 잡는 방법을 만들어준다.
    즉 시나리오가 있고 이를 관리할 수 있다.

    then은 fetch를 하고 추가로 작업할 것으로 1개의 오브젝트를 사용할 수 있다. 이는 response이고
    catch는 에러가 나면 이것을 수행해라! 라는 것이다
  */

  componentDidMount() {
    this._getMovies();
  }
  /*
    async 는 위에서 말한 비동시화 방식으로 
    다른 작업과 동시에 작동되는 것을 말하며

    await는 뒤에있는 this._callApi() 기능이 끝나는 것을 기다리고,
    그 값을 앞에있는 moives에 넣는다 

    그러므로 this.setState({})는 this._callApi() 기능이 끝나기 전까지 실행되지 않는다
  
    또 this.setState() 안에 있는 movies는 모던자바스크립트 방식으로
    movies : movies를 줄여서 적었다 보면된다
    
  바로 아래 getMoives 함수는 fecth를 사용할떄 쓰는 함수이다

  _getMovies = async () => {
    const movies = await this._callApi();
    console.log(movies);
    this.setState({
      movies
    });
  };
  */

  /*
  fetch를 사용하려고 했지만 axios를 사용하기로 하였다.
  이것은 fetch 위에 단에서 움직이는 것이라고 생각하면 되고 먼저 yarn add axios로 설치한다
  하지만 axios는 속도가 느리기때문에 앞에 await를 사용하여 먼저 axios가 완료되기까지 기다리도록 한다
  
  아래처럼 {data: {data:{movies}}}를 하지 않으면 movies를 사용할 때 
  data.data.movies 이렇게 사용해야하기 떄문에 간단하게 하려고 위와같이 작업을 해준다
  */

  _getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
    );

    console.log(movies);

    this.setState({ movies, isLoading: false });
  };
  /*
  이것은 fetch를 사용할때의 함수  

  _callApi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  */
  render() {
    const { isLoading, movies } = this.state;

    console.log("render now");
    return (
      <div className="App">
        {isLoading ? (
          <div className="loader">Loading</div>
        ) : (
          <div className="movies">{_renderMovie(movies)}</div>
        )}
      </div>
    );
  }
}

export default App;

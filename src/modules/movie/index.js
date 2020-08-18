import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

import * as movieAPI from "../../lib/api/moive";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";

const CHANGE_FILED = "movie/CHANGE_FILED";
const [
  GET_MOVIE_INFO,
  GET_MOVIE_INFO_SUCCESS,
  GET_MOVIE_INFO_FAILURE,
] = createRequestActionTypes("movie/GET_MOVIE_INFO");

export const changeFiled = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);
export const getMovieInfo = createAction(GET_MOVIE_INFO, ({ year, month }) => ({
  year,
  month,
}));

const getMovieInfoSaga = createRequestSaga(GET_MOVIE_INFO, movieAPI.getMoives);

export function* movieSaga() {
  yield takeLatest(GET_MOVIE_INFO, getMovieInfoSaga);
}

const initialState = {
  option: {
    month: null,
    year: null,
  },

  movies: [],
};

const movie = handleActions(
  {
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [GET_MOVIE_INFO_SUCCESS]: (state, { payload: movieInfo }) => ({
      ...state,
      movies: movieInfo.Data[0].Result,
    }),
  },
  initialState
);

export default movie;

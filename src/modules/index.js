import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import movie, { movieSaga } from "./movie";
import loading from "./loading";

const rootReducer = combineReducers({
  movie,
  loading,
});

export function* rootSaga() {
  yield all([movieSaga()]);
}

export default rootReducer;

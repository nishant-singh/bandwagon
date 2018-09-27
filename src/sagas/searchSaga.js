import { put, takeLatest, all } from 'redux-saga/effects';
import config from "../config/baseConfig";

import actions from "../actions/constants";

function* fetchArtists(action) {
  const artistApi = `${config.base_url}${action.payload.name}?app_id=${config.app_id}`,
    eventApi = `${config.base_url}${action.payload.name}/events?app_id=${config.app_id}`;
  yield put({
    type: actions.SEARCH_STARTED
  });
  try { 
    const json = yield Promise.all([fetchData(artistApi), fetchData(eventApi)]),
          artist = { ...json[0], events: json[1]};  
    
    yield put({
      type: actions.SEARCH_COMPLETED,
      payload: artist,
    }); 
  } catch (error) {
    yield put({
      type: actions.ERROR_FETCHING_DATA,
      payload: {loading: false},
    });
  }
}
function fetchData(api) {
  return fetch(api).then(response => response.json());
}

function* actionWatcher() {
     yield takeLatest(actions.SEARCH, fetchArtists)
}
export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}
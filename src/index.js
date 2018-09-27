import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import registerServiceWorker from './registerServiceWorker';

import App from './components/app/App';
import reducer from "./reducers/search";
import rootSaga from "./sagas/searchSaga";
import './index.scss';
import { loadState, saveState } from "./caching/localStorage";
import debounce from "./utils/debounce";

const middleware = createSagaMiddleware();
const cachedState = loadState();
const store = createStore(reducer, cachedState, applyMiddleware(middleware));
const setStateInCache = debounce(saveState, 1000);

store.subscribe(()=>{
    setStateInCache(store.getState());
})
middleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

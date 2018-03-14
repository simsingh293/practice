import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createHistory } from "history"

import counterApp from './reducers'
import MainComponent from './MainComponent'

const browserHistory = useRouterHistory(createHistory)({queryKey: false});

const store = createStore(
    combineReducers({
        global: counterApp,
        routing: routerReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route path = "/" component = {MainComponent}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
)

new webpack.NormalModuleReplacementPlugin(
    /createBrowserHistory/,
    require.resolve("....../node_modules/react-router/lib/createMemoryHistory.js")
)
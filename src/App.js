import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory as createHistory } from 'history';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

import routes from './constants/routes';
import './assets/alice-carousel.css';
import 'antd/dist/antd.css';
import './App.scss';


const history = createHistory();
const App = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(ReduxThunk)),
  );
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className='App'>
          <Switch>
            {Object.values(routes).map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
                history={history}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

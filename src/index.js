import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import App from './App';
import './index.css';
import Navbar from './Navbar';
import registerServiceWorker from './registerServiceWorker';
import rootReducer, { rootEpic } from './store';
import { fetchTodos } from './store/actions';
import TodosPage from './TodosPage';

const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  {},
  composeEnhancers(applyMiddleware(routerMiddleware(history), epicMiddleware))
);

epicMiddleware.run(rootEpic);

store.dispatch(fetchTodos.request());

const NotFound = () => <div>Miss</div>;

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/todos" component={TodosPage} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

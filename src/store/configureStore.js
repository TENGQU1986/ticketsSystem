import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/auth'
import thunk from 'redux-thunk';
import { ticketsReducer } from '../reducers/tickets'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      tickets: ticketsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
return store;
};

// Store creation

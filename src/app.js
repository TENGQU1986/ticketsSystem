import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { addTicket, removeTicket } from './actions/tickets';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('./')
  }
});

const ticketOne = store.dispatch(addTicket({title: 'concert', description: 'Jay chou', status:'in-progress'}));
const ticketTwo = store.dispatch(addTicket({title: 'air', description: 'LA', status: 'done'}));
const ticketThree = store.dispatch(addTicket({title: 'Bus', description: 'to the city', status:'todo'}));
// store.dispatch(removeTicket({ id: ticketOne.ticket.id}));
// store.subscribe(() => console.log(store.getState()));
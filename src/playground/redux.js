import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//demo State

const demoState = {
  ticket: [{
    id: 'as;dlkjfa;sdlkfj',
    title: 'tecket 1',
    description: 'some description',
    assignee: 'agentA',
    criticality: '',
    date: 234,
    time: 234
  }]
};

//set action to ADD_TICKET

const addTicket = ({ title = '', description = '', assignee = '', criticality = '', date = 0, time = 0 } = {}) => ({
  type: 'ADD_TICKET',
  ticket: {
    title,
    description,
    assignee,
    criticality,
    date,
    time,
    id: uuid()
  }
});

//set action to REMOVE_TICKET

const removeTicket = ({ id } = {}) => ({
  type: 'REMOVE_TICKET',
  id
});

//set ticket reducer 

const ticketsReducerDefaultState = [];

const ticketsReducer = (state = ticketsReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TICKET':
      return [...state, action.ticket];
    case 'REMOVE_TICKET':
      return state.filter(({ id }) => id !== action.id)
    default: 
      return state;
  }
};

//Store creation

const store = createStore(
  combineReducers({
    tickets: ticketsReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const ticketOne = store.dispatch(addTicket({title: 'concert', description: 'Jay chou'}));
const ticketTwo = store.dispatch(addTicket({title: 'air', description: 'LA'}));
store.dispatch(removeTicket({ id: ticketOne.ticket.id}));

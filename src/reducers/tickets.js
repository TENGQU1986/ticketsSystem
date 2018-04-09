//set ticket reducer 

const ticketsReducerDefaultState = [];

export const ticketsReducer = (state = ticketsReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TICKET':
      return [...state, action.ticket];
    case 'REMOVE_TICKET':
      return state.filter(({ id }) => id !== action.id)
    default: 
      return state;
  }
};
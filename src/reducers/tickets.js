//set ticket reducer 

const ticketsReducerDefaultState = [];

export const ticketsReducer = (state = ticketsReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_TICKET':
      return [...state, action.ticket];
    case 'REMOVE_TICKET':
      return state.filter(({ id }) => id !== action.id);
    case 'MOVE_IN_PROGRESS':
      return {
        ...state,
        status: 'in-progress'
      };
    case 'MOVE_DONE':
      return {
        ...state,
        status: 'done'
      };
    default: 
      return state;
  }
};
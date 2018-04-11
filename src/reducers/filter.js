const filterReducerDefaultState = {
  status: 'todo'
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'MOVE_TO_IN_PROGRESS':
      return {
        status: 'in-progress'
      };
    case 'MOVE_TO_DONE':
      return {
        status: 'done'
      };
    default:
      return state;
  }
}
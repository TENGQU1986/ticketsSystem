//set move to in-progress

export const moveToInProgress = ({ id } = {}) = ({
  type: 'MOVE_TO_IN_PROGRESS',
  id
});

//set move to done

export const moveToDone = ({ id } ={}) => ({
  type: 'MOVE_TO_DONE',
  id
})
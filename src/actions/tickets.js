import uuid from 'uuid';

//set action to ADD_TICKET

export const addTicket = ({ title = '', description = '', assignee = '', criticality = '', date = 0, time = 0, status = '' } = {}) => ({
  type: 'ADD_TICKET',
  ticket: {
    title,
    description,
    assignee,
    criticality,
    date,
    time,
    id: uuid(),
    status
  }
});

//set action to REMOVE_TICKET

export const removeTicket = ({ id } = {}) => ({
  type: 'REMOVE_TICKET',
  id
});

//set move to in-progress

export const moveInProgress = ({ id } = {}) => ({
  type: 'MOVE_IN_PROGRESS',
  id
});

//set move to done

export const moveDone = ({ id } = {}) => ({
  type: 'MOVE_DONE',
  id
});
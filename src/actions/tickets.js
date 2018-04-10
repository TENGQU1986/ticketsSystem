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
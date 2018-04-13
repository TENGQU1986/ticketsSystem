import React from 'react';
import { connect } from 'react-redux';
import { removeTicket } from '../actions/tickets';

const TicketsListItem = (props, { id }) => {
  const TicketsToDo = props.tickets.filter(ticket => ticket.status === 'todo');
return (
  <div>
    tickets to do
    {TicketsToDo.map((ticket) => {
      return (
        <div key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
          <h4>{ticket.status}</h4>
          <button onClick={() => {
            props.dispatch(removeTicket({ id }))
          }}>Remove</button>
        </div>
      );
    })}
  
    
    
  </div>
);
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  };
};
export default connect(mapStateToProps)(TicketsListItem);
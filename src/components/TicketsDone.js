import React from 'react';
import { connect } from 'react-redux';

const TicketsDone = (props) => {
  const ticketsDone = props.tickets.filter( ticket => ticket.status === 'done');
  return (
    <div>
      tickets done
      {ticketsDone.map((ticket) => {
        return (
          <div key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
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

export default connect(mapStateToProps)(TicketsDone);
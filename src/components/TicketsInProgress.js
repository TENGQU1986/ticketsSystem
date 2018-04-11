import React from 'react';
import { connect } from 'react-redux';

const TicketsInProgress = (props) => {
  const ticketsInProgress = props.tickets.filter( ticket => ticket.status === 'in-progress');
  return (
    <div>
      tickets in progress
      {ticketsInProgress.map((ticket) => {
        return (
          <div key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <button>Move to done</button>
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

export default connect(mapStateToProps)(TicketsInProgress);
import React from 'react';
import { connect } from 'react-redux';
import { removeTicket } from '../actions/tickets';

const TicketsListItem = ({ dispatch, title, description, assignee, criticality, date, time, id }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={() => {
      dispatch(removeTicket({ id }))
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  };
};
export default connect(mapStateToProps)(TicketsListItem);
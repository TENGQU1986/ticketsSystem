import React from 'react';
import { connect } from 'react-redux';
import { moveInProgress } from '../actions/tickets';

const TicketsListItem = (props) => {
  const TicketsToDo = props.tickets.filter(ticket => ticket.status === 'todo');
    const moveInProgress = ({ dispatch, id }) => {
      dispatch(moveInProgress({ id }));
    };
    return (
      <div>
        {TicketsToDo.map((ticket) => {
          return (
            <div key={ticket.id}>
              <h3>{ticket.title}</h3>
              <p>{ticket.description}</p>
              <button onClick={moveInProgress}>Move to progress</button>
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
import React from 'react';
import Tickets from './tickets';
import TicketsForm from './TicketsForm';
import { addTicket } from '../actions/tickets';
import { connect } from 'react-redux';


const DashboardPage = (props) => {
  return (
    <div>
      <h1>Ticket Manage System</h1>
      <Tickets onSubmit={}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Ticket: state.ticket
  };
};

export default connect(mapStateToProps)(DashboardPage);



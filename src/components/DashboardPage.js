import React from 'react';
import TicketsList from './ticketsList';
import TicketsForm from './TicketsForm';
import { addTicket } from '../actions/tickets';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TicketsListItem from './TicketsListItem';
import TicketsInProgress from './TicketsInProgress';
import TiciketsDone from './TicketsDone';
import TicketsDone from './TicketsDone';


const DashboardPage = (props) => {
  return (
    <div>
      <h1>Ticket Manage System</h1>
      <Link to="/create">Add New Ticket</Link>

      <h2>To Do Tickets</h2>
        <TicketsListItem />

      <h2>In Progress Tickets</h2>
        <TicketsInProgress />

      <h2>Done Tickets</h2>
        <TicketsDone />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  };
};

export default connect(mapStateToProps)(DashboardPage);



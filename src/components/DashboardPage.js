import React from 'react';
import TicketsList from './ticketsList';
import TicketsForm from './TicketsForm';
import { addTicket } from '../actions/tickets';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TicketsListItem from './TicketsListItem';



const DashboardPage = (props) => {
  return (
    <div>
      <h1>Ticket Manage System</h1>
      <Link to="/create">Add New Ticket</Link>

      <h2>To Do Tickets</h2>
      {props.tickets.map((ticket) => {
        return <TicketsListItem key={ticket.id} {...ticket}/>
      })}

      <h2>In Process Tickets</h2>
        <p>some tickets in process</p>

      <h2>Done Tickets</h2>
      <p>some tickets done</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  };
};

export default connect(mapStateToProps)(DashboardPage);



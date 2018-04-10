import React from 'react';
import TicketsForm from './TicketsForm';
import { addTicket } from '../actions/tickets';
import { connect } from 'react-redux';


const AddTicketPage = (props) => (
  <div>
    <h1>Add New Ticket</h1>
      <TicketsForm 
        onSubmit={(ticket) => {
          props.dispatch(addTicket(ticket));
          props.history.push('/');
        }}
      />

  </div>
);



export default connect()(AddTicketPage);
import React from 'react';
import AddTicketPage from './AddTicketPage';
import TicketsListItem from './TicketsListItem';

const TicketsList = () => {
  return (
    <div>
      <AddTicketPage />
      <TicketsListItem />
    </div>
  );
}

export default TicketsList;
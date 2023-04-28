import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { InputZone } from './inputForm';
import { useState, useEffect } from 'react';
import { EventDetailsModal } from './EventDetails';
import Modal from 'react-modal';

const localizer = momentLocalizer(moment);

const CalendarView = (props) => {
  const { events } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  function handleEventClick(evt){
    setSelectedEvent(evt)
    setModalIsOpen(true)
  }

  function closeModal(){
    setModalIsOpen(false)
  }
 
  return (
    <div style={{ height: '600px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', width: '100%' }}
        onSelectEvent={handleEventClick}
      />

      {modalIsOpen && <EventDetailsModal isOpen={modalIsOpen} event={selectedEvent} onClose={closeModal}/>}
    </div>
  );
};

export default CalendarView;
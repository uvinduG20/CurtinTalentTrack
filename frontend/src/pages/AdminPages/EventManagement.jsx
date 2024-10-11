// src/pages/AdminPages/EventManagement.jsx
import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventManagement.css';
import { Button, Modal, Box, TextField } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const EventManagement = () => {
  const [events, setEvents] = useState([
    {
      title: 'Workshop on Public Speaking',
      start: new Date(2024, 9, 15, 14, 0),
      end: new Date(2024, 9, 15, 16, 0),
    },
    {
      title: 'Webinar: Interview Techniques',
      start: new Date(2024, 9, 18, 10, 0),
      end: new Date(2024, 9, 18, 12, 0),
    },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectSlot = (slotInfo) => {
    setNewEvent({
      ...newEvent,
      start: slotInfo.start,
      end: slotInfo.start,
    });
    setIsModalOpen(true);
    setIsEditing(false);
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      const eventToAdd = {
        ...newEvent,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      };
      setEvents((prevEvents) => [...prevEvents, eventToAdd]);
      setIsModalOpen(false);
      setNewEvent({ title: '', start: '', end: '' });
    }
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setNewEvent(event);
    setIsModalOpen(true);
    setIsEditing(true);
  };

  const handleEventEdit = () => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event === selectedEvent ? { ...newEvent } : event
      )
    );
    setIsModalOpen(false);
    setSelectedEvent(null);
    setNewEvent({ title: '', start: '', end: '' });
  };

  const handleEventDelete = () => {
    setEvents(events.filter((event) => event !== selectedEvent));
    setIsModalOpen(false);
  };

  return (
    <div className="event-management">
      <h1 className="page-title">Event Management</h1>
      <div className="event-content">
        <div className="calendar-card">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleEventSelect}
          />
        </div>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="modal-box">
          <h2>{isEditing ? 'Edit Event' : 'Add Event'}</h2>
          <TextField
            label="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <div className="date-time-pickers">
            <label>Start Date & Time</label>
            <Datetime
              value={newEvent.start}
              onChange={(date) => setNewEvent({ ...newEvent, start: date })}
              inputProps={{ placeholder: 'Select start date and time' }}
            />
            <label>End Date & Time</label>
            <Datetime
              value={newEvent.end}
              onChange={(date) => setNewEvent({ ...newEvent, end: date })}
              inputProps={{ placeholder: 'Select end date and time' }}
            />
          </div>
          <div className="modal-buttons">
            {isEditing ? (
              <>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#e8b028', color: '#fff' }}
                  onClick={handleEventEdit}
                >
                  Save Changes
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#c58123', color: '#fff' }}
                  onClick={handleEventDelete}
                >
                  Delete Event
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{ backgroundColor: '#e8b028', color: '#fff' }}
                onClick={handleAddEvent}
              >
                Add Event
              </Button>
            )}
            <Button
              variant="outlined"
              sx={{ color: '#e8b028', borderColor: '#e8b028' }}
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default EventManagement;

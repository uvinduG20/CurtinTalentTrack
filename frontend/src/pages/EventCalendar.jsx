// src/pages/EventCalendar.jsx
import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardContent } from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './EventCalendar.css';
import { format, parse, startOfWeek, getDay, differenceInDays } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import heroImage from '../assets/placeholder1.jpg'; // Replace with your hero image

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date()),
  getDay,
  locales,
});

const sampleEvents = [
  {
    title: 'Web Development Workshop',
    start: new Date(2024, 9, 20, 14, 0),
    end: new Date(2024, 9, 20, 16, 0),
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
  },
  {
    title: 'Data Analysis Webinar',
    start: new Date(2024, 9, 22, 10, 0),
    end: new Date(2024, 9, 22, 12, 0),
    description: 'A comprehensive guide to data analysis using Python.',
  },
  {
    title: 'Career Fair',
    start: new Date(2024, 9, 25, 9, 0),
    end: new Date(2024, 9, 25, 17, 0),
    description: 'Meet potential employers and explore job opportunities.',
  },
];

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleRegister = () => {
    if (selectedEvent) {
      setRegisteredEvents([...registeredEvents, selectedEvent]);
      setSelectedEvent(null);
      alert('You have successfully registered for this event!');
    }
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  const calculateDaysLeft = (eventDate) => {
    const currentDate = new Date();
    return differenceInDays(eventDate, currentDate);
  };

  return (
    <div className="event-calendar">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Event Calendar</h1>
          <p className="hero-subtitle">Stay up-to-date with our latest workshops and webinars.</p>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Events Hero" className="hero-image" />
        </div>
      </div>

      {/* Calendar Container */}
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={sampleEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, margin: '20px', borderRadius: '12px' }}
          onSelectEvent={handleEventSelect}
          className="custom-calendar"
        />
      </div>

      {/* Registered Events Section */}
      <div className="registered-events">
        <h2 className="registered-title">Registered Events</h2>
        {registeredEvents.length > 0 ? (
          <div className="registered-list">
            {registeredEvents.map((event, index) => (
              <Card key={index} className="event-card">
                <CardContent>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">Date: {format(event.start, 'MMMM d, yyyy')}</p>
                  <p className="days-left">
                    {calculateDaysLeft(event.start) > 0
                      ? `${calculateDaysLeft(event.start)} days left`
                      : 'Today'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="no-events">You have not registered for any events yet.</p>
        )}
      </div>

      {selectedEvent && (
        <Dialog open={Boolean(selectedEvent)} onClose={handleClose}>
          <DialogTitle>{selectedEvent.title}</DialogTitle>
          <DialogContent>
            <p>{selectedEvent.description}</p>
            <p>Start: {format(selectedEvent.start, 'MMMM d, yyyy h:mm a')}</p>
            <p>End: {format(selectedEvent.end, 'MMMM d, yyyy h:mm a')}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRegister} variant="contained" color="primary">
              Register
            </Button>
            <Button onClick={handleClose} variant="outlined">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default EventCalendar;

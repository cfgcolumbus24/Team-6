import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';

function Calendar() {
    const [events, setEvents] = useState([]); // State to hold the events

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/events'); // Make sure your API endpoint is correct
                const calendarEvents = response.data.data.map(event => ({
                    id: event._id,
                    title: event.eventTitle,
                    start: `${event.eventDate}T${event.eventTime}`, // Combine date and time for start
                    end: `${event.eventDate}T23:59:00`, // Set end time to midnight
                }));
                setEvents(calendarEvents); // Set the fetched events to state
                console.log('Fetched events:', calendarEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="calendar">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                events={events} // Use the state directly for events
                eventClick={(info) => alert(`Event: ${info.event.title}`)}
            />
        </div>
    );
}

export default Calendar;

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';

function Calendar() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events'); // Adjust if needed
                // Map the response data to FullCalendar's expected format
                console.log(JSON.stringify(response))
                const calendarEvents = response.data.map(event => ({
                    id: "1",
                    title: event.eventTitle,
                    start: '2024-11-01T14:30:00', // Combine date and time for start
                    end: '2024-11-01T16:30:00',
                },
                {
                    id: "2",
                    title: "event.eventTitle",
                    start: `${event.eventDate}T${event.eventTime}`, // Combine date and time for start
                    end: `${event.eventDate}T23:59:00`,
                }));
                setEvents(calendarEvents);
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
                events={events.map(event => ({
                    id: event._id,
                    title: event.title,
                    start: `${event.eventDate}T${event.eventTime}`, // Combine date and time for start
                    end: `${event.eventDate}T${event.eventTime}`,
                }))}
                eventClick={(info) => alert(`Event: ${info.event.title}`)}
            />
        </div>
    );
}

export default Calendar;


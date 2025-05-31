import { useContext } from 'react';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import Button from '../../UI/Button';

const EventCalendar = () => {
  const { colors } = useContext(ColorSchemeContext);

  // Mock data for upcoming events
  // In a real application, this would come from an API like Resident Advisor
  const upcomingEvents = [
    {
      id: 1,
      date: '2023-07-15',
      venue: 'Diobar',
      location: 'Barcelona, Spain',
      event: 'Latin Underground',
      time: '23:00 - 04:00',
      ticketLink: 'https://ra.co/events/1234567'
    },
    {
      id: 2,
      date: '2023-07-29',
      venue: 'Club Marabú',
      location: 'Barcelona, Spain',
      event: 'Deep House Sessions',
      time: '00:00 - 06:00',
      ticketLink: 'https://ra.co/events/7654321'
    },
    {
      id: 3,
      date: '2023-08-12',
      venue: 'Terrace Summer Club',
      location: 'Barcelona, Spain',
      event: 'Sunset Grooves',
      time: '19:00 - 01:00',
      ticketLink: 'https://ra.co/events/8901234'
    },
    {
      id: 4,
      date: '2023-09-03',
      venue: 'Digital Marketing Summit',
      location: 'Madrid, Spain',
      event: 'Afterparty',
      time: '22:00 - 02:00',
      ticketLink: 'https://ra.co/events/5678901'
    }
  ];

  // Format date for display
  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="bg-black bg-opacity-50 rounded-lg p-6">
      <div className="mb-6 space-y-6">
        {upcomingEvents.map((event) => (
          <div 
            key={event.id}
            className="flex border-b border-gray-700 pb-4 group hover:bg-black hover:bg-opacity-30 p-3 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-lg flex flex-col items-center justify-center mr-4">
              <span className="text-cyan-400 text-sm font-medium">
                {formatEventDate(event.date).split(' ')[0]}
              </span>
              <span className="text-white text-lg font-bold">
                {formatEventDate(event.date).split(' ')[1]}
              </span>
            </div>
            
            <div className="flex-grow">
              <h5 className="text-white font-medium mb-1">{event.event}</h5>
              <div className="flex items-center text-gray-400 text-sm mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.venue} ({event.location})</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{event.time}</span>
              </div>
            </div>
            
            <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
              <a 
                href={event.ticketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
              >
                <span>Tickets</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <a 
          href="https://ra.co/dj/sometimesdj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 22V12M12 12V8M12 12H7M12 12h5" stroke="black" strokeWidth={2} strokeLinecap="round" />
          </svg>
          <span>Resident Advisor Profile</span>
        </a>
        <Button
          variant="artistic"
          size="sm"
        >
          Full Schedule
        </Button>
      </div>
    </div>
  );
};

export default EventCalendar;
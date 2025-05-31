import { useState, useContext } from 'react';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';

const LeadershipTimeline = () => {
  const { colors } = useContext(ColorSchemeContext);
  const [activeEvent, setActiveEvent] = useState(null);
  
  // Timeline events data
  const timelineEvents = [
    {
      id: 1,
      year: '2017',
      title: 'Aston School Barcelona',
      role: 'Founder & CEO',
      description: 'Founded Aston School Barcelona, an innovative language school combining traditional education methods with modern digital approaches.',
      testimonial: 'Josepe has brought a revolutionary approach to language education, combining his digital marketing expertise with educational excellence.',
      testimonialAuthor: 'Educational Partner'
    },
    {
      id: 2,
      year: '2013',
      title: 'IED Barcelona',
      role: 'Professor',
      description: 'Joined IED Barcelona as a professor teaching digital marketing strategy and brand development to future creative professionals.',
      testimonial: 'His unique perspective bridging corporate experience with creative understanding makes him an invaluable mentor to our students.',
      testimonialAuthor: 'IED Department Head'
    },
    {
      id: 3,
      year: '2008',
      title: 'DDB',
      role: 'Digital Strategy Director',
      description: 'Led digital transformation initiatives for major brands, developing integrated marketing strategies across emerging platforms.',
      testimonial: 'Josepe consistently delivered innovative solutions that drove measurable business impact for our most demanding clients.',
      testimonialAuthor: 'Former Colleague at DDB'
    },
    {
      id: 4,
      year: '2002',
      title: 'BBDO',
      role: 'Marketing Strategist',
      description: 'Developed strategic marketing campaigns for international brands, focusing on data-driven approaches and creative excellence.',
      testimonial: 'His analytical approach combined with creative vision resulted in award-winning campaigns that exceeded client expectations.',
      testimonialAuthor: 'Creative Director at BBDO'
    }
  ];

  const handleEventClick = (id) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  return (
    <div className="mb-20">
      <h3 
        className="text-3xl font-bold text-center mb-12"
        style={{ color: colors.primary }}
      >
        Leadership Timeline
      </h3>

      <div className="relative">
        {/* Timeline line */}
        <div 
          className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 rounded"
          style={{ backgroundColor: colors.secondary }}
        />

        {/* Timeline events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Event content */}
              <div 
                className={`w-full md:w-5/12 p-6 ${
                  index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                }`}
              >
                <div 
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => handleEventClick(event.id)}
                >
                  <span 
                    className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-2"
                    style={{ 
                      backgroundColor: colors.primary, 
                      color: '#ffffff' 
                    }}
                  >
                    {event.year}
                  </span>
                  <h4 
                    className="text-xl font-bold mb-1"
                    style={{ color: colors.primary }}
                  >
                    {event.title}
                  </h4>
                  <h5 
                    className="text-md font-medium mb-3"
                    style={{ color: colors.secondary }}
                  >
                    {event.role}
                  </h5>
                  <p 
                    className="text-sm"
                    style={{ color: colors.text }}
                  >
                    {event.description}
                  </p>
                  
                  {/* Testimonial - visible only when active */}
                  {activeEvent === event.id && (
                    <div className="mt-4 p-4 bg-blue-50 rounded italic">
                      <p 
                        className="text-sm mb-2"
                        style={{ color: colors.text }}
                      >
                        "{event.testimonial}"
                      </p>
                      <p 
                        className="text-xs font-medium text-right"
                        style={{ color: colors.secondary }}
                      >
                        — {event.testimonialAuthor}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 flex items-center justify-center"
                style={{ borderColor: colors.accent, top: '2rem' }}>
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.primary }}
                />
              </div>

              {/* Empty space for the other side */}
              <div className="w-full md:w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTimeline;
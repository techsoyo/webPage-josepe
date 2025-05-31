import { useContext, useState } from 'react';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import Button from '../../UI/Button';

const CourseDashboard = () => {
  const { colors } = useContext(ColorSchemeContext);
  const [activeTab, setActiveTab] = useState('english');

  // Course data for different language programs
  const courses = {
    english: [
      {
        id: 'eng-a1',
        level: 'A1 - Beginner',
        name: 'English Foundations',
        duration: '8 weeks',
        schedule: 'Mon & Wed, 18:00-20:00',
        price: '€350',
        features: [
          'Basic vocabulary and grammar',
          'Simple conversational skills',
          'Reading and writing fundamentals'
        ]
      },
      {
        id: 'eng-b1',
        level: 'B1 - Intermediate',
        name: 'English Fluency',
        duration: '12 weeks',
        schedule: 'Tue & Thu, 19:00-21:00',
        price: '€450',
        features: [
          'Advanced grammar structures',
          'Business communication skills',
          'Cultural context and idioms'
        ]
      },
      {
        id: 'eng-c1',
        level: 'C1 - Advanced',
        name: 'English Mastery',
        duration: '16 weeks',
        schedule: 'Sat, 10:00-14:00',
        price: '€550',
        features: [
          'Professional vocabulary development',
          'Academic writing and presentation',
          'Cambridge exam preparation'
        ]
      }
    ],
    spanish: [
      {
        id: 'spa-a1',
        level: 'A1 - Beginner',
        name: 'Spanish Basics',
        duration: '8 weeks',
        schedule: 'Tue & Thu, 17:00-19:00',
        price: '€350',
        features: [
          'Essential vocabulary and grammar',
          'Daily conversation practice',
          'Cultural immersion activities'
        ]
      },
      {
        id: 'spa-b1',
        level: 'B1 - Intermediate',
        name: 'Spanish Fluency',
        duration: '12 weeks',
        schedule: 'Mon & Wed, 19:00-21:00',
        price: '€450',
        features: [
          'Intermediate grammar and vocabulary',
          'Business Spanish essentials',
          'Spanish film and literature'
        ]
      }
    ],
    catalan: [
      {
        id: 'cat-a1',
        level: 'A1 - Beginner',
        name: 'Catalan Foundations',
        duration: '10 weeks',
        schedule: 'Mon & Wed, 17:30-19:30',
        price: '€380',
        features: [
          'Basic Catalan vocabulary and expressions',
          'Practical conversation skills',
          'Cultural integration focus'
        ]
      }
    ]
  };

  // Language tabs configuration
  const languageTabs = [
    { id: 'english', label: 'English Courses' },
    { id: 'spanish', label: 'Spanish Courses' },
    { id: 'catalan', label: 'Catalan Courses' }
  ];

  return (
    <div>
      <h3 
        className="text-3xl font-bold text-center mb-8"
        style={{ color: colors.primary }}
      >
        Language Courses
      </h3>

      {/* Language selection tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {languageTabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-700 hover:text-gray-900'
              } focus:z-10 focus:ring-2 focus:outline-none transition-colors`}
              style={{ 
                backgroundColor: activeTab === tab.id ? colors.primary : 'white',
                borderColor: colors.secondary
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Course cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {courses[activeTab].map(course => (
          <div 
            key={course.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div 
              className="p-6 border-b"
              style={{ borderColor: `${colors.primary}20` }}
            >
              <span 
                className="inline-block px-3 py-1 rounded text-xs font-medium mb-2"
                style={{ 
                  backgroundColor: `${colors.primary}15`,
                  color: colors.primary 
                }}
              >
                {course.level}
              </span>
              <h4 
                className="text-xl font-bold mb-1"
                style={{ color: colors.primary }}
              >
                {course.name}
              </h4>
              <div className="text-sm text-gray-500 mb-4">
                <div className="flex items-center mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {course.schedule}
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {course.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <span 
                      className="flex-shrink-0 mr-1.5 mt-0.5"
                      style={{ color: colors.primary }}
                    >
                      ✓
                    </span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">{course.price}</span>
                <Button
                  variant="corporate"
                  size="sm"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Not sure which course is right for you? Take our free placement test to find your level.
        </p>
        <Button
          variant="corporate"
          size="lg"
        >
          Take Placement Test
        </Button>
      </div>
    </div>
  );
};

export default CourseDashboard;
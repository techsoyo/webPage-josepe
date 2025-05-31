import { useContext } from 'react';
import { IdentityContext } from '../../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import CourseDashboard from './CourseDashboard';
import { IDENTITIES } from '../../../utils/constants';

const AstonSchoolSection = () => {
  const { activeIdentity, isIdentityActive } = useContext(IdentityContext);
  const { colors } = useContext(ColorSchemeContext);
  
  const isCorporateActive = isIdentityActive(IDENTITIES.CORPORATE);

  return (
    <section 
      id="aston-school" 
      className={`py-20 transition-colors duration-500 ${
        isCorporateActive ? 'opacity-100' : 'opacity-80'
      }`}
      style={{ 
        backgroundColor: isCorporateActive ? colors.background : '#f7fafc'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Aston School Barcelona
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            A premier language school combining traditional education with innovative 
            digital approaches, offering personalized learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div 
              className="h-64 bg-cover bg-center" 
              style={{ 
                backgroundImage: 'url(/assets/images/aston-school.jpg)' 
              }}
            />
            <div className="bg-white p-6">
              <h3 
                className="text-2xl font-semibold mb-4"
                style={{ color: colors.primary }}
              >
                Our Approach
              </h3>
              <p 
                className="mb-4"
                style={{ color: colors.text }}
              >
                At Aston School Barcelona, we believe in a personalized approach to language 
                learning that adapts to each student's needs, goals, and learning style.
              </p>
              <p 
                style={{ color: colors.text }}
              >
                Our methodology combines traditional language education techniques with 
                innovative digital tools, creating an immersive and effective learning experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: 'Personalized Learning',
                description: 'Customized programs tailored to individual learning styles and goals',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: 'Expert Instructors',
                description: 'Native-speaking teachers with extensive experience and qualifications',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                )
              },
              {
                title: 'Digital Integration',
                description: 'Blending traditional classroom learning with advanced digital tools',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Small Class Sizes',
                description: 'Limited group sizes ensuring personalized attention and participation',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md flex items-start"
              >
                <div 
                  className="flex-shrink-0 mr-4 p-2 rounded-full"
                  style={{ color: colors.primary, backgroundColor: `${colors.primary}15` }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h4 
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.primary }}
                  >
                    {feature.title}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: colors.text }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CourseDashboard />
      </div>
    </section>
  );
};

export default AstonSchoolSection;
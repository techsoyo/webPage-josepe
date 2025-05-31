import { useContext } from 'react';
import { IdentityContext } from '../../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import LeadershipTimeline from './LeadershipTimeline';
import ConsultancyPortal from './ConsultancyPortal';
import { IDENTITIES } from '../../../utils/constants';

const CorporateSection = () => {
  const { activeIdentity, isIdentityActive } = useContext(IdentityContext);
  const { colors } = useContext(ColorSchemeContext);
  
  const isCorporateActive = isIdentityActive(IDENTITIES.CORPORATE);

  return (
    <section 
      id="corporate" 
      className={`py-20 transition-colors duration-500 ${
        isCorporateActive ? 'opacity-100' : 'opacity-80'
      }`}
      style={{ 
        backgroundColor: isCorporateActive ? colors.background : "#f7fafc" 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Corporate Profile
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            With over 20 years in digital marketing leadership and education, 
            Josepe Garcia brings strategic expertise to every project as CEO of Aston School Barcelona.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
              Professional Background
            </h3>
            <p className="mb-4" style={{ color: colors.text }}>
              As the CEO of Aston School Barcelona, Josepe has established a distinguished 
              reputation in both the corporate world and academic sphere. With previous 
              leadership roles at BBDO and DDB, his approach combines data-driven strategy 
              with creative excellence.
            </p>
            <p style={{ color: colors.text }}>
              Currently serving as a Professor at IED Barcelona while leading Aston School's 
              growth since 2017, Josepe brings a wealth of experience in digital transformation, 
              brand strategy, and educational innovation.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.primary }}>
              Areas of Expertise
            </h3>
            <ul className="space-y-2">
              {['Digital Marketing Strategy', 'Corporate Leadership', 'Educational Innovation', 
                'International Business Development', 'Brand Transformation'].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center"
                  style={{ color: colors.text }}
                >
                  <span className="mr-2 text-blue-500">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <LeadershipTimeline />
        <ConsultancyPortal />
      </div>
    </section>
  );
};

export default CorporateSection;
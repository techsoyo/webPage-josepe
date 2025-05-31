import { useContext } from 'react';
import { IdentityContext } from '../../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import CaseStudyCard from './CaseStudyCard';
import { IDENTITIES } from '../../../utils/constants';
import Button from '../../UI/Button';

const CaseStudySection = () => {
  const { activeIdentity, isIdentityActive } = useContext(IdentityContext);
  const { colors } = useContext(ColorSchemeContext);
  
  const isHybridActive = activeIdentity === IDENTITIES.HYBRID;

  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: 'Barcelona Underground Events',
      subtitle: 'Digital Marketing Campaign for Latin Underground',
      description: 'Leveraging corporate marketing strategies to increase visibility and attendance for underground electronic music events in Barcelona.',
      outcomes: [
        'Increased event attendance by 78%',
        '300% growth in social media engagement',
        'Featured in DJ Mag as "innovative marketing approach"'
      ],
      image: '/assets/images/case-studies/barcelona-underground.jpg',
      tags: ['Event Marketing', 'Social Media Strategy', 'Analytics'],
      logoUrl: '/assets/images/logos/diobar-logo.png',
      clientName: 'Diobar Barcelona'
    },
    {
      id: 2,
      title: 'Language Learning Through Music',
      subtitle: 'Innovative Educational Program for Aston School',
      description: 'Developed a unique language learning methodology integrating electronic music and DJ culture to enhance student engagement and retention.',
      outcomes: [
        '32% improvement in student vocabulary retention',
        'Featured in Educational Innovation Journal',
        'Adopted by 3 additional language schools'
      ],
      image: '/assets/images/case-studies/music-language-learning.jpg',
      tags: ['Educational Innovation', 'Music Integration', 'Learning Methods'],
      logoUrl: '/assets/images/logos/aston-school-logo.png',
      clientName: 'Aston School Barcelona'
    },
    {
      id: 3,
      title: 'Corporate Wellness DJ Sessions',
      subtitle: 'Executive Stress Relief Program',
      description: 'Created a unique corporate wellness program using music and rhythm as tools for stress reduction and team building in high-pressure business environments.',
      outcomes: [
        '27% decrease in reported workplace stress',
        '42% improvement in team collaboration metrics',
        'Featured in Harvard Business Review blog'
      ],
      image: '/assets/images/case-studies/corporate-wellness.jpg',
      tags: ['Corporate Wellness', 'Team Building', 'Executive Coaching'],
      logoUrl: '/assets/images/logos/tech-corp-logo.png',
      clientName: 'TechCorp International'
    }
  ];

  return (
    <section 
      id="case-studies" 
      className="py-20"
      style={{ 
        backgroundColor: isHybridActive 
          ? colors.background 
          : activeIdentity === IDENTITIES.CORPORATE 
            ? '#f0f4f8' 
            : '#0d1219' 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: colors.primary }}
          >
            Converged Brand Strategy
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: colors.text }}
          >
            Discover how the intersection of corporate expertise and artistic vision 
            creates unique approaches to marketing, education, and community engagement.
          </p>
        </div>

        <div className="space-y-16 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard 
              key={caseStudy.id}
              caseStudy={caseStudy}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p 
            className="mb-6 text-lg"
            style={{ color: colors.text }}
          >
            Interested in exploring how this dual-identity approach could benefit your brand?
          </p>
          <Button
            variant={activeIdentity === IDENTITIES.ARTISTIC ? 'artistic' : 'corporate'}
            size="lg"
            href="#contact"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
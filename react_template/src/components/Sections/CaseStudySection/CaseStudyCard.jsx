import { useContext } from 'react';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import { IdentityContext } from '../../../contexts/IdentityContext';
import { IDENTITIES } from '../../../utils/constants';
import Button from '../../UI/Button';

const CaseStudyCard = ({ caseStudy, isReversed }) => {
  const { colors } = useContext(ColorSchemeContext);
  const { activeIdentity } = useContext(IdentityContext);

  const isCorporate = activeIdentity === IDENTITIES.CORPORATE;
  
  return (
    <div 
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
                  bg-white rounded-xl overflow-hidden shadow-xl`}
    >
      {/* Image Side */}
      <div className="lg:w-1/2">
        <div className="relative h-full">
          <div 
            className="h-72 lg:h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${caseStudy.image})` 
            }}
          >
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{ 
                background: isCorporate
                  ? 'linear-gradient(to bottom, rgba(26, 54, 93, 0.6), rgba(74, 85, 104, 0.4))'
                  : 'linear-gradient(to bottom, rgba(58, 16, 66, 0.6), rgba(107, 70, 193, 0.4))'
              }}
            />
            
            {/* Client logo in corner */}
            <div className="absolute top-4 right-4 p-2 bg-white bg-opacity-90 rounded-lg">
              <img 
                src={caseStudy.logoUrl} 
                alt={`${caseStudy.clientName} logo`}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Side */}
      <div className="lg:w-1/2 p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-full"
              style={{ 
                backgroundColor: `${colors.primary}15`,
                color: colors.primary 
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 
          className="text-2xl font-bold mb-1"
          style={{ color: colors.primary }}
        >
          {caseStudy.title}
        </h3>
        <h4 
          className="text-lg mb-4"
          style={{ color: colors.secondary }}
        >
          {caseStudy.subtitle}
        </h4>
        
        <p 
          className="mb-6"
          style={{ color: colors.text }}
        >
          {caseStudy.description}
        </p>
        
        <div 
          className="mb-6 p-4 rounded-lg"
          style={{ backgroundColor: `${colors.primary}08` }}
        >
          <h5 
            className="font-semibold mb-2"
            style={{ color: colors.primary }}
          >
            Key Outcomes:
          </h5>
          <ul className="space-y-2">
            {caseStudy.outcomes.map((outcome, index) => (
              <li 
                key={index}
                className="flex items-start"
              >
                <span 
                  className="flex-shrink-0 mr-2"
                  style={{ color: colors.accent }}
                >
                  ✓
                </span>
                <span style={{ color: colors.text }}>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm" style={{ color: colors.secondary }}>
            Client: <span className="font-semibold">{caseStudy.clientName}</span>
          </div>
          <Button 
            variant={isCorporate ? 'corporate' : 'artistic'}
            size="sm"
          >
            View Full Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
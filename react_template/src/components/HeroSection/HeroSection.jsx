import { useState, useContext, useEffect } from 'react';
import { IdentityContext } from '../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../contexts/ColorSchemeContext';
import IdentityPanel from './IdentityPanel';
import { IDENTITIES } from '../../utils/constants';

const HeroSection = ({ onMenuTrigger }) => {
  const { activeIdentity, setActiveIdentity } = useContext(IdentityContext);
  const { colors, transitionTo } = useContext(ColorSchemeContext);
  const [hoverIdentity, setHoverIdentity] = useState(null);
  const [expansionRatio, setExpansionRatio] = useState(0.5); // 0.5 means 50-50 split

  // Slightly expand the section being hovered
  useEffect(() => {
    if (hoverIdentity === IDENTITIES.CORPORATE) {
      setExpansionRatio(0.6); // 60-40 in favor of corporate
    } else if (hoverIdentity === IDENTITIES.ARTISTIC) {
      setExpansionRatio(0.4); // 40-60 in favor of artistic
    } else {
      setExpansionRatio(0.5); // Back to 50-50
    }
  }, [hoverIdentity]);

  const handleMouseEnter = (identity) => {
    setHoverIdentity(identity);
    transitionTo(identity);
  };

  const handleMouseLeave = () => {
    setHoverIdentity(null);
    transitionTo(activeIdentity);
  };

  const handlePanelClick = (identity) => {
    setActiveIdentity(identity);
  };

  // Función para manejar el hover en el título "JOSEPE DJ"
  const handleTitleHover = (isHovering) => {
    if (onMenuTrigger) {
      onMenuTrigger(isHovering);
    }
  };

  return (
    <div id="home" className="min-h-screen relative overflow-hidden">
      <div className="relative h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Corporate Panel - Left Side */}
        <div
          className="relative md:absolute md:left-0 md:top-0 md:bottom-0 transition-all duration-500 ease-in-out"
          style={{
            width: '100%',
            height: '50vh',
            // On mobile we stack vertically, on desktop we adjust width
            ...(window.innerWidth >= 768 && {
              width: `${expansionRatio * 100}%`,
              height: '100%'
            })
          }}
          onMouseEnter={() => handleMouseEnter(IDENTITIES.CORPORATE)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handlePanelClick(IDENTITIES.CORPORATE)}
        >
          <IdentityPanel
            identity={IDENTITIES.CORPORATE}
            isActive={activeIdentity === IDENTITIES.CORPORATE}
            isHovered={hoverIdentity === IDENTITIES.CORPORATE}
            title="José M. Serra"
            subtitle="Aston School Barcelona CEO"
            ctaText="Explore Corporate Profile"
            imagePath="/assets/images/corporate-profile.jpg"
            backgroundColor={colors.background}
          />
        </div>

        {/* Artistic Panel - Right Side */}
        <div
          className="relative md:absolute md:right-0 md:top-0 md:bottom-0 transition-all duration-500 ease-in-out"
          style={{
            width: '100%',
            height: '50vh',
            // On mobile we stack vertically, on desktop we adjust width
            ...(window.innerWidth >= 768 && {
              width: `${(1 - expansionRatio) * 100}%`,
              height: '100%'
            })
          }}
          onMouseEnter={() => handleMouseEnter(IDENTITIES.ARTISTIC)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handlePanelClick(IDENTITIES.ARTISTIC)}
        >
          <IdentityPanel
            identity={IDENTITIES.ARTISTIC}
            isActive={activeIdentity === IDENTITIES.ARTISTIC}
            isHovered={hoverIdentity === IDENTITIES.ARTISTIC}
            title="JOSEPE DJ"
            subtitle="Music Producer"
            ctaText="Discover Music Career"
            imagePath="/assets/images/dj-profile.jpg"
            backgroundColor="#0F172A"
            onTitleHover={handleTitleHover} // Pasamos la función al panel
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
import { useState, useEffect } from 'react';
import { IdentityProvider } from './contexts/IdentityContext';
import { ColorSchemeProvider } from './contexts/ColorSchemeContext';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navigation/Navbar';
import CorporateSection from './components/Sections/CorporateSection/CorporateSection';
import ArtisticSection from './components/Sections/ArtisticSection/ArtisticSection';
import AstonSchoolSection from './components/Sections/AstonSchoolSection/AstonSchoolSection';
import CaseStudySection from './components/Sections/CaseStudySection/CaseStudySection';
import { IDENTITIES } from './utils/constants';
import ContactSection from './components/Sections/ContactSection/ContactSection';


function App() {
  const [activeIdentity, setActiveIdentity] = useState(IDENTITIES.CORPORATE);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll detection for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <IdentityProvider initialIdentity={activeIdentity}>
      <ColorSchemeProvider>
        <div className="min-h-screen font-sans">
          <Navbar hasScrolled={hasScrolled} />
          <HeroSection />
          
          <div className="container mx-auto px-4">
            <CorporateSection />
            <ArtisticSection />
            <AstonSchoolSection />
            <CaseStudySection />
            <ContactSection />
          </div>

          <footer className="bg-gray-100 py-10 mt-20">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-600">
                &copy; {new Date().getFullYear()} Dual Identity Portfolio | Aston School Barcelona | Sometimes DJ
              </p>
            </div>
          </footer>
        </div>
      </ColorSchemeProvider>
    </IdentityProvider>
  );
}

export default App;
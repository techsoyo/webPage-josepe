import { useContext } from 'react';
import { IdentityContext } from '../../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../../contexts/ColorSchemeContext';
import SoundCloudPlayer from './SoundCloudPlayer';
import EventCalendar from './EventCalendar';
import { IDENTITIES } from '../../../utils/constants';
import Button from '../../UI/Button';

const ArtisticSection = () => {
  const { activeIdentity, isIdentityActive } = useContext(IdentityContext);
  const { colors } = useContext(ColorSchemeContext);
  
  const isArtisticActive = isIdentityActive(IDENTITIES.ARTISTIC);

  const SoundCloudPlayerFallback = () => (
    <div className="p-10 bg-black bg-opacity-30 rounded-lg text-center">
      <h3 className="text-xl text-cyan-300 mb-2">SoundCloud Player</h3>
      <p className="text-gray-300">Music player content will be available soon.</p>
    </div>
  );

  // DJ releases data
  const releases = [
    {
      id: 1,
      title: "Late Night Sessions",
      label: "Underground Records",
      date: "2024",
      artwork: "/assets/images/releases/release1.jpg",
      link: "https://beatport.com/"
    },
    {
      id: 2,
      title: "Barcelona Sunrise",
      label: "Global House",
      date: "2023",
      artwork: "/assets/images/releases/release2.jpg", 
      link: "https://beatport.com/"
    },
    {
      id: 3,
      title: "Corporate After Hours",
      label: "Dual Identity",
      date: "2023",
      artwork: "/assets/images/releases/release3.jpg",
      link: "https://beatport.com/" 
    }
  ];

  return (
    <section 
      id="artistic" 
      className={`py-20 transition-colors duration-500 ${
        isArtisticActive ? 'opacity-100' : 'opacity-80'
      }`}
      style={{ 
        backgroundColor: isArtisticActive ? colors.background : "#0F172A" 
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: isArtisticActive ? colors.accent : "#00FFFF" }}
          >
            Sometimes DJ
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: isArtisticActive ? colors.text : "#E2E8F0" }}
          >
            Exploring the intersection of electronic music and corporate life, Sometimes DJ 
            brings unique perspectives from both worlds into immersive sonic experiences.
          </p>
        </div>

        <div className="mb-24">
          <SoundCloudPlayerFallback />
          {/* <SoundCloudPlayer /> */}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 
              className="text-3xl font-bold mb-8"
              style={{ color: isArtisticActive ? colors.accent : "#00FFFF" }}
            >
              Latest Releases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {releases.map(release => (
                <div 
                  key={release.id}
                  className="bg-black bg-opacity-50 rounded-lg overflow-hidden transform transition-all hover:scale-105"
                >
                  <div className="aspect-w-1 aspect-h-1 relative">
                    <img 
                      src={release.artwork}
                      alt={release.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 
                        className="text-white font-bold text-lg"
                      >
                        {release.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{release.label} ({release.date})</p>
                      <a 
                        href={release.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-300 hover:text-cyan-400 transition-colors mt-2 inline-block"
                      >
                        Stream on Beatport →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                variant="artistic"
                size="md"
              >
                View All Releases
              </Button>
            </div>
          </div>

          <div>
            <h3 
              className="text-3xl font-bold mb-8"
              style={{ color: isArtisticActive ? colors.accent : "#00FFFF" }}
            >
              Upcoming Events
            </h3>
            <EventCalendar />
          </div>
        </div>

        <div className="bg-black bg-opacity-40 rounded-xl p-8">
          <h3 
            className="text-3xl font-bold mb-6"
            style={{ color: isArtisticActive ? colors.accent : "#00FFFF" }}
          >
            DJ Booking Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl text-white font-semibold mb-4">
                Performance Style
              </h4>
              <p className="text-gray-300 mb-4">
                Sometimes DJ specializes in deep, melodic house and techno sets that create an
                immersive experience transitioning from sophisticated ambient sounds to energetic 
                dance floor moments.
              </p>
              <h5 className="text-lg text-white font-medium mb-2">
                Preferred Venues:
              </h5>
              <ul className="space-y-1 text-gray-300">
                <li>• Intimate club environments</li>
                <li>• Corporate event after-parties</li>
                <li>• Art exhibitions and cultural events</li>
                <li>• Boutique festivals</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-white font-semibold mb-4">
                Technical Requirements
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>2x Pioneer CDJ-3000 or equivalent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Pioneer DJM-900 mixer or equivalent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>High-quality monitoring system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Professional sound system appropriate for venue size</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  variant="artistic"
                  size="md"
                  href="#contact"
                >
                  Request Booking Information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticSection;
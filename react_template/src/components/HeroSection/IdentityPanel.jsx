import { useContext } from 'react';
import { ColorSchemeContext } from '../../contexts/ColorSchemeContext';
import Button from '../UI/Button';
import { IDENTITIES } from '../../utils/constants';

const IdentityPanel = ({
  identity,
  isActive,
  isHovered,
  title,
  subtitle,
  ctaText,
  imagePath,
  backgroundColor,
  onTitleHover // Nueva prop para manejar el hover del menú
}) => {
  const { colors } = useContext(ColorSchemeContext);

  const isCorporate = identity === IDENTITIES.CORPORATE;
  const isArtistic = identity === IDENTITIES.ARTISTIC;

  // Determine styles based on identity
  const textColorClass = isCorporate ? 'text-gray-800' : 'text-gray-100';
  const subtitleColorClass = isCorporate ? 'text-gray-600' : 'text-gray-300';

  // Función para manejar el hover del título (solo para el panel artístico)
  const handleTitleMouseEnter = () => {
    if (isArtistic && onTitleHover) {
      onTitleHover(true);
    }
  };

  const handleTitleMouseLeave = () => {
    if (isArtistic && onTitleHover) {
      onTitleHover(false);
    }
  };

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${isActive ? 'z-10' : 'z-0'
        } ${isHovered ? 'cursor-pointer' : ''}`}
      style={{ backgroundColor }}
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imagePath})`,
          opacity: 0.7,
        }}
      />

      {/* Gradient Overlay - Different for each identity */}
      <div
        className="absolute inset-0"
        style={{
          background: isCorporate
            ? `linear-gradient(to bottom, rgba(26, 54, 93, 0.8), rgba(74, 85, 104, 0.6))`
            : `linear-gradient(to bottom, rgba(58, 16, 66, 0.8), rgba(107, 70, 193, 0.6))`
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 transition-all duration-500">
        <div className="transform transition-transform duration-500 ease-in-out">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-2 ${textColorClass} ${isHovered ? 'scale-110' : ''
              } ${isArtistic ? 'cursor-pointer hover:text-purple-200 transition-colors duration-300' : ''}`}
            onMouseEnter={handleTitleMouseEnter}
            onMouseLeave={handleTitleMouseLeave}
          >
            {title}
          </h1>
          <h2 className={`text-xl md:text-2xl ${subtitleColorClass} mb-6`}>
            {subtitle}
          </h2>

          <div className={`transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
            <Button
              variant={isCorporate ? "corporate" : "artistic"}
              size="lg"
              href={isCorporate ? "#corporate" : "#artistic"}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityPanel;
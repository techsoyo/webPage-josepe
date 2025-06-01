import { useContext, useEffect, useState } from 'react';
import { IdentityContext } from '../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../contexts/ColorSchemeContext';

const VerticalNavbar = ({ items, identity, sectionId }) => {
  const { colors } = useContext(ColorSchemeContext);
  const { isIdentityActive } = useContext(IdentityContext);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeItem, setActiveItem] = useState(items[0]?.id || '');
  
  const isActive = isIdentityActive(identity);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 1024); // lg breakpoint in Tailwind
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleClick = (e, item) => {
    e.preventDefault();
    setActiveItem(item.id);
    const targetId = `${sectionId}-${item.id}`;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const yOffset = -100; // Account for fixed navbar and some padding
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  return (
    <nav className={`${isMobileView ? 'overflow-x-auto' : 'vertical-navbar'} bg-white bg-opacity-90 rounded-lg shadow-md p-4 sticky top-28 h-fit`}>
      <ul className={`${isMobileView ? 'flex space-x-4' : 'space-y-2'}`}>
        {items.map((item, index) => (
          <li key={index} className={isMobileView ? 'flex-shrink-0' : ''}>
            <a 
              href={`#${sectionId}-${item.id}`}
              onClick={(e) => handleClick(e, item)}
              className={`block py-2 px-4 rounded transition-all ${isActive ? 'hover:bg-opacity-10' : ''}`}
              style={{
                color: isActive ? colors.primary : '#4A5568',
                backgroundColor: 'transparent',
                borderLeft: !isMobileView ? `3px solid ${isActive && activeItem === item.id ? colors.accent : 'transparent'}` : 'none',
                borderBottom: isMobileView ? `3px solid ${isActive && activeItem === item.id ? colors.accent : 'transparent'}` : 'none',
              }}
            >
              <div className="flex items-center">
                {item.icon && <span className="mr-2">{item.icon}</span>}
                <span>{item.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalNavbar;
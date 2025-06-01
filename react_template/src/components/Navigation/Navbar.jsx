import { useState, useEffect, useContext } from 'react';
import { IdentityContext } from '../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../contexts/ColorSchemeContext';
import { IDENTITIES } from '../../utils/constants';
import './Navbar.css';

const Navbar = ({ hasScrolled, isMenuVisible, onMenuVisibilityChange }) => {
  const { activeIdentity, setActiveIdentity } = useContext(IdentityContext);
  const { colors, transitionTo } = useContext(ColorSchemeContext);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null); // 'artistic' o 'corporate'

  // Funciones de utilidad
  const isNavItemActive = (item) => {
    return activeIdentity === item.identity;
  };

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  // Elementos de navegación para Josepe DJ (Artistic)
  const artisticNavItems = [
    { name: 'Home', identity: IDENTITIES.HYBRID, href: '#home' },
    {
      name: 'DJ Career',
      identity: IDENTITIES.ARTISTIC,
      href: '#artistic',
      dropdown: [
        { name: 'Biography', href: '#bio', identity: IDENTITIES.ARTISTIC },
        { name: 'Discography', href: '#discography', identity: IDENTITIES.ARTISTIC }
      ]
    },
    { name: 'Sessions & Sets', identity: IDENTITIES.ARTISTIC, href: '#session&sets' },
    {
      name: 'Events',
      identity: IDENTITIES.ARTISTIC,
      href: '#events',
      dropdown: [
        { name: 'Upcoming', href: '#upcoming-events', identity: IDENTITIES.ARTISTIC },
        { name: 'Past Events', href: '#past-events', identity: IDENTITIES.ARTISTIC }
      ]
    },
    { name: 'Contact', identity: IDENTITIES.HYBRID, href: '#contact' },
  ];

  // Elementos de navegación para José M. Serra (Corporate)
  const corporateNavItems = [
    { name: 'Home', identity: IDENTITIES.HYBRID, href: '#home' },
    {
      name: 'Sobre José M. Serra',
      identity: IDENTITIES.CORPORATE,
      href: '#corporate',
      dropdown: [
        { name: 'Perfil Profesional', href: '#profile', identity: IDENTITIES.CORPORATE },
      ]
    },
    {
      name: 'Aston School',
      identity: IDENTITIES.CORPORATE,
      href: '#aston',
      dropdown: [
        { name: 'Historia', href: '#history', identity: IDENTITIES.CORPORATE },
        { name: 'Equipo', href: '#team', identity: IDENTITIES.CORPORATE },
        { name: 'Metodología', href: '#methodology', identity: IDENTITIES.CORPORATE }
      ]
    },
    { name: 'Contacto', identity: IDENTITIES.HYBRID, href: '#contact' },
  ];

  // Componente SVG para bullets numerados
  const BulletNumber = ({ number, isCorporate = false }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="10"
        cy="10"
        r="9.5"
        stroke={isCorporate ? "#3B82F6" : "#A855F7"}
        strokeOpacity="0.8"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={isCorporate ? "#3B82F6" : "#A855F7"}
        fontSize="10"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        {number}
      </text>
    </svg>
  );

  const handleNavItemClick = (identity) => {
    setActiveIdentity(identity);
    if (onMenuVisibilityChange) {
      onMenuVisibilityChange(false);
    }
    setOpenDropdown(null);
    setActiveMenu(null);
  };

  const handleMouseLeave = () => {
    if (onMenuVisibilityChange) {
      onMenuVisibilityChange(false);
    }
    setOpenDropdown(null);
    setActiveMenu(null);
  };

  const openMenu = (menuType) => {
    setActiveMenu(menuType);
    if (!isMenuVisible) {
      onMenuVisibilityChange(true);
    }
  };

  // Cerrar desplegable cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-menu') && !event.target.closest('#menu-toggle-artistic') && !event.target.closest('#menu-toggle-corporate')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Resetear el menú activo cuando se cierra el menú principal
  useEffect(() => {
    if (!isMenuVisible) {
      setActiveMenu(null);
    }
  }, [isMenuVisible]);

  return (
    <div className="navbar-div fixed w-full z-50">
      {/* Barra de navegación principal */}
      <div className={`navbar ${hasScrolled ? 'scrolled' : ''} transition-all duration-300`}>
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Botón para menú de José M. Serra (izquierda) */}
          <div
            id="menu-toggle-corporate"
            className="menu-button cursor-pointer"
            onClick={() => openMenu('corporate')}
          >
            <div className="menu-button-content flex items-center">
              <div className="bracket">
                <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3849_425)">
                    <path d="M5.43 0.5H0.5V19.07H5.43" stroke="currentColor" strokeMiterlimit="10" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3849_425">
                      <rect width="100%" height="100%" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={`menu-txt-open ${activeMenu === 'corporate' && isMenuVisible ? 'hidden' : 'block'} mx-1 text-blue-400`}>
                Menu
              </div>
              <div className={`menu-txt-close ${activeMenu === 'corporate' && isMenuVisible ? 'block' : 'hidden'} mx-1 text-blue-400`}>
                close
              </div>
              <div className="bracket is-r transform rotate-180">
                <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3849_425)">
                    <path d="M5.43 0.5H0.5V19.07H5.43" stroke="currentColor" strokeMiterlimit="10" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3849_425">
                      <rect width="100%" height="100%" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="brand invisible">
            <span className="text-2xl font-bold"></span>
          </div>

          {/* Botón para menú de Josepe DJ (derecha) */}
          <div
            id="menu-toggle-artistic"
            className="menu-button cursor-pointer"
            onClick={() => openMenu('artistic')}
          >
            <div className="menu-button-content flex items-center">
              <div className="bracket">
                <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3849_425)">
                    <path d="M5.43 0.5H0.5V19.07H5.43" stroke="currentColor" strokeMiterlimit="10" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3849_425">
                      <rect width="100%" height="100%" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={`menu-txt-open ${activeMenu === 'artistic' && isMenuVisible ? 'hidden' : 'block'} mx-1 text-purple-400`}>
                Menu
              </div>
              <div className={`menu-txt-close ${activeMenu === 'artistic' && isMenuVisible ? 'block' : 'hidden'} mx-1 text-purple-400`}>
                close
              </div>
              <div className="bracket is-r transform rotate-180">
                <svg width="6" height="20" viewBox="0 0 6 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_3849_425)">
                    <path d="M5.43 0.5H0.5V19.07H5.43" stroke="currentColor" strokeMiterlimit="10" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3849_425">
                      <rect width="100%" height="100%" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú de José M. Serra (lado izquierdo) */}
      <div
        className={`nav-menu corporate-menu fixed top-0 left-0 w-full md:w-1/2 h-full bg-black bg-opacity-90 backdrop-blur-md transition-all duration-500 z-50
          ${isMenuVisible && activeMenu === 'corporate' ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-full'}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="nav-scroll-wrap h-full overflow-auto py-24 px-8 lg:px-16">
          <div className="nav-links">
            {corporateNavItems.map((item, index) => (
              <div key={index} className="nav-row mb-6">
                <div className="nav-item flex items-center mb-2">
                  <div className="nav-bullet mr-3">
                    <BulletNumber number={index + 1} isCorporate={true} />
                  </div>
                  <a
                    href={item.href}
                    className={`navlink text-2xl md:text-3xl lg:text-4xl font-bold relative overflow-hidden
                      ${isNavItemActive(item) ? 'text-blue-400' : 'text-white hover:text-blue-300'}`}
                    onClick={() => handleNavItemClick(item.identity)}
                  >
                    <div className="navlink-txt">{item.name}</div>
                    <div className="hover-bg-div absolute inset-0 bg-blue-900 bg-opacity-30 
                      transform -translate-x-full transition-transform duration-300 hover:translate-x-0"></div>
                  </a>
                </div>

                {item.dropdown && (
                  <div className="nav-sec-nav pl-9 space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="sec-navlink block text-lg text-gray-300 hover:text-blue-300 transition-colors"
                        onClick={() => handleNavItemClick(subItem.identity)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="nav-footer-div mt-16 border-t border-gray-800 pt-8">
            <div className="social-wrap flex flex-wrap justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/josemiguelserrajosepe/" target="_blank" rel="noopener noreferrer" className="social-link px-2">
                <div className="text-gray-400 hover:text-white transition-colors">linkedin</div>
              </a>
              <div className="social-divider px-1 text-gray-600">.</div>
              <a href="mailto:info@josemserrajosepe.com" className="social-link px-2">
                <div className="text-gray-400 hover:text-white transition-colors">email</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menú de Josepe DJ (lado derecho) */}
      <div
        className={`nav-menu artistic-menu fixed top-0 right-0 w-full md:w-1/2 h-full bg-black bg-opacity-90 backdrop-blur-md transition-all duration-500 z-50
          ${isMenuVisible && activeMenu === 'artistic' ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="nav-scroll-wrap h-full overflow-auto py-24 px-8 lg:px-16">
          <div className="nav-links">
            {artisticNavItems.map((item, index) => (
              <div key={index} className="nav-row mb-6">
                <div className="nav-item flex items-center mb-2">
                  <div className="nav-bullet mr-3">
                    <BulletNumber number={index + 1} />
                  </div>
                  <a
                    href={item.href}
                    className={`navlink text-2xl md:text-3xl lg:text-4xl font-bold relative overflow-hidden
                      ${isNavItemActive(item) ? 'text-purple-400' : 'text-white hover:text-purple-300'}`}
                    onClick={() => handleNavItemClick(item.identity)}
                  >
                    <div className="navlink-txt">{item.name}</div>
                    <div className="hover-bg-div absolute inset-0 bg-purple-900 bg-opacity-30 
                      transform -translate-x-full transition-transform duration-300 hover:translate-x-0"></div>
                  </a>
                </div>

                {item.dropdown && (
                  <div className="nav-sec-nav pl-9 space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="sec-navlink block text-lg text-gray-300 hover:text-purple-300 transition-colors"
                        onClick={() => handleNavItemClick(subItem.identity)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="nav-footer-div mt-16 border-t border-gray-800 pt-8">
            <div className="social-wrap flex flex-wrap justify-center lg:justify-start">
              <a href="https://www.instagram.com/josepedj/" target="_blank" rel="noopener noreferrer" className="social-link px-2">
                <div className="text-gray-400 hover:text-white transition-colors">instagram</div>
              </a>
              <div className="social-divider px-1 text-gray-600">.</div>
              <a href="https://www.soundcloud.com/josepedj" target="_blank" rel="noopener noreferrer" className="social-link px-2">
                <div className="text-gray-400 hover:text-white transition-colors">soundcloud</div>
              </a>
              <div className="social-divider px-1 text-gray-600">.</div>
              <a href="https://www.mixcloud.com/josepedj" target="_blank" rel="noopener noreferrer" className="social-link px-2">
                <div className="text-gray-400 hover:text-white transition-colors">mixcloud</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay blur effect para el fondo */}
      <div
        className={`nav-blurry-bg fixed inset-0 backdrop-blur-sm bg-black bg-opacity-10 transition-opacity duration-500 pointer-events-none z-40
          ${isMenuVisible ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );
};

export default Navbar;
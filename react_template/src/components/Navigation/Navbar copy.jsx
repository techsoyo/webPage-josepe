import { useState, useEffect, useContext } from 'react';
import { IdentityContext } from '../../contexts/IdentityContext';
import { ColorSchemeContext } from '../../contexts/ColorSchemeContext';
import { IDENTITIES } from '../../utils/constants';

const Navbar = ({ hasScrolled }) => {
  const { activeIdentity, setActiveIdentity } = useContext(IdentityContext);
  const { colors, transitionTo } = useContext(ColorSchemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', identity: IDENTITIES.HYBRID, href: '#home' },
    { name: 'Corporate', identity: IDENTITIES.CORPORATE, href: '#corporate' },
    { name: 'DJ Career', identity: IDENTITIES.ARTISTIC, href: '#artistic' },
    { name: 'Aston School', identity: IDENTITIES.CORPORATE, href: '#aston-school' },
    { name: 'Case Studies', identity: IDENTITIES.HYBRID, href: '#case-studies' },
    { name: 'Contact', identity: IDENTITIES.HYBRID, href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (identity) => {
    setActiveIdentity(identity);
    setIsMobileMenuOpen(false);
  };

  const isNavItemActive = (item) => {
    return activeIdentity === item.identity;
  };

  // Determine navbar styles based on scroll position and active identity
  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    hasScrolled 
      ? 'bg-white shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  // Determine text color based on active identity and scroll position
  const getTextColorClass = (item) => {
    if (hasScrolled) {
      return isNavItemActive(item) 
        ? item.identity === IDENTITIES.CORPORATE 
          ? 'text-blue-800' 
          : 'text-purple-800'
        : 'text-gray-800';
    }
    
    return isNavItemActive(item) 
      ? item.identity === IDENTITIES.CORPORATE 
        ? 'text-blue-200' 
        : 'text-purple-200'
      : 'text-white';
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className={`font-bold text-xl ${
                hasScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Dual Identity
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-2 py-1 rounded-md text-sm font-medium transition-colors duration-300 ${
                  getTextColorClass(item)
                } hover:bg-opacity-10 ${
                  item.identity === IDENTITIES.CORPORATE 
                    ? 'hover:bg-blue-200' 
                    : 'hover:bg-purple-200'
                }`}
                onClick={() => handleNavItemClick(item.identity)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                hasScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={toggleMobileMenu}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isNavItemActive(item) 
                  ? item.identity === IDENTITIES.CORPORATE 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => handleNavItemClick(item.identity)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
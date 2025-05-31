import { createContext, useState, useEffect, useContext } from 'react';
import { IdentityContext } from './IdentityContext';
import { IDENTITIES } from '../utils/constants';

// Color scheme definitions for different identities
const COLOR_PALETTES = {
  [IDENTITIES.CORPORATE]: {
    primary: '#1A365D',     // Navy
    secondary: '#4A5568',   // Slate
    accent: '#718096',      // Gray
    background: '#f7fafc',  // Off-white
    text: '#2D3748',        // Dark gray
  },
  [IDENTITIES.ARTISTIC]: {
    primary: '#3A1042',     // Deep purple
    secondary: '#6B46C1',   // Purple
    accent: '#00FFFF',      // Neon cyan
    background: '#0F172A',  // Dark blue
    text: '#E2E8F0',        // Light gray
  },
  [IDENTITIES.HYBRID]: {
    primary: '#2C3E50',     // Dark blue-gray
    secondary: '#553C9A',   // Medium purple
    accent: '#FFD700',      // Gold
    background: '#1A202C',  // Dark slate
    text: '#F7FAFC',        // Very light gray
  }
};

export const ColorSchemeContext = createContext({
  colors: COLOR_PALETTES[IDENTITIES.CORPORATE],
  setContextualColors: () => {},
  transitionTo: () => {},
  getColor: () => {},
});

export const ColorSchemeProvider = ({ children }) => {
  const { activeIdentity } = useContext(IdentityContext);
  const [colors, setColors] = useState(COLOR_PALETTES[activeIdentity]);

  // Update colors when the active identity changes
  useEffect(() => {
    setContextualColors(activeIdentity);
  }, [activeIdentity]);

  const setContextualColors = (identity) => {
    setColors(COLOR_PALETTES[identity]);
  };

  const transitionTo = (identity) => {
    // For smooth transitions between color schemes
    setContextualColors(identity);
  };

  const getColor = (colorName) => {
    return colors[colorName] || '#000000';
  };

  const value = {
    colors,
    setContextualColors,
    transitionTo,
    getColor,
  };

  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
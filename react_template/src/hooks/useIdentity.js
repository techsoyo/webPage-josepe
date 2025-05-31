// useIdentity.js - Custom hook for managing identity state
import { useContext, useEffect } from 'react';
import { IdentityContext } from '../contexts/IdentityContext';
import { IDENTITIES } from '../utils/constants';
import { trackIdentityChange, saveUserPreferredIdentity, getUserPreferredIdentity } from '../utils/helpers';

/**
 * Custom hook for managing identity state across the application
 * @returns {Object} Identity management methods and state
 */
const useIdentity = () => {
  const { 
    activeIdentity, 
    setActiveIdentity, 
    toggleIdentity, 
    isIdentityActive 
  } = useContext(IdentityContext);

  // Effect to load user preference from storage on initial load
  useEffect(() => {
    const preferredIdentity = getUserPreferredIdentity();
    if (preferredIdentity && preferredIdentity !== activeIdentity) {
      setActiveIdentity(preferredIdentity);
    }
  }, []);

  /**
   * Changes active identity with analytics tracking and preference saving
   * @param {string} newIdentity - Identity to change to
   */
  const changeIdentity = (newIdentity) => {
    if (newIdentity === activeIdentity) return;
    
    const previousIdentity = activeIdentity;
    setActiveIdentity(newIdentity);
    
    // Track identity change for analytics
    trackIdentityChange(previousIdentity, newIdentity);
    
    // Save user preference
    saveUserPreferredIdentity(newIdentity);
  };

  /**
   * Toggles between corporate and artistic identity
   */
  const toggleActiveIdentity = () => {
    const newIdentity = activeIdentity === IDENTITIES.CORPORATE 
      ? IDENTITIES.ARTISTIC 
      : IDENTITIES.CORPORATE;
      
    changeIdentity(newIdentity);
  };

  /**
   * Checks if identity matches the provided value
   * @param {string} identity - Identity to check against active identity
   * @returns {boolean} Whether identity is active
   */
  const isActive = (identity) => {
    return activeIdentity === identity;
  };

  /**
   * Gets the opposite identity from current active identity
   * @returns {string} Opposite identity
   */
  const getOppositeIdentity = () => {
    return activeIdentity === IDENTITIES.CORPORATE 
      ? IDENTITIES.ARTISTIC 
      : IDENTITIES.CORPORATE;
  };

  /**
   * Gets the CSS class name based on current identity
   * @param {Object} options - Class options
   * @returns {string} CSS class name
   */
  const getIdentityClass = ({ 
    corporate = '', 
    artistic = '', 
    hybrid = '' 
  }) => {
    switch (activeIdentity) {
      case IDENTITIES.CORPORATE:
        return corporate;
      case IDENTITIES.ARTISTIC:
        return artistic;
      case IDENTITIES.HYBRID:
        return hybrid;
      default:
        return corporate;
    }
  };

  return {
    // State
    activeIdentity,
    
    // Methods
    changeIdentity,
    toggleIdentity: toggleActiveIdentity,
    isIdentityActive: isActive,
    getOppositeIdentity,
    getIdentityClass
  };
};

export default useIdentity;
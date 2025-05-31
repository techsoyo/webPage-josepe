// helpers.js - Utility functions for the dual-identity website
import { IDENTITIES, ANALYTICS_EVENTS } from './constants';

/**
 * Tracks analytics events with proper identity context
 * @param {string} eventName - Name of the event to track
 * @param {string} category - Event category
 * @param {Object} data - Additional event data
 * @param {string} identity - Current active identity
 */
export const trackEvent = (eventName, category, data = {}, identity = IDENTITIES.CORPORATE) => {
  try {
    // In a real application, this would use an analytics service like Google Analytics
    console.log(`[Analytics] ${category}:${eventName}`, { 
      ...data, 
      identity,
      timestamp: new Date().toISOString()
    });
    
    // Example integration with Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, {
        event_category: category,
        event_label: identity,
        ...data
      });
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Tracks identity changes for analytics
 * @param {string} previousIdentity - Previous identity
 * @param {string} newIdentity - New identity being switched to
 */
export const trackIdentityChange = (previousIdentity, newIdentity) => {
  trackEvent('identity_change', ANALYTICS_EVENTS.IDENTITY_CHANGE, {
    from: previousIdentity,
    to: newIdentity
  }, newIdentity);
};

/**
 * Formats a date string for display
 * @param {string|Date} date - Date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 */
export const formatDate = (date, options = { month: 'long', day: 'numeric', year: 'numeric' }) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

/**
 * Gets user's preferred identity from local storage or sets default
 * @param {string} defaultIdentity - Default identity if none is stored
 * @returns {string} The user's preferred identity
 */
export const getUserPreferredIdentity = (defaultIdentity = IDENTITIES.CORPORATE) => {
  try {
    const stored = localStorage.getItem('preferredIdentity');
    return stored || defaultIdentity;
  } catch (error) {
    // Handle cases where localStorage is not available (e.g., incognito mode)
    return defaultIdentity;
  }
};

/**
 * Saves user's preferred identity to local storage
 * @param {string} identity - Identity to save as preference
 */
export const saveUserPreferredIdentity = (identity) => {
  try {
    localStorage.setItem('preferredIdentity', identity);
  } catch (error) {
    console.error('Could not save identity preference:', error);
  }
};

/**
 * Handles GDPR consent for data collection
 * @param {string} purpose - Purpose for data collection
 * @param {boolean} granted - Whether consent was granted
 * @param {string} email - User email (if provided)
 * @returns {Promise<boolean>} Whether consent was successfully recorded
 */
export const handleConsentChange = async (purpose, granted, email = '') => {
  // In a real application, this would send data to a backend API
  try {
    console.log(`[Consent] ${purpose}:`, { granted, email });
    return true;
  } catch (error) {
    console.error('Error saving consent:', error);
    return false;
  }
};

/**
 * Truncates text to a maximum length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Debounce function to limit how often a function is called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time to wait in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
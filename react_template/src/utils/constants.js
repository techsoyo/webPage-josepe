// constants.js - Define important constants used throughout the application
/**
 * Identities available in the dual-identity portfolio platform
 */
export const IDENTITIES = {
  CORPORATE: 'corporate',
  ARTISTIC: 'artistic',
  HYBRID: 'hybrid'
};

/**
 * User consent purposes for GDPR compliance
 */
export const CONSENT_TYPES = {
  CONTACT: 'contact',
  MARKETING: 'marketing',
  BOOKING: 'booking',
  COMMUNICATION: 'communication'
};

/**
 * Analytics event categories
 */
export const ANALYTICS_EVENTS = {
  IDENTITY_CHANGE: 'identity_change',
  SECTION_VIEW: 'section_view',
  FORM_SUBMISSION: 'form_submission',
  MEDIA_PLAY: 'media_play',
  ENROLLMENT_STARTED: 'enrollment_started',
  BOOKING_REQUESTED: 'booking_requested'
};

/**
 * Typography configuration for consistent font usage
 */
export const TYPOGRAPHY = {
  CORPORATE: {
    primary: 'Playfair Display',
    secondary: 'Raleway'
  },
  ARTISTIC: {
    primary: 'Space Mono',
    secondary: 'Montserrat'
  }
};

/**
 * Media breakpoints for responsive design
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};

/**
 * API endpoints for backend services
 */
export const API_ENDPOINTS = {
  IDENTITY: '/api/identity',
  CONTENT: '/api/content',
  ANALYTICS: '/api/analytics',
  CONSENT: '/api/consent',
  EXTERNAL: {
    SOUNDCLOUD: '/api/external/soundcloud',
    RESIDENT_ADVISOR: '/api/external/resident-advisor',
    CALENDLY: '/api/external/calendly',
    BEATPORT: '/api/external/beatport'
  }
};

/**
 * Form validation patterns
 */
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[0-9\s\-()]{7,20}$/
};
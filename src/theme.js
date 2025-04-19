/**
 * Theme constants for the project
 * Contains color palette and theme values for consistent styling
 */

export const COLORS = {
  // Primary colors
  PRIMARY_BG: '#F8F9F6',         // Light cream/off-white - Background
  SECONDARY_BG: '#EAEFEA',       // Slightly darker cream - Secondary background
  PRIMARY_ACCENT: '#4CAF50',     // Medium green - Primary accent
  SECONDARY_ACCENT: '#8BC34A',   // Light green - Secondary accent
  DARK_ACCENT: '#2E7D32',        // Dark green - For headings and emphasis
  
  // Text colors  
  TEXT_DARK: '#333333',          // Dark gray - Primary text
  TEXT_MUTED: '#666666',         // Medium gray - Secondary text
  
  // UI elements
  CARD_BG: '#FFFFFF',            // White - Card backgrounds
  CARD_BORDER: '#E0E0E0',        // Light gray - Card borders
  
  // UI states
  SUCCESS: '#4CAF50',            // Green - Success messages
  WARNING: '#FFC107',            // Amber - Warning messages
  ERROR: '#F44336',              // Red - Error messages
  INFO: '#2196F3',               // Blue - Info messages
  
  // Gradients
  PRIMARY_GRADIENT: 'linear-gradient(45deg, #4CAF50, #2E7D32)',
  SECONDARY_GRADIENT: 'linear-gradient(45deg, #8BC34A, #4CAF50)',
  BACKGROUND_GRADIENT: 'linear-gradient(135deg, rgba(248, 249, 246, 0.95), rgba(234, 239, 234, 0.8))',
};

export const SHADOWS = {
  SMALL: '0 2px 5px rgba(0, 0, 0, 0.05)',
  MEDIUM: '0 4px 8px rgba(0, 0, 0, 0.08)',
  LARGE: '0 8px 16px rgba(0, 0, 0, 0.1)',
  HOVER: '0 10px 20px rgba(0, 0, 0, 0.12)',
};

export const TRANSITIONS = {
  DEFAULT: 'all 0.3s ease',
  FAST: 'all 0.2s ease',
  SLOW: 'all 0.4s ease',
};

export default { COLORS, SHADOWS, TRANSITIONS };

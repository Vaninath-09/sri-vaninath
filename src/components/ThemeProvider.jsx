import { useEffect } from 'react';
import { COLORS, SHADOWS, TRANSITIONS } from '../theme';

/**
 * ThemeProvider - Applies global theme styles from theme.js to CSS variables
 * This allows the entire app to use the theme consistently through CSS variables
 */
function ThemeProvider({ children }) {
  // Apply theme when component mounts
  useEffect(() => {
    // Apply colors
    Object.entries(COLORS).forEach(([key, value]) => {
      document.documentElement.style.setProperty(
        `--${key.toLowerCase().replace(/_/g, '-')}`, 
        value
      );
    });
    
    // Apply shadows
    Object.entries(SHADOWS).forEach(([key, value]) => {
      document.documentElement.style.setProperty(
        `--shadow-${key.toLowerCase()}`, 
        value
      );
    });
    
    // Apply transitions
    Object.entries(TRANSITIONS).forEach(([key, value]) => {
      document.documentElement.style.setProperty(
        `--transition-${key.toLowerCase()}`, 
        value
      );
    });
  }, []);

  return children;
}

export default ThemeProvider;
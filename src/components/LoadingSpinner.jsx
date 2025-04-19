import React from 'react';

function LoadingSpinner({ size = 40, color = '#123458' }) {
  const spinnerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderTopColor: color,
    borderWidth: `${size * 0.1}px`,
  };
  
  return (
    <div className="spinner-container">
      <div className="spinner" style={spinnerStyle}></div>
      <style jsx>{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .spinner {
          border-radius: 50%;
          border-style: solid;
          border-color: rgba(0, 0, 0, 0.1);
          border-top-style: solid;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default LoadingSpinner;

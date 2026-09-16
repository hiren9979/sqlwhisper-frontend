import React from 'react';

const Button = ({ children, onClick, variant = 'primary', disabled = false, type = 'button' }) => {
  const baseStyles = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontWeight: '500',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 0.2s',
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#0066cc',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#e9ecef',
      color: '#333',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
      }}
    >
      {children}
    </button>
  );
};

export default Button;
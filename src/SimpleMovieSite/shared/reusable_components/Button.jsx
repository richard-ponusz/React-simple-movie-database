import React from 'react';

const STYLES = [
  "primary",
  "warning",
  "danger",
  "success",
];

const Button = ({ label = 'Button', handleClick, variant, disabled = false }) => {
  const checkButtonStyle = STYLES.includes(variant) ? variant : STYLES[0];

  return (
    <button
      className={`btn btn__${checkButtonStyle}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;

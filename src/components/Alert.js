import React from 'react';

// eslint-disable-next-line react/prop-types
const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Alert;
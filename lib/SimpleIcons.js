import React from 'react';
import PropTypes from 'prop-types';
import simpleIcons from 'simple-icons';

function SimpleIcon({ name, color }) {
  const icon = simpleIcons[name];
  const color = color ? color : `#${icon.color}`;

  if (!icon) return null;

  return (
    <div
      style={{ fill: 'currentColor', color }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}

SimpleIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SimpleIcon;

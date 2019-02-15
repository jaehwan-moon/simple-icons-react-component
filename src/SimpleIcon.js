import React from 'react';
import PropTypes from 'prop-types';
import simpleIcons from 'simple-icons';

function SimpleIcon({ name, color }) {
  const icon = simpleIcons[name];
  if (!icon) return null;

  const iconColor = color ? color : `#${icon.hex}`;
  const style = {
    fill: 'currentColor',
    width: '100%',
  };

  return (
    <div
      style={{ ...style, color: iconColor }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}

SimpleIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SimpleIcon;

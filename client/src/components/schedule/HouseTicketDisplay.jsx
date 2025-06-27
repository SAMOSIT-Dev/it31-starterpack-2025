// components/schedule/HouseTicketDisplay.jsx
import React from 'react';

const HouseTicketDisplay = ({ finalMobileImage, finalDesktopImage, displayName, isMobile = false }) => {
  const baseClasses = "w-80 h-20 relative rounded-lg overflow-hidden";
  
  return (
    <div
      className={baseClasses}
      style={{
        backgroundImage: `url('${isMobile ? finalMobileImage : finalDesktopImage}')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      aria-label={`${displayName} house image`}
      role="img"
    />
  );
};

export default HouseTicketDisplay;
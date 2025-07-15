import React from 'react';
import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import HouseTicketDisplay from './HouseTicketDisplay';

const ScheduleHeader = ({ finalMobileImage, finalDesktopImage, displayName }) => {
  return (
    <>
      {/* Desktop & Tablet Header */}
      <div className="hidden md:flex items-center justify-between mb-8 mt-14">
        <div className="flex items-center gap-4">
          <Link
            to="/course/houses"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-bodoni-xt">
            TIME TABLE
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <HouseTicketDisplay 
            finalMobileImage={finalMobileImage}
            finalDesktopImage={finalDesktopImage}
            displayName={displayName}
            isMobile={false}
          />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden text-center mb-6 mt-12">
        <div className="flex items-center justify-between mb-4 md:mt-14 lg:mt-16">
          <Link
            to="/course/houses"
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold font-bodoni-xt">
            TIME TABLE
          </h1>
          <div className="w-10"></div>
        </div>
        
        <div className="flex justify-center mb-4">
          <HouseTicketDisplay 
            finalMobileImage={finalMobileImage}
            finalDesktopImage={finalDesktopImage}
            displayName={displayName}
            isMobile={true}
          />
        </div>
      </div>
    </>
  );
};

export default ScheduleHeader;
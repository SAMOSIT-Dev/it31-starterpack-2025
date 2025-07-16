// src/components/schedule/HouseTicket.jsx
import { Link } from "react-router";
import React from "react";

const HouseTicket = ({ house }) => {
  // Handle different data structures
  const houseName = house?.house_name
  const houseId = house?.id

  const houseMobileImage = `/house-ticket/mobile/${houseName}.svg`;
  const houseDesktopImage = `/house-ticket/desktop/${houseName}.svg`;

  if (!houseId) {
    return null;
  }

  return (
    <Link
      to={`/course/houses/${houseId}/schedule`}
      state={{
        mobileImage: houseMobileImage,
        desktopImage: houseDesktopImage,
        houseName: houseName,
      }}
      className="block transform transition-all duration-300 hover:scale-105"
    >
      <div
        className="responsive-house-image"
        style={{
          "--mobile-image": `url('${houseMobileImage}')`,
          "--desktop-image": `url('${houseDesktopImage}')`,
        }}
        aria-label={`${houseName} house ticket`}
        role="img"
      />
    </Link>
  );
};

export default HouseTicket;
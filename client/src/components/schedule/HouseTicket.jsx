import { Link } from "react-router";
import React from "react";

const HouseTicket = ({house}) => {


  return (
    <Link
      key={house.id}
      to={`/course/schedule/${house.id}`}
      state={{
        mobileImage: house.mobile,
        desktopImage: house.desktop,
        houseName: house.name
      }}
      className="block transform transition-all duration-300 hover:scale-105"
    >
      <div
        className="responsive-house-image"
        style={{
          "--mobile-image": `url('${house.mobile}')`,
          "--desktop-image": `url('${house.desktop}')`,
        }}
        aria-label={`${house.name} house - ${house.number}`}
        role="img"
      />
    </Link>
  );
};

export default HouseTicket;
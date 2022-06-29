import React from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <NavLink to="/" className="navbarListItem">
            <ExploreIcon fill="32c2c2c" width="36px" height="36px" />
            <p>Explore</p>
          </NavLink>
          <NavLink to="/offers" className="navbarListItem">
            <OfferIcon fill="32c2c2c" width="36px" height="36px" />
            <p>Offer</p>
          </NavLink>
          <NavLink to="/profile" className="navbarListItem">
            <PersonOutlineIcon fill="32c2c2c" width="36px" height="36px" />
            <p>Profile</p>
          </NavLink>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <h6>Our Company</h6>
        <li>
          <Link to="#Contact">Contact</Link>
        </li>
        <li>
          <Link to="#Invest">Invest</Link>
        </li>
        <li>
          <Link to="#Partners">Partners</Link>
        </li>
        <li>
          <Link to="#Careers">Careers</Link>
        </li>

      </ul>
      <ul className="list-reset">
        <h6>Use Cases</h6>
        <li>
          <Link to="#Contact">Autobody Shop</Link>
        </li>
        <li>
          <Link to="#Invest">Detail / Carwash</Link>
        </li>
        <li>
          <Link to="#Partners">Repair Shop</Link>
        </li>
        <li>
          <Link to="#Careers">Auto Rentals</Link>
        </li>
        <li>
          <Link to="#Careers">Dealership</Link>
        </li>
        <li>
          <Link to="#Careers">Towing Service</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
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
        {/*<li>*/}
        {/*  <Link to="#Home">Test</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default FooterNav;
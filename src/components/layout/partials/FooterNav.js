import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';
import Container from "../../elements/Container";
import Button from "react-bootstrap/Button";

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  const triggerText = 'Contact Us';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a target="_blank" href="https://altapotentia.com/book">Meet With Us</a>
        </li>
        <li>
          <Container triggerText={triggerText} onSubmit={onSubmit}>
            <Button variant="link"/>
          </Container>
        </li>
        <li>
          {/*<Link to="/Invest">Invest</Link>*/}
        </li>
        <li>
          {/*<Link to="/Partners">Partners</Link>*/}
        </li>
        <li>
          {/*<Link to="/Careers">Careers</Link>*/}
        </li>
        {/*<li>*/}
        {/*  <Link to="#Home">Test</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default FooterNav;
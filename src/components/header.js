import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Scroll from 'smooth-scroll';

function _handleNavLinks(event) {}

if (typeof window !== undefined) {
  Scroll('a[href*="#"]');
}
const navLinks = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Skills', link: '#skills' },
  { name: 'Contact', link: '#contact' }
];

const Header = ({ siteTitle }) => (
  <header>
    <h1>Lorenzo Eric Salvio</h1>
    <nav className="mainNav">
      <ul>
        {navLinks.map((object, index) => {
          return (
            <a href={object.link} key={index}>
              <li>{object.name}</li>
            </a>
          );
        })}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

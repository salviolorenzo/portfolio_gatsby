import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import HeroImage from './Hero';
import './layout.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <HeroImage />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

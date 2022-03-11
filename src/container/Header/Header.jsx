import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

//pass dynamic title from Subheading!!

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>Trivias have proved to be quite efficient in engaging the audience; lighthearted, fun and informative. Tell your audience about the 120-year-old jalebi shop which sits around the corner, help them find a place which serves breakfast early morning, or introduce them to the first momos point of the city. People love to eat, but people love more things which have a story.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

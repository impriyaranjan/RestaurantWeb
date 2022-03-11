import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

// Define New functional Component in same file to create AwardCard for multiple times;
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
        <div className="app__wrapper_info">
            <SubHeading title="Awards & Recognition" />
            <h1 className="headtext__cormorant">Our Laurels</h1>

            <div className="app__laurels_awards">
              {/* Dynamic Code from Data */}
              {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
            </div>
        </div>

        <div className="app__wrapper_img">
            <img src={images.laurels} alt="Laurels" />
        </div>
  </div>
);

export default Laurels;

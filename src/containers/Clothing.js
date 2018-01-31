import React from 'react';
import globalStyles from '../styles';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/images/material_bg.png',
    thumbnail: '/images/material_bg.png'
  },
  {
    original: '/images/material_bg.png',
    thumbnail: '/images/material_bg.png'
  },
  {
    original: '/images/material_bg.png',
    thumbnail: '/images/material_bg.png'
  }
];

const Clothing = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>Traditional Media</h3>

      <div className="row clearfix">
        <div className="col-xs-12 col-sm-12 m-b-15 ">
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Clothing;

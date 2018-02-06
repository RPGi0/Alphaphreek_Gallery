import React from 'react';
import globalStyles from '../styles';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/images/paintings/C_astro-selfie.jpg',
    thumbnail: '/images/paintings/C_astro-selfie.jpg'
  },
  {
    original: '/images/paintings/C_bright-stage.jpg',
    thumbnail: '/images/paintings/C_bright-stage.jpg'
  },
  {
    original: '/images/paintings/C_fire.jpg',
    thumbnail: '/images/paintings/C_fire.jpg'
  },
  {
    original: '/images/paintings/C_forest.jpg',
    thumbnail: '/images/paintings/C_forest.jpg'
  },
  {
    original: '/images/paintings/C_hurricane.jpg',
    thumbnail: '/images/paintings/C_hurricane.jpg'
  },
  {
    original: '/images/paintings/C_jason-portrait.jpg',
    thumbnail: '/images/paintings/C_jason-portrait.jpg'
  },
  {
    original: '/images/paintings/C_jason-portrait-close.jpg',
    thumbnail: '/images/paintings/C_jason-portrait-close.jpg'
  },
  {
    original: '/images/paintings/C_jose.jpg',
    thumbnail: '/images/paintings/C_jose.jpg'
  },
  {
    original: '/images/paintings/C_psp1.jpg',
    thumbnail: '/images/paintings/C_psp1.jpg'
  },
  {
    original: '/images/paintings/C_psp2.jpg',
    thumbnail: '/images/paintings/C_psp2.jpg'
  },
  {
    original: '/images/paintings/C_psp3.jpg',
    thumbnail: '/images/paintings/C_psp3.jpg'
  },
  {
    original: '/images/paintings/C_psp4.jpg',
    thumbnail: '/images/paintings/C_psp4.jpg'
  },
  {
    original: '/images/paintings/C_selfie-portrait.jpg',
    thumbnail: '/images/paintings/C_selfie-portrait.jpg'
  },
  {
    original: '/images/paintings/C_skyline.jpg',
    thumbnail: '/images/paintings/C_skyline.jpg'
  },
  {
    original: '/images/paintings/C_stratosphere.jpg',
    thumbnail: '/images/paintings/C_stratosphere.jpg'
  },
  {
    original: '/images/paintings/C_sunset.jpg',
    thumbnail: '/images/paintings/C_sunset.jpg'
  },
  {
    original: '/images/paintings/C_waves-paint1.jpg',
    thumbnail: '/images/paintings/C_waves-paint1.jpg'
  },
  {
    original: '/images/paintings/C_waves-paint2.jpg',
    thumbnail: '/images/paintings/C_waves-paint2.jpg'
  },
  {
    original: '/images/paintings/C_nebulea3.jpg',
    thumbnail: '/images/paintings/C_nebulea3.jpg'
  },
  {
    original: '/images/paintings/BL_nebulea1.jpg',
    thumbnail: '/images/paintings/BL_nebulea1.jpg'
  },
  {
    original: '/images/paintings/BL_nebulea2.jpg',
    thumbnail: '/images/paintings/BL_nebulea2.jpg'
  },
  {
    original: '/images/paintings/BL_deep-sea.jpg',
    thumbnail: '/images/paintings/BL_deep-sea.jpg'
  },
  {
    original: '/images/paintings/BL_fire-dance.jpg',
    thumbnail: '/images/paintings/BL_fire-dance.jpg'
  },
  {
    original: '/images/paintings/BL_green-orb.jpg',
    thumbnail: '/images/paintings/BL_green-orb.jpg'
  },
  {
    original: '/images/paintings/BL_jesus.jpg',
    thumbnail: '/images/paintings/BL_jesus.jpg'
  },
  {
    thumbnail: '/images/paintings/BL_light-bulb.jpg',
    original: '/images/paintings/BL_light-bulb.jpg'
  },
  {
    original: '/images/paintings/BL_reflected-face.jpg',
    thumbnail: '/images/paintings/BL_reflected-face.jpg'
  },
  {
    original: '/images/paintings/BL_uv-forest.jpg',
    thumbnail: '/images/paintings/BL_uv-forest.jpg'
  },
  {
    original: '/images/paintings/BL_kdiner.jpg',
    thumbnail: '/images/paintings/BL_kdiner.jpg'
  },
  {
    original: '/images/paintings/BL_kdiner-uv.jpg',
    thumbnail: '/images/paintings/BL_kdiner-uv.jpg'
  },
  {
    original: '/images/paintings/BL_mind-cave.jpg',
    thumbnail: '/images/paintings/BL_mind-cave.jpg'
  },
  {
    original: '/images/paintings/BL_mind-cave-uv.jpg',
    thumbnail: '/images/paintings/BL_mind-cave-uv.jpg'
  },
  {
    original: '/images/paintings/BL_to-the-moon.jpg',
    thumbnail: '/images/paintings/BL_to-the-moon.jpg'
  },
  {
    original: '/images/paintings/BL_to-the-moon-uv.jpg',
    thumbnail: '/images/paintings/BL_to-the-moon-uv.jpg'
  },
  {
    original: '/images/paintings/BL_tower.jpg',
    thumbnail: '/images/paintings/BL_tower.jpg'
  },
  {
    original: '/images/paintings/BL_tower-uv.jpg',
    thumbnail: '/images/paintings/BL_tower-uv.jpg'
  },
  {
    original: '/images/paintings/BL_trippy-head.jpg',
    thumbnail: '/images/paintings/BL_trippy-head.jpg'
  },
  {
    original: '/images/paintings/BL_trippy-head-uv.jpg',
    thumbnail: '/images/paintings/BL_trippy-head-uv.jpg'
  },
  {
    original: '/images/paintings/AB_cecils-board.jpg',
    thumbnail: '/images/paintings/AB_cecils-board.jpg'
  },
  {
    original: '/images/paintings/AB_dead-top.jpg',
    thumbnail: '/images/paintings/AB_dead-top.jpg'
  },
  {
    original: '/images/paintings/AB_fire-board.jpg',
    thumbnail: '/images/paintings/AB_fire-board.jpg'
  },
  {
    original: '/images/paintings/AB_grateful-dead-board.jpg',
    thumbnail: '/images/paintings/AB_grateful-dead-board.jpg'
  },
  {
    original: '/images/paintings/AB_greedy-pig.jpg',
    thumbnail: '/images/paintings/AB_greedy-pig.jpg'
  },
  {
    original: '/images/paintings/AB_ians-board.jpg',
    thumbnail: '/images/paintings/AB_ians-board.jpg'
  },
  {
    original: '/images/paintings/AB_ice-princess.jpg',
    thumbnail: '/images/paintings/AB_ice-princess.jpg'
  },
  {
    original: '/images/paintings/AB_jamies-board.jpg',
    thumbnail: '/images/paintings/AB_jamies-board.jpg'
  },
  {
    original: '/images/paintings/AB_mary-jane.jpg',
    thumbnail: '/images/paintings/AB_mary-jane.jpg'
  },
  {
    original: '/images/paintings/AB_Party-Girl.jpg',
    thumbnail: '/images/paintings/AB_Party-Girl.jpg'
  },
  {
    original: '/images/paintings/AB_Party-Girl-close.jpg',
    thumbnail: '/images/paintings/AB_Party-Girl-close.jpg'
  },
  {
    original: '/images/paintings/AB_wave-ripper.jpg',
    thumbnail: '/images/paintings/AB_wave-ripper.jpg'
  },
  {
    original: '/images/paintings/S_bunny-ears-aliens.jpg',
    thumbnail: '/images/paintings/S_bunny-ears-aliens.jpg'
  },
  {
    original: '/images/paintings/S_src-bus.jpg',
    thumbnail: '/images/paintings/S_src-bus.jpg'
  },
  {
    original: '/images/paintings/S_src-bus-long.jpg',
    thumbnail: '/images/paintings/S_src-bus-long.jpg'
  },

];

const Paintings = () => {
  return (
    <div>
      <div className="row clearfix image-container">
        <div className="col-xs-12 col-sm-12 m-b-15 text-center">
          <h3 style={globalStyles.navigation}>Paintings</h3>
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Paintings;

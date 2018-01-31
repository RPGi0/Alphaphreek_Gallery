import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
// import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const data = {
  menus: [
    { text: 'Paintings', icon: <Assessment/>, link: '/paintings' },
    { text: 'Traditional Media', icon: <Assessment/>, link: '/traditional-media' },
    { text: 'Vector Artwork', icon: <Assessment/>, link: '/vector-artwork' },
    { text: 'Custom Clothing', icon: <Assessment/>, link: '/custom-clothing-painted-hats' },
    { text: 'Contact', icon: <Web/>, link: '/contact' },
  ],
  aboutPage: {
    items: []
  },
  galleryPage: {

  }
};

export default data;

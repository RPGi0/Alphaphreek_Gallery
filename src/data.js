import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
// import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const data = {
  menus: [
    { text: 'Gallery', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Contact', icon: <Web/>, link: '/form' },
    { text: 'Bio', icon: <GridOn/>, link: '/table' },
  ],
  aboutPage: {
    items: []
  },
  galleryPage: {

  }
};

export default data;

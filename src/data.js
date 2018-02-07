import React from 'react';
import Brush from 'material-ui/svg-icons/image/brush';
import Create from 'material-ui/svg-icons/content/create';
import DesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';

export const data = {
  menus: [
    { text: 'Paintings', icon: <Brush/>, link: '/paintings' },
    { text: 'Custom Clothing', icon: <Brush/>, link: '/custom-clothing-painted-hats' },
    { text: 'Traditional Media', icon: <Create/>, link: '/traditional-media' },
    { text: 'Vector Artwork', icon: <DesktopWindows/>, link: '/vector-artwork' },
    { text: 'Contact', icon: <ContactMail/>, link: '/contact' },
  ]
};

export const slickSettings = {
  centerMode: true,
  className: 'slick-slider',
  // centerPadding: '250px',
  focusOnSelect: true,
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  // slidesToShow: 1,
  // slidesToScroll: 1,
  variableWidth: true
};

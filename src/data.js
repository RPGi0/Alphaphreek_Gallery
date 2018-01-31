import React from 'react';
import Brush from 'material-ui/svg-icons/image/brush';
import Create from 'material-ui/svg-icons/content/create';
import DesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';

const data = {
  menus: [
    { text: 'Paintings', icon: <Brush/>, link: '/paintings' },
    { text: 'Traditional Media', icon: <Create/>, link: '/traditional-media' },
    { text: 'Vector Artwork', icon: <DesktopWindows/>, link: '/vector-artwork' },
    { text: 'Custom Clothing', icon: <Brush/>, link: '/custom-clothing-painted-hats' },
    { text: 'Contact', icon: <ContactMail/>, link: '/contact' },
  ],
};

export default data;

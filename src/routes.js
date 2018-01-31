import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import Contact from './containers/Contact';
import TraditionalMedia from './containers/TraditionalMedia';
import Paintings from './containers/Paintings';
import Clothing from './containers/Clothing';
import VectorArt from './containers/VectorArt';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Paintings}/>
      <Route path="paintings" component={Paintings}/>
      <Route path="traditional-media" component={TraditionalMedia}/>
      <Route path="vector-artwork" component={VectorArt}/>
      <Route path="custom-clothing-painted-hats" component={Clothing}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);

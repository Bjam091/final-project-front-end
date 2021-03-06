import React, { Component } from 'react';
import axios from 'axios';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';
import LightMap from './components/Map/index';
import Like from './components/TrackLike/Like';
import { BrowserRouter, Route } from 'react-router-dom';

//To be used for routes only (entry file)

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Main} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/map" exact component={LightMap} />
          <Route path="/track-pocket" exact component={Like} />
        </BrowserRouter>
      </div>
    );
  }
}

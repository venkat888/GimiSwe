'use strict';

import React from 'react';

import Rootstack from './src/routes/Routes';
import NavigationService from './src/routes/NavigationService';



export default class App extends React.Component {
  render() {
    return <Rootstack
         ref={navigatorRef => {
           NavigationService.setTopLevelNavigator(navigatorRef);
         }}
    />;
  }
}

import React, { Component, Fragment } from 'react';

import Index from './client/Index';


class App extends Component {
  render() {
    return (
        <Index />
    );
  }
}



export const MainApp = () => {
  return (
      <Fragment>
          <App />
      </Fragment>
  )
}

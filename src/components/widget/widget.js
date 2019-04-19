import React, { Component } from 'react';

import WidgetHave from '../widget-have';
import WidgetNeed from '../widget-need';
import './widget.css';

class Widget extends Component {
  render() {
    return (
      <div className='row justify-content-between'>
        <WidgetHave />
        <WidgetNeed />
      </div>
    );
  }
}

export default Widget;

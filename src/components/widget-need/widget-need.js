import React, { Component } from 'react';

import TextArea from '../widget-textarea';
import ControlButton from '../widget-btn';
import WigetTitle from '../wiget-title';
import WidgetDate from '../widget-date';

class WidgetNeed extends Component {
  render() {
    return (
      <div className='col-12 col-md-6'>
        <WigetTitle title='I need' />
        <ControlButton />
        <TextArea />
        <WidgetDate />
      </div>
    );
  }
}

export default WidgetNeed;

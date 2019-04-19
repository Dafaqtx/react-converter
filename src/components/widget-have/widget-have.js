import React, { Component } from 'react';

import TextArea from '../widget-textarea';
import ControlButton from '../widget-btn';
import WigetTitle from '../wiget-title';

class WidgetHave extends Component {
  render() {
    return (
      <div className='col-12 col-md-6'>
        <WigetTitle title='I have' />
        <ControlButton />
        <TextArea />
      </div>
    );
  }
}

export default WidgetHave;

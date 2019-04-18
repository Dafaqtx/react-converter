import React, { Component } from 'react';
import TextArea from '../widget-textarea';
import ControlButton from '../widget-btn';
import WidgetDate from '../widget-date';
import WigetTitle from '../wiget-title';
import './widget.css';

class Widget extends Component {
  render() {
    return (
      <div className='row justify-content-between'>
        <div className='col-6'>
          <WigetTitle title='I have' />
          <ControlButton />
          <TextArea />
        </div>
        <div className='col-6'>
          <WigetTitle title='I need' />
          <ControlButton />
          <TextArea />
          <WidgetDate />
        </div>
      </div>
    );
  }
}

export default Widget;

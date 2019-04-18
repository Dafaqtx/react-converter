import React, { Component } from 'react';
import TextArea from '../widget-textarea';
import ControlButton from '../widget-btn';
import WidgetDate from '../widget-date';
import './widget.css';

class Widget extends Component {
  render() {
    return (
      <div className='row justify-content-between'>
        <div className='col-6'>
          <span className='text-muted'>I have</span>
          <ControlButton />
          <TextArea />
        </div>
        <div className='col-6'>
          <span className='text-muted'>I need</span>
          <ControlButton />
          <TextArea />
          <WidgetDate />
        </div>
      </div>
    );
  }
}

export default Widget;

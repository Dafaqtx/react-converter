import React, { Component } from 'react';
import TextArea from '../widget-textarea';
import ControlButton from '../widget-btn';
import './widget.css';

class Widget extends Component {
  state = {
    currencies: [
      {
        id: 1,
        name: 'RUR',
        value: 0.016,
        active: true,
      },
      {
        id: 2,
        name: 'USD',
        value: 1,
        active: false,
      },
      {
        id: 3,
        name: 'EUR',
        value: 1.13,
        active: false,
      },
    ],
  };

  handleClick = () => {};

  render() {
    return (
      <div className='row justify-content-between'>
        <div className='col-6'>
          <span className='text-muted'>I have</span>
          <div className='mt-1 mb-4 controls'>
            {this.state.currencies.map((curency) => (
              <ControlButton curency={curency} />
            ))}
          </div>
          <div className='form-group'>
            <TextArea />
          </div>
        </div>
        <div className='col-6'>
          <span className='text-muted'>I need</span>
          <div className='mt-1 mb-4 controls'>
            {this.state.currencies.map((curency) => (
              <ControlButton curency={curency} />
            ))}
          </div>
          <div className='form-group'>
            <TextArea />
          </div>
          <div className='current-date'>
            <span className='current-date-label'>Данные за:</span>{' '}
            {new Date().toString()}
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;

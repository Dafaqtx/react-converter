import React, { Component } from 'react';
import './widget.css';

class Widget extends Component {
  render() {
    return (
      <div className='row justify-content-between'>
        <div className='col-6'>
          <span className='text-muted'>I have</span>
          <div className='mt-1 mb-4 controls'>
            <button type='button' className='btn btn-success'>
              RUR
            </button>
            <button type='button' className='btn btn-light mx-2'>
              USD
            </button>
            <button type='button' className='btn btn-light'>
              EUR
            </button>
            <button type='button' class='btn btn-light dropdown-toggle mx-2' />
          </div>
          <div className='form-group'>
            <textarea className='form-control no-resize' rows='6' />
          </div>
        </div>
        <div className='col-6'>
          <span className='text-muted'>I need</span>
          <div className='mt-1 mb-4 controls'>
            <button type='button' className='btn btn-light'>
              RUR
            </button>
            <button type='button' className='btn btn-success mx-2'>
              USD
            </button>
            <button type='button' className='btn btn-light'>
              EUR
            </button>
            <button type='button' class='btn btn-light dropdown-toggle mx-2' />
          </div>
          <div className='form-group'>
            <textarea className='form-control no-resize' rows='6' />
          </div>
        </div>
      </div>
    );
  }
}

export default Widget;

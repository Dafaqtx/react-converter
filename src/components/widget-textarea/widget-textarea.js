import React, { Component } from 'react';

class TextArea extends Component {
  handleChange = () => {};
  render() {
    return (
      <div className='form-group'>
        <textarea
          onChange={() => this.handleChange()}
          className='form-textarea form-control no-resize'
          rows='3'
        />
      </div>
    );
  }
}

export default TextArea;

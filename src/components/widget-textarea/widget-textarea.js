import React, { Component } from 'react';

class TextArea extends Component {
  handleChange = () => {};
  render() {
    return (
      <textarea
        onChange={() => this.handleChange()}
        className='form-textarea form-control no-resize'
        rows='3'
      />
    );
  }
}

export default TextArea;

import React, { Component } from 'react';

class TextArea extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    const value = event.target.value;
    const regExp = /^[0-9.]+$/;

    if (regExp.test(value) || value === '') {
      this.setState({ value });
    }
  };
  render() {
    return (
      <div className='form-group'>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          className='form-textarea form-control no-resize'
          rows='3'
        />
      </div>
    );
  }
}

export default TextArea;

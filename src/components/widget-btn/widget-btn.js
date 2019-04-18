import React, { Component } from 'react';

class ControlButton extends Component {
  handleClick = () => {};
  render() {
    const { curency } = this.props;

    return (
      <button
        onClick={() => this.handleClick()}
        type='button'
        className={`btn mr-2 ${curency.active ? 'btn-success' : 'btn-light'}`}
      >
        {curency.name}
      </button>
    );
  }
}

export default ControlButton;

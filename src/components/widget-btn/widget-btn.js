import React, { Component } from 'react';

class ControlButton extends Component {
  render() {
    const { curency } = this.props;

    return (
      <button
        onClick={() => this.handleClick()}
        key={curency.id}
        type='button'
        className={`btn mr-2 ${curency.active ? 'btn-success' : 'btn-light'}`}
      >
        {curency.name}
      </button>
    );
  }
}

export default ControlButton;

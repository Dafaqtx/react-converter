import React, { Component } from 'react';

class ControlButton extends Component {
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
      <div className='mt-1 mb-4 controls'>
        {this.state.currencies.map((curency) => (
          <button
            onClick={() => this.handleClick()}
            key={curency.id}
            type='button'
            className={`btn mr-2 ${
              curency.active ? 'btn-success' : 'btn-light'
            }`}
          >
            {curency.name}
          </button>
        ))}
      </div>
    );
  }
}

export default ControlButton;

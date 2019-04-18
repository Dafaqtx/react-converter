import React, { Component } from 'react';

class WigetTitle extends Component {
  render() {
    const { title } = this.props;
    return <span className='text-muted'>{title}</span>;
  }
}

export default WigetTitle;

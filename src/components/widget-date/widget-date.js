import React, { Component } from 'react';

class WidgetDate extends Component {
  state = {
    date: null,
  };

  componentDidMount() {
    const now = new Date().toString();
    this.setState({ date: now });
    this.updateDate();
  }

  updateDate = () => {
    setInterval(() => {
      const now = new Date().toString();
      this.setState({ date: now });
    }, 15000);
  };

  render() {
    return (
      <div className='current-date'>
        <span className='current-date-label'>Данные за: </span>
        {this.state.date}
      </div>
    );
  }
}

export default WidgetDate;

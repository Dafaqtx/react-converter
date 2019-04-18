import React, { Component } from 'react';

class WidgetDate extends Component {
  render() {
    return (
      <div className='current-date'>
        <span className='current-date-label'>Данные за: </span>
        {new Date().toString()}
      </div>
    );
  }
}

export default WidgetDate;

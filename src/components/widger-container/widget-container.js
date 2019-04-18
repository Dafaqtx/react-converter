import React, { Component } from 'react';
import Modal from 'react-modal';
import './widget-container.css';
import Widget from '../widget/';

import closeIcon from './close-icon.png';

Modal.setAppElement('#root');

class WidgetContainer extends Component {
  state = {
    modalIsOpen: true,
  };

  openModal = this.openModal.bind(this);
  closeModal = this.closeModal.bind(this);

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className='widget'>
        <div className='mx-auto w-25 p-3'>
          <button
            onClick={this.openModal}
            className='btn btn-primary btn-lg btn-block'
          >
            Open Widget
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayClassName='widget__overlay'
          className='widget__modal'
        >
          <img
            className='close-icon'
            src={closeIcon}
            alt='Close'
            onClick={this.closeModal}
          />
          <span className='close' />
          <Widget />
        </Modal>
      </div>
    );
  }
}

export default WidgetContainer;

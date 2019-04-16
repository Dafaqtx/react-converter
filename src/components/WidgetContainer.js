import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class WidgetContainer extends Component {
  state = {
    modalIsOpen: false,
  };

  openModal = this.openModal.bind(this);
  afterOpenModal = this.afterOpenModal.bind(this);
  closeModal = this.closeModal.bind(this);

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    return null;
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
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
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel='Example Modal'
        >
          123
        </Modal>
      </div>
    );
  }
}

export default WidgetContainer;

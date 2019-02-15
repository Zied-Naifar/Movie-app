import React, { Component } from 'react'
import {Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './AddCard.css'

export class addCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {
    return (
      <div className='add-container'>
        <Button color="danger" onClick={this.toggle}><i className="fas fa-plus"></i></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a new Movie</ModalHeader>
          <ModalBody>
            <Label className='label-form' for="image-src">Movie image source:</Label>
            <Input className='input-form' id="image-src" plaintext placeholder='movie src' />

            <Label for="image-name">Movie name:</Label>
            <Input className='input-form' id="image-name" plaintext placeholder='Movie name' />

            <Label for="image-description">Movie description:</Label>
            <Input className='input-form' id="image-description" plaintext placeholder='Movie name' />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default addCard

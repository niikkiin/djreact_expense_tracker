import React from 'react';

// styled components
import { ModalContainer, BackDropContainer, ModalHeader, ModalInput, InputContainer } from './modal.styles';

// icon
import { InlineIcon } from "@iconify/react";
import bxX from '@iconify/icons-bx/bx-x';


const Modal = ({ children, show, modalClosed }) => (
  <div>
    <BackDrop show={show} backDropClicked={modalClosed} />
    <ModalContainer className={show ? 'showModal' : 'hideModal'}>
      {/* TODO change to pass into a prop */}
      
      <ModalHeader>
        <span>
          Adding new item
        </span>
        <InlineIcon className='icon' icon={bxX} style={{color: '#000', fontSize: '24px'}} />
      </ModalHeader>
      <InputContainer>
        <ModalInput />
      </InputContainer>
      <InputContainer>
        <ModalInput />
      </InputContainer>
      <InputContainer>
        <ModalInput />
      </InputContainer>
        {/* NOTE if you decided to pass it using children use this */}
        {children}

    </ModalContainer>
  </div>
)

const BackDrop = ({ show, backDropClicked }) => (
  show ? <BackDropContainer onClick={backDropClicked} /> : null
);


export default Modal;
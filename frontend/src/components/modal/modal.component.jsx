import React from 'react';

// styled components
import { ModalContainer, BackDropContainer, ModalHeader, ModalInput, InputContainer } from './modal.styles';

// icon
import { InlineIcon } from "@iconify/react";
import bxX from '@iconify/icons-bx/bx-x';


const Modal = ({ children, show, modalClosed, header }) => (
  <div>
    <BackDrop show={show} backDropClicked={modalClosed} />
    <ModalContainer className={show ? 'showModal' : 'hideModal'}>
      {/* TODO change to pass into a prop */}
      
      <ModalHeader>
        <span>
          {header}
        </span>
        {/* TODO fix this close button soon */}
        <InlineIcon className='icon' icon={bxX} style={{color: '#000', fontSize: '24px'}} />
      </ModalHeader>
        {children}

    </ModalContainer>
  </div>
)

const BackDrop = ({ show, backDropClicked }) => (
  show ? <BackDropContainer onClick={backDropClicked} /> : null
);


export default Modal;
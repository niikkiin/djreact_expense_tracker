import styled from 'styled-components';

// component
import FormInput from '../form-input/form-input.component';

const lineBorderColor = '#F3F3F3';

export const ModalContainer = styled.div`
  display: table;
  transform: scale(0);
  z-index: 2;
  position: fixed;
  top: 15%;
  left: 30%;
  background-color: #ffffff;
  width: 40%;
  padding: 2rem;
  transition: all 0.3s ease-out;
  border-radius: 1.5rem;


  &.showModal {
    opacity: 1;
    animation: scaleUp 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  }
  
  &.hideModal {
    animation: scaleDown 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  }

  @keyframes scaleUp {
    0% {
      transform:scale(.8) translateY(1000px);
      opacity:0;
    }
    100% {
      transform:scale(1) translateY(0px);
      opacity:1;
    }
  }

  @keyframes scaleDown {
    0% {
      transform:scale(1) translateY(0px);
      opacity:1;
    }
    100% {
      transform:scale(.8) translateY(1000px);
      opacity:0;
    }
  }

  ~ button {
    opacity: 0;
    animation: scaleBack .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  }
  
  @keyframes scaleBack {
    0% {
      transform:scale(1);
    }
    100% {
      transform:scale(.85);
    }
  }
`;

export const BackDropContainer = styled.div`
  animation: fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(158,164,180,0.75);
  // TODO move to main container to scaledown


  @keyframes fadeIn {
    0% {
      background:rgba(0,0,0,.0);
    }
    100% {
      background:rgba(0,0,0,.7);
    }
  }

`;

export const ModalHeader = styled.div`
  font-size: 1.8rem;
  border-bottom: 2px solid ${lineBorderColor};

  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  span {
    color: #323232;
  }

  .icon {
    color: #9EA4B4;
  }
`;

export const ModalInput = styled(FormInput)`
  // future styles
`;

export const InputContainer = styled.div`
  padding: 2rem 0;
`;
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../globalStyles';
import{
    InfoSec
} from './ActionButton'

function Popup() {
  return (
      <>
       <InfoSec lightBg={true}>
           <Container></Container>
       </InfoSec>
     </>
  );
}

export default Popup;
import React from 'react';
import { Container } from './styles' ;
import { MdAccountCircle } from "react-icons/md";
   
export default function header() {
  return (
    <Container>
      <h1>MyBoard</h1>
      <MdAccountCircle size="26px"/>
    </Container>
  )
}

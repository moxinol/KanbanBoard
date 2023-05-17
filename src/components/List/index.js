import React from 'react'

import { Container } from './styles';
import { MdAdd } from "react-icons/md";
import Card from '../Card';



export default function list( { data } ) {
  return (   
    <Container>
     <header>
      <h2>{data.title}</h2>
        {data.creatable && (
          <button type= "button">
          <MdAdd size={24} color="#FFF"/>
          </button>
        )}
      </header>
      <ul>
        { data.cards.map(card => <Card key={card.id} data={card}/>) }
       
      </ul>
    </Container>
  )
}

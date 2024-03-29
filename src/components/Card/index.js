import React from 'react'
import { Container, Label } from './styles' ;

export default function card( {data}) {
  return (
    <Container>
      <header>
        <Label color={data.labels} />
      </header>
      <p>{data.content}</p>
      {data.user &&
      <img src={data.user} alt="user avatar" />}
    </Container>
  )
}
